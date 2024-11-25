const app = document.getElementById('app');

// View update function
function updateView() {
    app.innerHTML = `
     <div class="inventory">
        <div id="layout">
            <div class="card" onclick="moveDiv(this)"><img src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9zY3IvY..."></div>
            <!-- Add more cards as before -->
        </div>
        <hr>
        <div id="hotbar">
            <!-- Empty slots for hotbar -->
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
        </div>
    </div>`;
}

// Move card to hotbar
function moveDiv(element) {
    const hotbar = document.getElementById("hotbar");
    const emptySlot = Array.from(hotbar.children).find(slot => slot.children.length === 0);

    if (emptySlot) {
        emptySlot.appendChild(element);
    } else {
        console.log("No empty slots available in the hotbar!");
    }
}

updateView();
