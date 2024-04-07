function onClick(event){
    const elemento =event.currentTarget.parentNode.querySelector('.hidden');
    // elemento = primo elemento con classe hidden all'interno del div che contiene l'elemento
    // 'a' che ha generato l'evento
    elemento.classList.remove('hidden');
    console.log("rimosso");
}

function remove(event){
    event.currentTarget.parentNode.parentNode.classList.add('hidden');
}

function login(){

    const elem = document.querySelector('#loginPage');
    if(elem.classList.contains('hidden')){
        elem.classList.remove('hidden');
    }else{
        elem.classList.add('hidden');
    }
}

// codice relativo al cambio delle immagini relative al programma fedeltà
const imgUrls =[
    "media/connoiss.png",
    "media/ambasci.png",
    "media/expert.png"
];
let index=0;

function changeImg() {
    const container = document.querySelector('#dinamico');
    const img = container.querySelector('img');
    img.src=imgUrls[index];
    index++;
    if(index>= imgUrls.length)
        index=0;
}

setInterval(changeImg,5000);

// 



const buttons = document.querySelectorAll('.onClick');
// mi restituisce una lista, per ogni elemento creo un listener sul click del link "scopri di più"
for(let button of buttons)
    button.addEventListener('click',onClick);

const closes = document.querySelectorAll('.close');
for(let close of closes)
    close.addEventListener('click', remove);

// per la comparsa della pagina di login
const account = document.querySelector('#accountLogin');
    account.addEventListener('click',login);
