"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

interface ParticleBackgroundProps {
  className?: string;
}

export function ParticleBackground({ className = "" }: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let mousePosition = { x: 0, y: 0 };
    let isMouseMoving = false;
    let mouseMovingTimeout: NodeJS.Timeout;

    const isDark = theme !== "light";
    const particleColor = isDark ? "rgba(255, 255, 255, " : "rgba(0, 0, 0, ";

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      originalX: number;
      originalY: number;
      alpha: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.originalX = x;
        this.originalY = y;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.6 - 0.3;
        this.speedY = Math.random() * 0.6 - 0.3;
        this.alpha = Math.random() * 0.5 + 0.1;
      }

      update() {
        // Normal movement
        this.x += this.speedX;
        this.y += this.speedY;

        // Mouse influence
        if (isMouseMoving) {
          const dx = mousePosition.x - this.x;
          const dy = mousePosition.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 100;

          if (distance < maxDistance) {
            const force = (maxDistance - distance) / maxDistance;
            this.x -= dx * force * 0.05;
            this.y -= dy * force * 0.05;
          }
        }

        // Boundary check with bounce
        if (this.x < 0 || this.x > canvas!.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas!.height) this.speedY *= -1;

        // Return to original position very slowly
        const returnSpeed = 0.002;
        this.x += (this.originalX - this.x) * returnSpeed;
        this.y += (this.originalY - this.y) * returnSpeed;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `${particleColor}${this.alpha})`;
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      // Create particles in a grid pattern
      const density = 25; // Lower = more particles
      for (let y = 0; y < canvas.height; y += density) {
        for (let x = 0; x < canvas.width; x += density) {
          // Add some randomness to the grid
          const offsetX = Math.random() * 10 - 5;
          const offsetY = Math.random() * 10 - 5;
          particles.push(new Particle(x + offsetX, y + offsetY));
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections between particles
      ctx.strokeStyle = `${particleColor}0.05)`;
      ctx.lineWidth = 0.3;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 50) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      // Update and draw particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mousePosition.x = e.clientX - rect.left;
      mousePosition.y = e.clientY - rect.top;
      
      isMouseMoving = true;
      clearTimeout(mouseMovingTimeout);
      mouseMovingTimeout = setTimeout(() => {
        isMouseMoving = false;
      }, 100);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    init();
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed top-0 left-0 -z-10 h-full w-full opacity-60 ${className}`}
    />
  );
}