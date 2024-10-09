document.getElementById("processBtn").addEventListener("click", () => {
    const imageInput = document.getElementById("imageInput").files[0];

    if (!imageInput) {
        alert("Por favor sube una imagen.");
        return;
    }

    const formData = new FormData();
    formData.append("image_file", imageInput);

    // Usando la API remove.bg (Ejemplo)
    fetch("https://api.remove.bg/v1.0/removebg", {
        method: "POST",
        headers: {
            "X-Api-Key": "YOUR_API_KEY" // Reemplaza con tu API key
        },
        body: formData
    })
    .then(response => response.blob())
    .then(blob => {
        const resultImage = document.getElementById("resultImage");
        const resultSection = document.getElementById("resultSection");
        const downloadBtn = document.getElementById("downloadBtn");

        const imageUrl = URL.createObjectURL(blob);
        resultImage.src = imageUrl;
        downloadBtn.href = imageUrl;

        resultSection.classList.remove("hidden");
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Ocurrió un error al procesar la imagen.");
    });
});
