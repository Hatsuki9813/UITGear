// utils/cropImage.js

export default function getCroppedImg(imageSrc, crop) {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.src = imageSrc;
        image.crossOrigin = "anonymous"; // quan trọng nếu ảnh từ nguồn khác

        image.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = crop.width;
            canvas.height = crop.height;
            const ctx = canvas.getContext("2d");

            ctx.drawImage(
                image,
                crop.x,
                crop.y,
                crop.width,
                crop.height,
                0,
                0,
                crop.width,
                crop.height
            );

            const base64Image = canvas.toDataURL("image/jpeg"); // <-- đây là base64
            resolve(base64Image);
        };

        image.onerror = (err) => reject(err);
    });
}
