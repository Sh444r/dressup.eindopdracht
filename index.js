document.addEventListener('DOMContentLoaded', () => {
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
    
    const topImg = document.getElementById('current-top');
    const rokImg = document.getElementById('current-rok');
    
    document.getElementById('change-top').addEventListener('click', () => {
        currentTopIndex = (currentTopIndex + 1) % tops.length;
        topImg.src = tops[currentTopIndex];
    });

    document.getElementById('change-rok').addEventListener('click', () => {
        currentRokIndex = (currentRokIndex + 1) % rokken.length;
        rokImg.src = rokken[currentRokIndex];
    });

    // Add similar functionality for shoes if needed

    document.getElementById('done-button').addEventListener('click', () => {
        // Trigger confetti effect
        triggerConfetti();
    });
});

// Function to trigger confetti effect
function triggerConfetti() {
    const duration = 5 * 1000; // Duration of the confetti effect in milliseconds (5 seconds)
    const animationEnd = Date.now() + duration;

    // Function to create a single confetti particle
    function createConfetti() {
        confetti({
            particleCount: 100, // Number of confetti particles
            spread: 160, // Spread of the confetti particles
            origin: { y: 0.6 } // Origin of the confetti particles (from the top)
        });
    }

    // Function to continuously create confetti particles until the animation end time
    function loop() {
        const now = Date.now();
        if (now < animationEnd) {
            requestAnimationFrame(loop);
        }
        createConfetti();
    }

    loop(); // Start the confetti animation
}

// Event listener for the "Done" button
document.getElementById('done-button').addEventListener('click', () => {
    // Trigger confetti effect when the "Done" button is clicked
    triggerConfetti();
});