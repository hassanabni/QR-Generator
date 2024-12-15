let inputBtn = document.querySelector(".input-btn");
let imgBox = document.querySelector(".qr-box");
let qrImage = document.getElementById("qr-image");

function generateQR() {
    const userInput = inputBtn.value.trim(); // Remove leading/trailing spaces
    if (userInput.length > 0) {
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(userInput)}`;
        qrImage.style.display = "block"; // Show the image
    } else {
        alert("Please enter some text or a URL.");
        qrImage.style.display = "none"; // Hide the image if input is empty
    }
}
