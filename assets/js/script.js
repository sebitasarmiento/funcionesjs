// const ele = document.getElementById("ele1");
// ele.style.backgroundColor = "green";
// let clicked = false;
// function pintar() {
//     clicked = !clicked;
//     if (clicked) {
//         ele.style.backgroundColor = "yellow";
//     } else {
//         ele.style.backgroundColor = "green";
//     }
// }

// ele.addEventListener("click", pintar);

// const divAzul = document.getElementById("color-azul");
// const divRojo = document.getElementById("color-rojo");
// const divVerde = document.getElementById("color-verde");
// const divAmarillo = document.getElementById("color-amarillo");

// function pintarNegro(e) {
//     const divNegro = e.target;
//     divNegro.style.backgroundColor = "black";
// }

// divAzul.addEventListener("click", pintarNegro);
// divRojo.addEventListener("click", pintarNegro);
// divVerde.addEventListener("click", pintarNegro);
// divAmarillo.addEventListener("click", pintarNegro);

const keyDiv = document.getElementById("key");

document.addEventListener("keydown", (e) => {
    if (e.key === "a") {
        key.style.backgroundColor = "pink";
    } else if (e.key === "s") {
        key.style.backgroundColor = "orange";
    } else if (e.key === "d") {
        key.style.backgroundColor = "blue";
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "q") {
        divColor = "purple";
    } else if (e.key === "w") {
        divColor = "gray";
    } else if (e.key === "e") {
        divColor = "brown";
    }

    if (divColor) {
        const newDiv = document.createElement("div");
        newDiv.style.width = "200px";
        newDiv.style.height = "200px";
        newDiv.style.backgroundColor = divColor;
        newDiv.style.border = "2px solid black";

        document.body.appendChild(newDiv);
    }
});
