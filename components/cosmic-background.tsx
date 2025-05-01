"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

interface CosmicBackgroundProps {
  className?: string;
}

export function CosmicBackground({ className = "" }: CosmicBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const stars: Star[] = [];
    const blackHole = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      radius: 50,
      rotationAngle: 0,
      rotationSpeed: 0.002,
    };

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Star {
      x: number;
      y: number;
      size: number;
      angle: number;
      speed: number;
      distance: number;
      color: string;
      opacity: number;
      trail: { x: number; y: number; opacity: number }[];

      constructor() {
        this.distance = Math.random() * 800 + 100;
        this.angle = Math.random() * Math.PI * 2;
        this.x = blackHole.x + Math.cos(this.angle) * this.distance;
        this.y = blackHole.y + Math.sin(this.angle) * this.distance;
        this.size = Math.random() * 2 + 1;
        this.speed = (1 / this.distance) * 2;
        this.opacity = Math.random() * 0.5 + 0.5;
        this.color = this.getRandomColor();
        this.trail = [];
      }

      getRandomColor() {
        const colors = [
          "255, 150, 150", // Red
          "150, 150, 255", // Blue
          "255, 200, 150", // Orange
          "200, 150, 255", // Purple
          "150, 255, 200", // Cyan
        ];
        return colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        // Update trail
        this.trail.unshift({ x: this.x, y: this.y, opacity: this.opacity });
        if (this.trail.length > 20) {
          this.trail.pop();
        }

        // Update position
        this.angle += this.speed;
        const pull = (1 / this.distance) * 0.5;
        this.distance -= pull;

        if (this.distance < 50) {
          this.distance = Math.random() * 800 + 400;
          this.opacity = Math.random() * 0.5 + 0.5;
        }

        this.x = blackHole.x + Math.cos(this.angle) * this.distance;
        this.y = blackHole.y + Math.sin(this.angle) * this.distance;
      }

      draw(ctx: CanvasRenderingContext2D) {
        // Draw trail
        this.trail.forEach((point, index) => {
          const trailOpacity = (point.opacity * (this.trail.length - index)) / this.trail.length;
          ctx.beginPath();
          ctx.arc(point.x, point.y, this.size * 0.8, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${this.color}, ${trailOpacity * 0.3})`;
          ctx.fill();
        });

        // Draw star
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
        ctx.fill();
      }
    }

    function drawBlackHole() {
      if (!ctx) return;

      // Draw accretion disk
      const gradient = ctx.createRadialGradient(
        blackHole.x,
        blackHole.y,
        blackHole.radius * 0.5,
        blackHole.x,
        blackHole.y,
        blackHole.radius * 3
      );
      gradient.addColorStop(0, "rgba(0, 0, 0, 1)");
      gradient.addColorStop(0.4, "rgba(75, 0, 130, 0.6)");
      gradient.addColorStop(0.6, "rgba(138, 43, 226, 0.4)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.beginPath();
      ctx.arc(blackHole.x, blackHole.y, blackHole.radius * 3, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Draw event horizon
      ctx.beginPath();
      ctx.arc(blackHole.x, blackHole.y, blackHole.radius, 0, Math.PI * 2);
      ctx.fillStyle = "black";
      ctx.fill();
    }

    function init() {
      for (let i = 0; i < 200; i++) {
        stars.push(new Star());
      }
    }

    function animate() {
      ctx.fillStyle = theme === "dark" ? "rgba(0, 0, 0, 0.2)" : "rgba(255, 255, 255, 0.2)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      blackHole.rotationAngle += blackHole.rotationSpeed;

      drawBlackHole();

      stars.forEach((star) => {
        star.update();
        star.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    }

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      blackHole.x = window.innerWidth / 2;
      blackHole.y = window.innerHeight / 2;
    };

    window.addEventListener("resize", handleResize);
    init();
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className={`fixed top-0 left-0 -z-10 h-full w-full ${className}`}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="fixed inset-0 -z-10 bg-gradient-to-b from-transparent via-background/80 to-background"
      />
    </>
  );
}