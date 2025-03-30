"use client";
import { FC, ReactNode, useEffect, useState } from "react";

interface WrapperProps {
  children: ReactNode;
}

const Wrapper: FC<WrapperProps> = ({ children }) => {
  const [dimensions, setDimensions] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
    scrollHeight:
      typeof document !== "undefined" ? document.body.scrollHeight : 0,
    scrollY: typeof window !== "undefined" ? window.scrollY : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      const docHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight
      );

      setDimensions((prev) => ({
        ...prev,
        width: window.innerWidth,
        height: window.innerHeight,
        scrollHeight: docHeight,
      }));
    };

    const handleScroll = () => {
      setDimensions((prev) => ({
        ...prev,
        scrollY: window.scrollY,
      }));
    };

    // Initial calculations
    handleResize();
    handleScroll();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    const timeoutId = setTimeout(handleResize, 1000);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  const cellWidth = 200;
  const cellHeight = 300;
  const verticalLines = Math.ceil(dimensions.width / cellWidth) + 1;
  const horizontalLines = Math.ceil(dimensions.scrollHeight / cellHeight) + 5;

  return (
    <div
      className="relative w-full min-h-screen bg-[#0a0e17]"
      style={{ minHeight: "100vh" }}
    >
      {/* Static grid background */}
      <div
        className="fixed inset-0 z-0 grid-background"
        style={{
          height: `${dimensions.scrollHeight}px`,
          transform: `translateY(-${dimensions.scrollY * 0.5}px)`,
        }}
      ></div>

      {/* Animated vertical lines container */}
      <div
        className="fixed inset-0 z-0 overflow-visible"
        style={{
          height: `${dimensions.scrollHeight}px`,
          transform: `translateY(-${dimensions.scrollY * 0.5}px)`,
        }}
      >
        {Array.from({ length: verticalLines }).map((_, index) => (
          <div
            key={`v-${index}`}
            className="animated-vertical-line"
            style={{
              left: `${index * cellWidth}px`,
              animationDelay: `${index * 0.2}s`,
              height: `${dimensions.scrollHeight}px`,
            }}
          />
        ))}
      </div>

      {/* Animated horizontal lines container */}
      <div
        className="fixed left-0 right-0 top-0 z-0 overflow-visible"
        style={{
          height: `${dimensions.scrollHeight}px`,
          transform: `translateY(-${dimensions.scrollY * 0.5}px)`,
        }}
      >
        {Array.from({ length: horizontalLines }).map((_, index) => (
          <div
            key={`h-${index}`}
            className="animated-horizontal-line"
            style={{
              top: `${index * cellHeight}px`,
              animationDelay: `${index * 0.2}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <main className="relative z-10 container mx-auto px-4">{children}</main>

      <style jsx>{`
        .grid-background {
          background-image:
            linear-gradient(
              to right,
              rgba(79, 143, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(79, 143, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: ${cellWidth}px ${cellHeight}px;
          background-attachment: scroll;
          pointer-events: none;
          will-change: transform;
          animation: gridGlow 4s ease-in-out infinite;
        }

        .animated-vertical-line {
          position: absolute;
          top: 0;
          width: 1px;
          height: 100%;
          background: linear-gradient(
            to bottom,
            rgba(79, 143, 255, 0.4) 0%,
            rgba(79, 143, 255, 0.1) 100%
          );
          box-shadow: 0 0 8px rgba(79, 143, 255, 0.3);
          animation: lineGlow 4s ease-in-out infinite;
          pointer-events: none;
          will-change: transform;
        }

        .animated-horizontal-line {
          position: absolute;
          left: 0;
          width: 100%;
          height: 1px;
          background: linear-gradient(
            to right,
            rgba(79, 143, 255, 0.4) 0%,
            rgba(79, 143, 255, 0.1) 100%
          );
          box-shadow: 0 0 8px rgba(79, 143, 255, 0.3);
          animation: lineGlow 4s ease-in-out infinite;
          pointer-events: none;
          will-change: transform;
        }

        @keyframes gridGlow {
          0% {
            box-shadow: 0 0 5px rgba(79, 143, 255, 0.2);
            opacity: 0.5;
          }
          50% {
            box-shadow: 0 0 20px rgba(79, 143, 255, 0.4);
            opacity: 1;
          }
          100% {
            box-shadow: 0 0 5px rgba(79, 143, 255, 0.2);
            opacity: 0.5;
          }
        }

        @keyframes lineGlow {
          0% {
            opacity: 0.3;
            box-shadow: 0 0 5px rgba(79, 143, 255, 0.2);
          }
          50% {
            opacity: 0.7;
            box-shadow: 0 0 15px rgba(79, 143, 255, 0.4);
          }
          100% {
            opacity: 0.3;
            box-shadow: 0 0 5px rgba(79, 143, 255, 0.2);
          }
        }
      `}</style>
    </div>
  );
};

export default Wrapper;
