console.log("hello world")

//Hier begint code input voor groeten van user met 'Hallo (naam)'.

console.log("hallo zeggen")

const userInput = document.querySelector('#user-input');
const zegHalloButton = document.querySelector('#zeg-hallo-button');
const antwoord = document.querySelector('#antwoord');

zegHalloButton.addEventListener('click', () => {
    const naam = userInput.value.trim();
    if (naam) {
        antwoord.textContent = `Hey, ${naam}!`; 
    } else {
        antwoord.textContent = 'Hallo!';
    }
});

//Hier begint code om random outfits te genereren

console.log("randomoutfits")

document.addEventListener('DOMContentLoaded', () => {

    veranderOutfit();

    const veranderOutfitButton = document.querySelector('#change-outfit-button');
    veranderOutfitButton.addEventListener('click', () => {
        veranderOutfit(); // Hiermee kan ik random outfits genereren.
    });
});

function veranderOutfit() {
    const tops = [
        'img/poppetje-bovenkant-1.png',
        'img/poppetje-bovenkant-2.png',
        'img/poppetje-bovenkant-3.png'
    ];

    const rokken = [
        'img/poppetje-onderkant-1.png',
        'img/poppetje-onderkant-2.png',
        'img/poppetje-onderkant-3.png'
    ];

    let currentTopIndex = Math.floor(Math.random() * tops.length);  // Hiermee kan ik random topjes genereren
    let currentRokIndex = Math.floor(Math.random() * rokken.length);// Hiermee kan ik random rokjes genereren


    const topImg = document.querySelector('#current-top');
    const rokImg = document.querySelector('#current-rok');
    const popjeContainer = document.querySelector('#aankleedpopje-leeg'); 

// Functie om huidige outfit random te veranderen.
function updateOutfit() {
    topImg.src = tops[currentTopIndex];
    rokImg.src = rokken[currentRokIndex];
}


updateOutfit();

    // Met addEventListener kan ik op het drukken van random outfit, random outfits krijgen.
    document.querySelector('#change-outfit-button').addEventListener('click', () => {
        currentTopIndex = Math.floor(Math.random() * tops.length);
        currentRokIndex = Math.floor(Math.random() * rokken.length);
        updateOutfit();
    });
}
// random outfits genereren code met behulp van bron: https://www.w3schools.com/js/js_random.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

//Hier begint code om outfit te kiezen met 'verander top/rok' butttons

document.addEventListener('DOMContentLoaded', () => {
    const topImg = document.querySelector('#current-top');
    const rokImg = document.querySelector('#current-rok');
    
    topImg.src = ''; 
    rokImg.src = ''; 

    const tops = [
        'img/poppetje-bovenkant-1.png',
        'img/poppetje-bovenkant-2.png',
        'img/poppetje-bovenkant-3.png'
    ];
    
    const rokken = [
        'img/poppetje-onderkant-1.png',
        'img/poppetje-onderkant-2.png',
        'img/poppetje-onderkant-3.png'
    ];
    
    let currentTopIndex = 0;
    let currentRokIndex = 0;

    // Door addEventListener kan ik door op 'Verander top/rok' de top of rok veranderen
    document.querySelector('#change-top').addEventListener('click', () => {
        currentTopIndex = (currentTopIndex + 1) % tops.length;
        topImg.src = tops[currentTopIndex];
    });

    document.querySelector('#change-rok').addEventListener('click', () => {
        currentRokIndex = (currentRokIndex + 1) % rokken.length;
        rokImg.src = rokken[currentRokIndex];
    });
} )
// met behulp van bron: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

//Hier begint code van settimeout voor wanneer je op klaar klikt en het poppetje groter wordt en er sparkles bijkomen.

console.log("Aankleedpopje");

function groterpopjeContainer() {
    const popjeContainer = document.querySelector('#aankleedpopje-leeg');
    const sparkles = document.querySelector('#sparkles');

    popjeContainer.classList.add('groter');
    sparkles.style.display = 'block';

    
    setTimeout(() => {
        popjeContainer.classList.remove('groter');
        sparkles.style.display = 'none';
    }, 2000);// Na 2 seconden, wordt het popje weer kleiner en verdwijnen de sparkles.
} 


document.querySelector('#klaar').addEventListener('click', () => {
    groterpopjeContainer(); 
});
// animatie img van sparkles met behulp van bron: https://www.w3schools.com/jsref/prop_style_display.asp

//Hier begint code van setinterval waarbij er gecheckt wordt op  user activity, na 2 minuten alert van of user nog gebruik maakt van de game.

function checkUserActiviteit() {
    if ("hallo") {
        alert('Ben je er nog?');
    }
}

setInterval(checkUserActiviteit, 120000); // na 2 minuten useractiviteit bericht

// met behulp van bron https://stackoverflow.com/questions/39801295/how-to-wait-a-certain-interval-then-check-for-user-activity-and-fire-code-and-s