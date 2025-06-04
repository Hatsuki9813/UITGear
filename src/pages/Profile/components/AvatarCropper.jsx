import { useState, useCallback, useEffect } from "react";
import Cropper from "react-easy-crop";
import styles from "./AvatarCropper.module.css";
import getCroppedImg from "../../../utils/cropImage";

export default function AvatarCropper({ image, onComplete, onCancel }) {
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

    const onCropComplete = useCallback((_, croppedPixels) => {
        setCroppedAreaPixels(croppedPixels);
    }, []);

    const handleDone = async () => {
        const croppedImage = await getCroppedImg(image, croppedAreaPixels);
        onComplete(croppedImage);
    };

    useEffect(() => {
        const preventDefault = (e) => e.preventDefault();

        const preventScrollKeys = (e) => {
            const keys = [
                "ArrowUp",
                "ArrowDown",
                "ArrowLeft",
                "ArrowRight",
                "Space",
                "PageUp",
                "PageDown",
            ];
            if (keys.includes(e.code)) {
                e.preventDefault();
            }
        };

        window.addEventListener("wheel", preventDefault, { passive: false });
        window.addEventListener("touchmove", preventDefault, { passive: false });
        window.addEventListener("keydown", preventScrollKeys, false);

        return () => {
            window.removeEventListener("wheel", preventDefault);
            window.removeEventListener("touchmove", preventDefault);
            window.removeEventListener("keydown", preventScrollKeys);
        };
    }, []);

    return (
        <div className={styles.cropperModal}>
            <div className={styles.cropperContainer}>
                <Cropper
                    className={styles.cropper}
                    image={image}
                    crop={crop}
                    zoom={zoom}
                    aspect={1}
                    onCropChange={setCrop}
                    onZoomChange={setZoom}
                    onCropComplete={onCropComplete}
                />
            </div>
            <div className={styles.cropperActions}>
                <button onClick={handleDone}>Lưu</button>
                <button onClick={onCancel}>Hủy</button>
            </div>
        </div>
    );
}
