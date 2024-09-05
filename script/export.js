document.getElementById("export-button").addEventListener("click", function () {
    var cardElement = document.getElementById("cardContainer");

    // Set scaling using percentage values as you prefer
    cardElement.style.transform = "scale(80%)";

    // Capture the card container with transparent background
    html2canvas(cardElement, {
        backgroundColor: null,  // Set the background to transparent
        //useCORS: true           // Enable cross-origin resource sharing if needed
    }).then(function (canvas) {
        var image = canvas.toDataURL("image/png");

        // Create a link to download the image
        var link = document.createElement("a");
        link.href = image;
        link.download = "card-image.png";
        link.click();

        // Reset the scale after export
        cardElement.style.transform = "scale(15%)";
    });
});
