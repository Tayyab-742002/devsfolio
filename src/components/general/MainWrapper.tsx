"use client";
import { FC, ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

const Wrapper: FC<WrapperProps> = ({ children }) => {
  return (
    <div className="relative bg-dark-700 w-full min-h-screen bg-[#0a0e17]">
      {/* Grid Overlay */}
      <div className="absolute inset-0 z-0 grid-overlay" />

      <main className="relative z-10 container mx-auto px-4">{children}</main>

      <style jsx>{`
        .grid-overlay {
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
          background-size: 200px 300px;
        }

        .grid-overlay::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            45deg,
            rgba(79, 143, 255, 0.05) 0%,
            transparent 100%
          );
          pointer-events: none;
        }
      `}</style>
    </div>
  );
};

export default Wrapper;
