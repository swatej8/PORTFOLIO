import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ImageSequence = ({ 
  frameCount = 100, // Change this to the total number of images you have
  folderPath = '/bg-pngs/', // Folder where images are extracted (in the public folder)
  filenamePrefix = 'frame_', // Change depending on your files e.g., 'frame_' for frame_001.png
  filenameExtension = '.png',
  padLength = 4, // e.g., 4 means 0001, 3 means 001
  autoPlay = false,
  onComplete = () => {}
}) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [imagesPreloaded, setImagesPreloaded] = useState(false);
  const imagesRef = useRef([]);

  // Sequence object that GSAP will animate
  const sequenceRef = useRef({ frame: 0 });

  // Function to pad numbers with zeros (e.g., 1 -> 0001)
  const padNumber = (num, size) => {
    let s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
  };

  useEffect(() => {
    // 1. Preload Images
    const preloadImages = () => {
      const tempImages = [];
      let loadedCount = 0;

      for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        // Construct the image URL: e.g., /bg-pngs/frame_0001.png
        const currentFrame = padNumber(i, padLength);
        img.src = `${folderPath}${filenamePrefix}${currentFrame}${filenameExtension}`;
        
        img.onload = () => {
          loadedCount++;
          if (loadedCount === frameCount) {
            setImagesPreloaded(true);
          }
        };
        img.onerror = () => {
          // If an image fails to load, we still want to count it so it doesn't block forever
          console.warn(`Failed to load image: ${img.src}`);
          loadedCount++;
          if (loadedCount === frameCount) {
            setImagesPreloaded(true);
          }
        }
        tempImages.push(img);
      }
      imagesRef.current = tempImages;
    };

    preloadImages();
  }, [frameCount, folderPath, filenamePrefix, filenameExtension, padLength]);

  useEffect(() => {
    if (!imagesPreloaded) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Make canvas full screen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Helper to draw the current frame
    const render = () => {
      const currentFrameIndex = Math.round(sequenceRef.current.frame);
      // Ensure index is within bounds
      if (currentFrameIndex >= 0 && currentFrameIndex < imagesRef.current.length) {
        const img = imagesRef.current[currentFrameIndex];
        
        if (img && img.complete && img.naturalWidth !== 0) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          
          // Calculate scale to "cover" the screen (like background-size: cover)
          const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
          const x = (canvas.width / 2) - (img.width / 2) * scale;
          const y = (canvas.height / 2) - (img.height / 2) * scale;
          
          ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
        }
      }
    };

    // Draw the very first frame immediately
    render();

    let animation;
    if (autoPlay) {
      // Auto-play mode: animate frames over time
      animation = gsap.to(sequenceRef.current, {
        frame: frameCount - 1,
        snap: 'frame',
        ease: 'power1.inOut',
        duration: 5, // 5 seconds to play through
        onUpdate: render,
        onComplete: onComplete
      });
    } else {
      // 2. Setup GSAP ScrollTrigger
      // We animate the sequenceRef.frame value from 0 to frameCount - 1
      animation = gsap.to(sequenceRef.current, {
        frame: frameCount - 1,
        snap: 'frame',
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current, // Use the wrapper as trigger
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.5, // Increased from 0.5 to 1.5 for a buttery, glidy feel
          onUpdate: render
        }
      });
    }

    // Handle Resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animation) animation.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [imagesPreloaded, frameCount, autoPlay, onComplete]);

  return (
    <div ref={containerRef} className="relative w-full" style={{ height: autoPlay ? '100vh' : '600vh' }}>
      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none bg-white">
        <canvas ref={canvasRef} className="w-full h-full object-cover opacity-100" />
        
        {!imagesPreloaded && (
          <div className="absolute inset-0 flex items-center justify-center text-primary font-bold">
            Loading 3D Sequence...
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageSequence;
