document.addEventListener("DOMContentLoaded", function() {
    // this gets the input fields and also the inventory list
    const form = document.querySelector('.right__form');
    const titleInput = document.getElementById("title");
    const authorInput = document.getElementById("author");
    const imageUrlInput = document.getElementById("image-Url");
    const priceInput = document.getElementById("price");
    const stockSelect = document.getElementById("stock");
    const inventoryButton = document.getElementById("inventoryButton");
    const inventoryList = document.getElementById("booklist");
    const trashIcons = document.querySelectorAll('.fas fa-trash-alt'); // this will Select all of trash icons

    function validateForm() {
        return titleInput.checkValidity() &&
               authorInput.checkValidity() &&
               imageUrlInput.checkValidity() &&
               priceInput.checkValidity() &&
               stockSelect.checkValidity();
    }

    // this function adds a new book to the inventory list
    function addToInventory() {
        // retrieves the values from the input fields
        const title = titleInput.value.trim();
        const author = authorInput.value.trim();
        const imageUrl = imageUrlInput.value.trim();
        const price = priceInput.value.trim();
        const stock = stockSelect.value;

        // this will create a new list item
        const listItem = document.createElement("li");
        listItem.classList.add('book'); // Add a 'book' class to the list item
        listItem.innerHTML = `
            <div>
                <img src="${imageUrl}" alt="${title}">
                <h3>${title}</h3>
                <p>Author: ${author}</p>
                <p>Price: ${price}</p>
                <p>Stock: ${stock}</p>
                <i class="fa-solid fa-trash-can"></i> <!-- Add trash icon to each new list item -->
            </div>
        `;

        // Appends the new list item to the inventory list
        inventoryList.appendChild(listItem);//our book

        // clears the input 
        titleInput.value = "";
        authorInput.value = "";
        imageUrlInput.value = "";
        priceInput.value = "";
        stockSelect.value = "In-stock";
    }

    //  "Add to Inventory" button click
    inventoryButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevents the default form submission ( basically refreshing)
        if (validateForm()) { 

            addToInventory(); // Calls the function to add a new item to the inventory list
        }
    });

    // Add event listeners to trash icons
    trashIcons.forEach(trashIcon => {
        trashIcon.addEventListener('click', (e) => {
            const listItem = e.target.closest('.book'); // Find the closest parent element with class 'book'
            if (listItem) {
                listItem.remove(); // Removes the book item
            }
        });
    });
});
