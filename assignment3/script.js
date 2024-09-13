// Fetch data from the server
fetch('http://localhost:3000/products')
    .then(res => res.json())
    .then(json => {
        json.forEach(data => {
            table.append(tableFill(data));
        });
    });

// Get the table body element
let table = document.getElementById('tbody');

// Function to create a table row with product data
function tableFill({id, name, description, price, category, stock}) {  
    let tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${id}</td>
        <td>${name}</td>
        <td>${description}</td>
        <td>${price}</td>
        <td>${category}</td>
        <td>${stock}</td>
    `;
    return tr;
}