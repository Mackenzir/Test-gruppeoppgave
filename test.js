// App modell
document.getElementById('app');

// viewController
function updateView() {
    app.innerHTML = /*HTML*/ `
        <div class="inventory">
        <div id="layout">
            <div class="card" onclick="moveDiv(this)"></div>
        </div>
        <div id="hotbar"></div>
        </div>
    `;
}

function moveDiv() {
    let layout = document.getElementById("layout");
    let hotbar = document.getElementById("hotbar");

    if (hcard1.innerHTML === "") hcard1.innerHTML = element.outerHTML;
    else lcard1.innerHTML = element.outerHTML;
    element.remove();
}