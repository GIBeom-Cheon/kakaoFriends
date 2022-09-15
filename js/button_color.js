const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
];
const btn = document.querySelector("#color-btn");
function bc() {
    const rc1 = colors[Math.floor(Math.random() * colors.length)];
    const rc2 = colors[Math.floor(Math.random() * colors.length)];

    const gc = `linear-gradient(to left top, ${rc1} , ${rc2})`;

    document.body.style.background = gc;
    // gradient 로 배경을 주려면 background-image 나 background 로 줘야한다
}

btn.addEventListener("click", bc);

