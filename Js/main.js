// Aquí seleccionamos los elementos del DOM
//llamamos a los botnoes para navegar entre las páginas
const prevBtn = document.querySelector("#prev-btn"); 
const nextBtn = document.querySelector("#next-btn");
//book es el contenedor que represeta la revista
const book = document.querySelector("#book");

//LLamamos al id desde p1 a p5 que representa las páginas de la revist
const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");
const paper5 = document.querySelector("#p5");

// Se añaden los eventos a los botones, cuando se hacen click en cada uno llama a la función goPrevPage y goNextPage
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

let currentLocation = 1; //esta variable mantiene un seguimiento de la página actual
let numOfPapers = 5; //esta variable representa el número total de las páginas
let maxLocation = numOfPapers + 1; // esta variable es el límite superior a la nevagción, para manejar el esado después de la última página

function openBook() { //Creamos una función para mover la revista hacia la derecha y que se desplacen los botnoes fuera de la vista 
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-180px)";
    nextBtn.style.transform = "translateX(180px)";
}

function closeBook(isAtBeginning) { //en este caso, devuelve la revista a su posición general, si está al principio cierra completamente; si no, lo mueve a la izquierda
    if(isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
    
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function goNextPage() { //con esta funciónverifica si hay más páginas disponibles, dependiendo de la página actual se aplican las tranformaciones, cuando llegue a la pultima página se rompe el ciclo
    if(currentLocation < maxLocation) {
        switch(currentLocation) {
            case 1:
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                break;
            case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                break;
            case 3:
                paper3.classList.add("flipped");
                paper3.style.zIndex = 3;
                break;
            case 4:
                paper4.classList.add("flipped");
                paper4.style.zIndex = 4;
                break;
            case 5:
                paper5.classList.add("flipped");
                paper5.style.zIndex = 5;
                closeBook(false);
                break;
            default:
                throw new Error("unkown state");
        }
        currentLocation++;
    }
}

function goPrevPage() { //similar al caso anterior, solo que esta función en este caso permite retroceder por cada una de las páginas y así utilizamos el mismo Case pero de manera de retroceso
    if(currentLocation > 1) {
        switch(currentLocation) {
            case 2:
                closeBook(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 5;
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 4;
                break;
            case 4:
                openBook();
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 3;
                break;
            case 5: 
                openBook();
                paper4.classList.remove("flipped");
                paper4.style.zIndex = 2;
                break;
            case 6: 
                openBook();
                paper5.classList.remove("flipped");
                paper5.style.zIndex = 1;
                break;
            default:
                throw new Error("unkown state");
        }

        currentLocation--;
    }
}