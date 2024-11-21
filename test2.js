// const app = document.getElementById('app');

// function updateView() {
//     app.innerHTML = /*HTML*/ `
//         <div class="inventory">
//             <div id="layout">
//                 <div class="card" onclick="moveDiv(this)"><img src="https://via.placeholder.com/100"></div>
//                 <div class="card" onclick="moveDiv(this)"><img src="https://via.placeholder.com/100"></div>
//                 <div class="card" onclick="moveDiv(this)"><img src="https://via.placeholder.com/100"></div>
//             </div>
//             <hr>
//             <div id="hotbar">
//                 <div class="card"></div>
//                 <div class="card"></div>
//                 <div class="card"></div>
//             </div>
//         </div>
//     `;
// }

// function moveDiv(element) {
//     let hotbar = document.getElementById("hotbar");

//     const emptySlot = Array.from(hotbar.children).find(
//         (slot) => slot.children.length === 0
//     );

//     if (emptySlot) {
//         emptySlot.innerHTML = element.outerHTML;
//         element.remove();
//     } else {
//         console.log("No empty slots available in the hotbar!");
//     }
// }

// function getClickPosition(e) {
//     const x = e.clientX;
//     const y = e.clientY;
//     console.log(`Click position: X=${x}, Y=${y}`);
// }

// document.addEventListener('click', getClickPosition);

// updateView();
