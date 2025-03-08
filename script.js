// 🔹 Daftar lagu YouTube (ID Video & Nama Lagu)
let songs = [
    { id: "98zHKN-xSHk", title: "yung kai - blue" },
    { id: "L3JGDubE11s", title: "BAWA DIA KEMBALI - MAHALINI" },
    { id: "0aMN5sOn5Ls", title: "GHEA INDRAWARI - JIWA YANG BERSEDIH" }
];

let youtubePlayer = document.getElementById("youtubePlayer");
let playPauseButton = document.getElementById("playPauseButton");
let nextButton = document.getElementById("nextButton");
let songTitle = document.getElementById("songTitle");

let currentSongIndex = -1; // Belum ada lagu yang dipilih
let isPlaying = false;

// 🔹 Fungsi untuk memutar lagu secara acak
function playRandomSong() {
    let randomIndex;
    
    // Pastikan lagu yang dipilih tidak sama dengan sebelumnya
    do {
        randomIndex = Math.floor(Math.random() * songs.length);
    } while (randomIndex === currentSongIndex);

    currentSongIndex = randomIndex;
    let videoId = songs[currentSongIndex].id;
    let title = songs[currentSongIndex].title;

    // Setel video di iframe YouTube
    youtubePlayer.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

    // Perbarui nama lagu
    songTitle.textContent = title;

    // Ubah tombol ke "Pause"
    isPlaying = true;
    playPauseButton.textContent = "⏸ Pause";
}

// 🔹 Fungsi untuk Play/Pause lagu
function togglePlayPause() {
    if (isPlaying) {
        // Pause video dengan menambahkan "pause video" URL
        youtubePlayer.src = "";
        isPlaying = false;
        playPauseButton.textContent = "▶ Play";
    } else {
        // Jika belum ada lagu yang dipilih, pilih satu
        if (currentSongIndex === -1) {
            playRandomSong();
        } else {
            // Jika ada lagu yang sudah dipilih, lanjutkan memutar
            let videoId = songs[currentSongIndex].id;
            youtubePlayer.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
            isPlaying = true;
            playPauseButton.textContent = "⏸ Pause";
        }
    }
}

// 🔹 Event saat tombol "Next" ditekan
nextButton.addEventListener("click", playRandomSong);

// 🔹 Event saat tombol "Play/Pause" ditekan
playPauseButton.addEventListener("click", togglePlayPause);

// 🔹 Mulai lagu pertama saat halaman dimuat
playRandomSong();
