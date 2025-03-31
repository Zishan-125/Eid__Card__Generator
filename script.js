const messages = [
    "Eid Mubarak! May this Eid bring joy and peace to your heart.",
    "Wishing you a blessed and joyous Eid!",
    "May your life be filled with happiness and prosperity this Eid."
];

const backgroundImages = ["./Eid/Card2.png", "./Eid/Card3.png", "./Eid/Card4.png"];



function getRandomImage() {
    return backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
}

function generateCard() {
    const card = document.getElementById("eidCard");
    const message = document.getElementById("eidMessage");

    card.style.backgroundImage = `url('${getRandomImage()}')`;
    card.style.backgroundSize = "cover";
    card.style.backgroundPosition = "center";
    
    message.textContent = messages[Math.floor(Math.random() * messages.length)];
}

// Set the current year dynamically in the footer
document.getElementById("currentYear").textContent = new Date().getFullYear();

// Generate QR Code for the website
const qrCodeContainer = document.getElementById("qrCode");
const websiteURL = "https://www.facebook.com/profile.php?id=61574124298803";

if (qrCodeContainer) {
    const qrCode = new QRCode(qrCodeContainer, {
        text: websiteURL,
        width: 128, // Width of the QR Code
        height: 128, // Height of the QR Code
        colorDark: "#000000", // QR Code color
        colorLight: "#ffffff", // Background color
        correctLevel: QRCode.CorrectLevel.H, // Error correction level
    });
}