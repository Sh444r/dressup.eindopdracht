console.log("hello world")

//!!!!hier begint input voor hallo zeggen
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

// !!!!! random outfits genereren

console.log("randomoutfits")

document.addEventListener('DOMContentLoaded', () => {

    changeOutfit();


    const changeOutfitButton = document.querySelector('#change-outfit-button');
    changeOutfitButton.addEventListener('click', () => {
        changeOutfit();
    });
});

function changeOutfit() {
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

    let currentTopIndex = Math.floor(Math.random() * tops.length);
    let currentRokIndex = Math.floor(Math.random() * rokken.length);

    const topImg = document.querySelector('#current-top');
    const rokImg = document.querySelector('#current-rok');
    const dollContainer = document.querySelector('#aankleedpopje-leeg'); 

// Functie om huidige outfit random te veranderen
function updateOutfit() {
    topImg.src = tops[currentTopIndex];
    rokImg.src = rokken[currentRokIndex];
}


updateOutfit();

    document.querySelector('#change-outfit-button').addEventListener('click', () => {
        currentTopIndex = Math.floor(Math.random() * tops.length);
        currentRokIndex = Math.floor(Math.random() * rokken.length);
        updateOutfit();
    });
}

// outfit kiezen met verander top/rok butttons

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
    
    document.querySelector('#change-top').addEventListener('click', () => {
        currentTopIndex = (currentTopIndex + 1) % tops.length;
        topImg.src = tops[currentTopIndex];
    });

    document.querySelector('#change-rok').addEventListener('click', () => {
        currentRokIndex = (currentRokIndex + 1) % rokken.length;
        rokImg.src = rokken[currentRokIndex];
    });
} )

//!!!!hier begint settimeout voor wanneer je op klaar klikt en de poppetje groter wordt

console.log("Aankleedpopje");

function enlargeDollContainer() {
    const dollContainer = document.querySelector('#aankleedpopje-leeg');
    dollContainer.classList.add('enlarged');


    setTimeout(() => {
        dollContainer.classList.remove('enlarged');
    }, 2000);
}


document.querySelector('#klaar').addEventListener('click', () => {
    enlargeDollContainer(); 
});

// setinterval, checken van user activity

function checkUserActivity() {
    if ("hallo") {
        alert('Ben je er nog?');
    }
}

setInterval(checkUserActivity, 60000);