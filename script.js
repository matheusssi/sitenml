document.getElementById('start-btn').addEventListener('click', function () {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('counter-screen').style.display = 'block';
    updateDatingTime();
    startImageRotation();
});

function updateDatingTime() {
    const startDate = new Date("2023-06-01T00:00:00"); 
    const now = new Date();
    const diff = now - startDate;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('dating-time').innerText = `${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos juntos! 💕`;

    setTimeout(updateDatingTime, 1000); 
}

const images = [
    { src: "img/ft.jpg", text: "Você é a pessoa mais especial do mundo para mim. Obrigado por estar ao meu lado! 💖" },
    { src: "img/ft4.jpg", text: "Cada momento ao seu lado é precioso. Você é linda e ilumina minha vida!" },
    { src: "img/ft5.jpg", text: "Sua presença transforma tudo ao meu redor. Sou grato por cada instante ao seu lado!" },
    { src: "img/ft6.jpg", text: "Te amo mais do que consigo expressar. Você é incrível e quero te fazer feliz sempre!" },
    { src: "img/ft2.jpg", text: "Você é única e insubstituível. Seu sorriso é meu maior presente!" },
    { src: "img/ft3.jpg", text: "Minha vida é melhor porque você faz parte dela. Você é especial, linda e inesquecível!" }
];

let currentIndex = 0;

// Exibe o coração por 3 segundos antes de começar a troca de imagens
setTimeout(() => {
    document.getElementById('heart').style.display = 'none';
    document.getElementById('moment-img').style.display = 'block';
    document.getElementById('moment-img').src = images[currentIndex].src;
    document.getElementById('moment-text').innerText = images[currentIndex].text;

    startImageRotation();
}, 3000);

function startImageRotation() {
    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        document.getElementById('moment-img').src = images[currentIndex].src;
        document.getElementById('moment-text').innerText = images[currentIndex].text;
    }, 4000);
}

document.getElementById('play-btn').addEventListener('click', function () {
    const audio = document.getElementById('music');
    if (audio.paused) {
        audio.play();
        this.innerText = "⏸️ Pause"; 
    } else {
        audio.pause();
        this.innerText = "▶️ Play";
    }
});
