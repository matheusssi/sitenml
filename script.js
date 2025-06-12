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
    { src: "img/ft.jpg", text: "Nosso primeiro encontro!" },
    { src: "img/ft2.jpg", text: "O dia em que dissemos 'eu te amo'!" },
    { src: "img/foto3.jpeg", text: "A nossa viagem inesquecível!" }
];

let currentIndex = 0;

function startImageRotation() {
    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        document.getElementById('moment-img').src = images[currentIndex].src;
        document.getElementById('moment-text').innerText = images[currentIndex].text;
    }, 4000);
}
