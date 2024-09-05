document.getElementById("export-button").addEventListener("click", function () {
    var cardElement = document.getElementById("cardContainer");

    cardElement.style.scale = "80%";
    html2canvas(cardElement, {
        backgroundColor: null,
    }).then(function (canvas) {
        var image = canvas.toDataURL("image/png");

        var link = document.createElement("a");
        link.href = image;
        link.download = "card-image.png";
        link.click();
        
        cardElement.style.scale = "15%";
    });
});