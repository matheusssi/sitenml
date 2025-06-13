document.getElementById('start-btn').addEventListener('click', function () {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('counter-screen').style.display = 'block';
    updateDatingTime();
    startImageRotation();
});

function updateDatingTime() {
    const startDate = new Date("2023-06-01T00:00:00"); // Data de início com horário
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
    { src: "img/ft.jpg", text: "Te amo mais do que consigo expressar. Sei que posso errar, mas nunca quis te magoar. Me desculpa" },
    { src: "img/ft2.jpg", text: "Eu sei que nem sempre demonstro, mas gosto muito de você. Você é especial para mim e me desculpa por tudo, minha gata." },
    { src: "img/ft3.jpg", text: "Mesmo que eu não diga o tempo todo, meu carinho por você é imenso. Você é incrível e eu só quero que saiba disso." }
];

let currentIndex = 0;

// Exibe o coração por 3 segundos antes de começar a troca de imagens
setTimeout(() => {
    document.getElementById('heart').style.display = 'none'; // Esconde o coração
    document.getElementById('moment-img').style.display = 'block'; // Mostra a imagem
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
        this.innerText = "⏸️ Pause"; // Atualiza o botão
    } else {
        audio.pause();
        this.innerText = "▶️ Play";
    }
});

