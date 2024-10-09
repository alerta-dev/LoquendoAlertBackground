document.getElementById("processBtn").addEventListener("click", () => {
    const imageInput = document.getElementById("imageInput").files[0];

    if (!imageInput) {
        alert("Por favor sube una imagen.");
        return;
    }

    const formData = new FormData();
    formData.append("image_file", imageInput);

    // Usando la API remove.bg con la API Key proporcionada
    fetch("https://api.remove.bg/v1.0/removebg", {
        method: "POST",
        headers: {
            "X-Api-Key": "Rmfa1LK5SEJn1YiwtbDKpwLN" // Tu API key
        },
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Error al eliminar el fondo. Por favor, revisa tu API Key o los límites de uso.");
        }
        return response.blob();
    })
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
