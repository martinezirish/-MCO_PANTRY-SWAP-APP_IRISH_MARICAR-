// Start Swapping button
function showMessage() {
    alert("Welcome to Pantry Swap! You can now swap your pantry items.");
}


// Add a new pantry item
function addItem() {

    let name = document.getElementById("itemName").value;
    let quantity = document.getElementById("itemQuantity").value;

    if (name === "" || quantity === "") {
        alert("Please enter the item name and quantity.");
        return;
    }

    let itemList = document.getElementById("itemList");

    let newItem = document.createElement("div");

    newItem.classList.add("item-card");

    newItem.innerHTML = `
        <span class="food-icon">🥫</span>

        <div>
            <h3>${name}</h3>
            <p>${quantity}</p>
        </div>

        <button onclick="swapItem('${name}')">
            Swap
        </button>
    `;

    itemList.appendChild(newItem);

    document.getElementById("itemName").value = "";
    document.getElementById("itemQuantity").value = "";

    alert(name + " has been added to your pantry!");
}


// Swap item
function swapItem(item) {

    alert(
        "Swap request sent for " +
        item +
        "!"
    );
}


// Edit profile
function editProfile() {

    let name = prompt("Enter your name:");

    if (name !== null && name !== "") {

        alert(
            "Profile updated successfully!\nWelcome, " +
            name
        );
    }
}
