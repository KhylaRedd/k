document.addEventListener("DOMContentLoaded", function() {
    // Get the input fields and inventory list
    const titleInput = document.getElementById("Title");
    const authorInput = document.getElementById("Author");
    const imageUrlInput = document.getElementById("Image-Url");
    const priceInput = document.getElementById("Price");
    const stockSelect = document.getElementById("Stock");
    const inventoryButton = document.getElementById("InventoryButton");

    // Function to add a new item to the inventory list
    function addToInventory() {
        // Get the values from the input fields
        const title = titleInput.value.trim();
        const author = authorInput.value.trim();
        const imageUrl = imageUrlInput.value.trim();
        const price = priceInput.value.trim();
        const stock = stockSelect.value;

        // Create a new list item
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <div>
                <img src="${imageUrl}" alt="${title}">
                <h3>${title}</h3>
                <p>Author: ${author}</p>
                <p>Price: ${price}</p>
                <p>Stock: ${stock}</p>
            </div>
        `;

        // Append the new list item to the inventory list
        inventoryList.appendChild(listItem);

        // Clear the input fields
        titleInput.value = "";
        authorInput.value = "";
        imageUrlInput.value = "";
        priceInput.value = "";
        stockSelect.value = "In-stock";
    }

    // Event listener for "Add to Inventory" button click
    document.getElementById("inventoryButton").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default form submission
        addToInventory(); // Call the function to add a new item to the inventory list
    });
});
