"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useMotionValue, useMotionValueEvent } from "framer-motion";

export default function HeroFrameSequence() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const frameCount = 240;

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 1; i <= frameCount; i++) {
        const paddedIndex = String(i).padStart(3, "0");
        const img = new Image();
        img.src = `/frames/ezgif-frame-${paddedIndex}.jpg`;
        loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const drawToCanvas = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, img: HTMLImageElement) => {
    // Fill the background to avoid transparency issues
    ctx.fillStyle = "#EFECE3"; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;
    
    let drawWidth, drawHeight, offsetX, offsetY;
    
    // Simulate object-cover behaviour
    if (imgRatio > canvasRatio) {
        drawHeight = canvas.height;
        drawWidth = img.width * (canvas.height / img.height);
        offsetX = (canvas.width - drawWidth) / 2;
        offsetY = 0;
    } else {
        drawWidth = canvas.width;
        drawHeight = img.height * (canvas.width / img.width);
        offsetX = 0;
        offsetY = (canvas.height - drawHeight) / 2;
    }
    
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  const frameIndex = useMotionValue(0);

  // Automatically loop through the frames
  useEffect(() => {
    const controls = animate(frameIndex, frameCount - 1, {
      duration: 6, // 6 seconds for a smooth, slow dolly speed
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    });

    return controls.stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderFrame = (index: number) => {
    if (!images[index] || !canvasRef.current) return;
    
    // We only try to draw if the image has some dimensions
    if (images[index].width === 0) return;
    
    const canvas = canvasRef.current;
    
    // Check and set appropriate resolution
    const dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;
    const rect = canvas.getBoundingClientRect();
    
    // If rect size is 0 (e.g., hidden), ignore
    if (rect.width === 0 || rect.height === 0) return;

    const displayWidth = Math.round(rect.width * dpr);
    const displayHeight = Math.round(rect.height * dpr);
    
    if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
      canvas.width = displayWidth;
      canvas.height = displayHeight;
    }

    const ctx = canvas.getContext("2d", { alpha: false });
    if (ctx) {
      drawToCanvas(ctx, canvas, images[index]);
    }
  };

  // Initially draw first frame when it loads
  useEffect(() => {
    if (images.length > 0) {
        const firstImg = images[0];
        if (firstImg.complete && firstImg.width > 0) {
            // Need a tiny timeout to ensure canvas is painted into the DOM and rect is available
            setTimeout(() => renderFrame(0), 0);
        } else {
            firstImg.onload = () => {
              renderFrame(0);
            };
        }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images]);

  useMotionValueEvent(frameIndex, "change", (latest) => {
    const currentFrame = Math.floor(latest);
    renderFrame(currentFrame);
  });

  // Handle resize nicely
  useEffect(() => {
    const handleResize = () => {
      renderFrame(Math.floor(frameIndex.get()));
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images]);

  return (
    <canvas 
      ref={canvasRef} 
      // The same styling as the original Image for a seamless integration
      className="w-full h-full mix-blend-multiply contrast-125 saturate-50 absolute inset-0"
    />
  );
}
