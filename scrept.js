const audio = document.querySelector('#song');
const song1Toggle = document.querySelector('#song1Toggle');
const song2Toggle = document.querySelector('#song2Toggle');

function handleSongToggle(radio) {
    if (radio.checked) {
        // Check if it's already playing this exact song, if so, turn it off
        if (audio.src.includes(radio.value) && !audio.paused) {
            audio.pause();
            audio.currentTime = 0;
            radio.checked = false; // Uncheck it visually
        } else {
            audio.src = radio.value;
            audio.loop = true;
            audio.play().catch(err => {
                console.log("Audio play blocked:", err);
            });
        }
    }
}

song1Toggle.addEventListener('click', () => handleSongToggle(song1Toggle));
song2Toggle.addEventListener('click', () => handleSongToggle(song2Toggle));