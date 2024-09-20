document.addEventListener('DOMContentLoaded', () => {
    const eventsContainer = document.getElementById('events');
    const favoritesContainer = document.getElementById('favorites-list');
    let eventsData = [];
    let favorites = [];

    const CACHE_KEY = 'eventsData';
    const CACHE_EXPIRY = 48 * 60 * 60 * 1000; // 48 hours

    async function fetchData() {
        const cachedData = localStorage.getItem(CACHE_KEY);
        const cachedTimestamp = localStorage.getItem(`${CACHE_KEY}_timestamp`);

        if (cachedData && cachedTimestamp && (Date.now() - cachedTimestamp < CACHE_EXPIRY)) {
            eventsData = JSON.parse(cachedData);
            renderEvents(eventsData);
        } else {
            try {
                const response = await fetch("https://run.mocky.io/v3/e39724d5-c4d1-4cdf-847f-d9e837a4fe23");
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                eventsData = await response.json();
                localStorage.setItem(CACHE_KEY, JSON.stringify(eventsData));
                localStorage.setItem(`${CACHE_KEY}_timestamp`, Date.now());
                renderEvents(eventsData);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        }
    }

    function renderEvents(events) {
        eventsContainer.innerHTML = '';
        const fragment = document.createDocumentFragment();
        events.forEach(event => {
            const eventCard = document.createElement('div');
            eventCard.className = 'event-card';
            eventCard.innerHTML = `
                <img src="${event.imageUrl}" alt="${event.title}">
                <h3>${event.title}</h3>
                <p>${event.date}</p>
                <p>${event.location}</p>
                <p>$${event.price}</p>
                <button class="add-to-favorites" data-id="${event.id}">Add to cart</button>
            `;
            fragment.appendChild(eventCard);
        });
        eventsContainer.appendChild(fragment);
    }

    function renderFavorites() {
        favoritesContainer.innerHTML = '';
        const fragment = document.createDocumentFragment();
        favorites.forEach(favorite => {
            const favoriteCard = document.createElement('div');
            favoriteCard.className = 'favorite-card';
            favoriteCard.innerHTML = `
                <img src="${favorite.imageUrl}" alt="${favorite.title}">
                <h3>${favorite.title}</h3>
                <p>${favorite.date}</p>
                <p>${favorite.location}</p>
                <p>$${favorite.price}</p>  
                <p>Quantity: <button class="decrease-quantity" data-id="${favorite.id}">-</button>
                ${favorite.quantity}
                <button class="increase-quantity" data-id="${favorite.id}">+</button></p>              
                <button class="remove-from-favorites" data-id="${favorite.id}">Remove from Cart</button>
            `;
            fragment.appendChild(favoriteCard);
        });
        favoritesContainer.appendChild(fragment);
    }

    function filterEvents() {
        const date = document.getElementById('filter-date').value;
        const price = document.getElementById('filter-price').value;
        const location = document.getElementById('filter-location').value.toLowerCase();

        let filteredEvents = eventsData;

        if (date) {
            filteredEvents = filteredEvents.filter(event => new Date(event.date) >= new Date(date));
        }

        if (price) {
            filteredEvents = filteredEvents.filter(event => event.price <= price);
        }

        if (location) {
            filteredEvents = filteredEvents.filter(event => event.location.toLowerCase().includes(location));
        }

        renderEvents(filteredEvents);
    }

    function sortEvents(criteria, order) {
        const sortedEvents = [...eventsData].sort((a, b) => {
            if (order === 'asc') {
                return a[criteria] > b[criteria] ? 1 : -1;
            } else {
                return a[criteria] < b[criteria] ? 1 : -1;
            }
        });
        renderEvents(sortedEvents);
    }

    document.getElementById('apply-filters').addEventListener('click', filterEvents);

    document.getElementById('sort-price-asc').addEventListener('click', () => sortEvents('price', 'asc'));
    document.getElementById('sort-price-desc').addEventListener('click', () => sortEvents('price', 'desc'));
    document.getElementById('sort-date-asc').addEventListener('click', () => sortEvents('date', 'asc'));
    document.getElementById('sort-date-desc').addEventListener('click', () => sortEvents('date', 'desc'));

    eventsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-favorites')) {
            const eventId = e.target.getAttribute('data-id');
            const event = eventsData.find(event => event.id == eventId);
            const existingFavorite = favorites.find(favorite => favorite.id == eventId);

            if (existingFavorite) {
                existingFavorite.quantity += 1;
            } else {
                event.quantity = 1; // Set initial quantity
                favorites.push(event);
            }
            renderFavorites();
        }
    });

    favoritesContainer.addEventListener('click', (e) => {
        const eventId = e.target.getAttribute('data-id');
        const favorite = favorites.find(favorite => favorite.id == eventId);

        if (e.target.classList.contains('remove-from-favorites')) {
            favorites = favorites.filter(event => event.id != eventId);
            renderFavorites();
        }

        if (e.target.classList.contains('increase-quantity')) {
            favorite.quantity += 1;
            renderFavorites();
        }

        if (e.target.classList.contains('decrease-quantity')) {
            if (favorite.quantity > 1) {
                favorite.quantity -= 1;
            }
            renderFavorites();
        }
    });

    fetchData();
});
