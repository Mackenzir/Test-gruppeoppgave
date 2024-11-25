const app = document.getElementById('app');
// App modell
// viewController
function updateView() {
    app.innerHTML = /*HTML*/ `
     <div class="inventory">
        <div id="layout">
            <div class="card" onclick="moveDiv(this)"><img src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAzL3Jhd3BpeGVsX29mZmljZV8zOF9pbGx1c3RyYXRpb25fb2Zfb3JuYXRlX3N3b3JkX2lzb2xhdGVkX29uX2NsZV9kMGY5ZDZhZC0xYTk3LTQyYTAtYjAyYi1hNjYyYzJhMjllNGIucG5n.png"></div>
            <div class="card" onclick="moveDiv(this)"><img src="https://runescape.wiki/images/thumb/Love_potion_detail.png/640px-Love_potion_detail.png?c5b9a"></div>
            <div class="card" onclick="moveDiv(this)"><img src="https://www.medievalcollectibles.com/wp-content/uploads/2019/10/MCI-2429.jpg"></div>
            <div class="card" onclick="moveDiv(this)"><img src="https://www.darksword-armory.com/wp-content/uploads/2014/09/crusader-medieval-dagger-1814-scaled.jpg"></div>
            <div class="card" onclick="moveDiv(this)"><img src="https://i.pinimg.com/564x/ce/0f/8e/ce0f8eec0cec10518912e87351e43e35.jpg"></div>
            <div class="card" onclick="moveDiv(this)"><img src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/24945/1548499/main-image"></div>
            <div class="card" onclick="moveDiv(this)"><img src="https://www.outfit4events.cz/images/palette/shared/www/multimedia/images/stredoveke-stity.1443294657.1696348283.jpg.webp"></div>
            <div class="card" onclick="moveDiv(this)"><img src="https://www.apotek1.no/wcsstore/ApoProductMaster/media/9626b273-8498-43c8-931b-ddd978b7b8ff"></div>
            <div class="card" onclick="moveDiv(this)"><img src="https://medievalextreme.com/wp-content/uploads/2024/08/DSC_1656-Edit-2.jpeg"></div>
        </div>
                <hr>
            <div id="hotbar">
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
    </div>
    `;
}
 function moveDiv(element) {
     const hotbar = document.getElementById("hotbar");

     const emptySlot = Array.from(hotbar.children).find(
        (slot) => slot.children.length === 0
    );

    if (emptySlot) {
         emptySlot.appendChild(element);
    } else {
        console.log("No empty slots available in the hotbar!");
    }
 }

 function getClickPosition(e) {
     const x = e.clientX;
    const y = e.clientY;
       console.log(`Click position: X=${x}, Y=${y}`);
 }

 document.addEventListener('click', (e) => {    
    console.log(`Click position: X=${e.clientX}, Y=${e.clientY}`);

});

updateView();

// function moveDiv() {
//     let layout = document.getElementById("layout");
//     let hotbar = document.getElementById("hotbar");

//     if (hcard1.innerHTML === "") hcard1.innerHTML = element.outerHTML;
//     else lcard1.innerHTML = element.outerHTML;
//     element.remove();
// }
// function getClickPosistion(e) {

// }