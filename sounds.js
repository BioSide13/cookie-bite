function loadSound(url) {
    return new Promise((resolve, reject) => {
        const audio = new Audio(url);
        audio.addEventListener('canplaythrough', () => resolve(audio), false);
        audio.addEventListener('error', () => reject(new Error('Failed to load sound: ' + url)), false);
    });
}

function playSound(audio) {
    audio.currentTime = 0; // Reset to start
    audio.play().catch(error => console.error('Error playing sound:', error));
}

const sounds = {
    bite: null,
};

async function initSounds() {
    sounds.bite = await loadSound('assets/bite.mp3');
}

export { initSounds, playSound, sounds };