"use client";
import { FC, useEffect, useState } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import RollingBallIcon from "@/components/general/RollingBallIcon";
import { gsap } from "gsap";
import { usePathname } from "next/navigation";
import {
  Home,
  User,
  Mail,
  FileText,
  FolderKanban,
  Settings,
  Plus,
} from "lucide-react";

// Icon mapping for Lucide icons
const iconComponents: { [key: string]: any } = {
  home: Home,
  about: User,
  contact: Mail,
  projects: FolderKanban,
  blogs: FileText,
};

/**
 * Props for `Navbar`.
 */
export type NavbarProps = SliceComponentProps<Content.NavbarSlice>;

/**
 * Component for "Navbar" Slices.
 */
const Navbar: FC<NavbarProps> = ({ slice }) => {
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      // Initial entrance animation for the tab bar
      gsap.fromTo(
        ".mobile-tab-bar",
        {
          y: 100,
          opacity: 0,
          scale: 0.8,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "elastic.out(1, 0.8)",
        }
      );

      // Staggered animation for icons
      gsap.fromTo(
        ".nav-icon",
        {
          scale: 0,
          opacity: 0,
          y: 20,
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.1,
          ease: "back.out(1.7)",
          delay: 0.2,
        }
      );
    }
  }, [isMobile]);

  return (
    <>
      {/* Desktop Navbar (unchanged) */}
      <header
        className={`fixed top-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-[940px] ${isMobile ? "block" : "block"}`}
      >
        <nav
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
          className="bg-[#14141e] rounded-[40px] flex items-center px-12 py-2 justify-between"
          style={{
            boxShadow: `
              5px 5px 10px rgba(0, 0, 0, 0.5),
              -5px -5px 10px rgba(79, 143, 255, 0.05)
            `,
          }}
        >
          {/* Desktop content remains the same */}
          <div className="flex items-center gap-1">
            <div className="flex items-center">
              <svg width="30" height="30" viewBox="0 0 40 40">
                <path
                  d="M10,20 L20,0 L30,20 Z"
                  fill="none"
                  stroke="#4f8fff"
                  strokeWidth="2"
                />
                <circle
                  cx="20"
                  cy="20"
                  r="10"
                  fill="none"
                  stroke="#4f8fff"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <span className="text-white text-sm font-medium">
              {slice.primary.logotext}
            </span>
          </div>

          <div className="flex gap-2">
            <div className="flex items-center">
              {slice.primary.links?.map((item, index) => (
                <div key={index} className="relative group">
                  <PrismicNextLink
                    field={item.url}
                    className="text-white text-[10px] uppercase px-2 transition-colors"
                  >
                    {item.url.text || "Link"}
                  </PrismicNextLink>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4f8fff] transition-all duration-300 group-hover:w-[40%] group-hover:left-[30%]" />
                </div>
              ))}
            </div>
            <div>
              <RollingBallIcon />
            </div>
          </div>
        </nav>
      </header>
      {/* Modern Mobile Bottom Tab Bar */}

      {/* <div
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[85%] max-w-md ${
          isMobile ? "block" : "hidden"
        }`}
      >
        <nav
          className="mobile-tab-bar relative overflow-hidden rounded-2xl py-3 px-2"
          style={{
            background: "rgba(20, 20, 30, 0.7)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            boxShadow: `
              0 8px 32px rgba(0, 0, 0, 0.4),
              0 2px 8px rgba(0, 0, 0, 0.3),
              inset 0 0 0 0.5px rgba(79, 143, 255, 0.1)
            `,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none" />

          <div className="flex justify-around items-center relative z-10">
            {slice.primary.links?.map((item, index) => {
              const linkText = item?.url?.text?.trim().toLowerCase() || "home";
              const Icon = iconComponents[linkText] || Home;
              const isActive = pathname === item?.url?.text;

              return (
                <PrismicNextLink
                  key={index}
                  field={item.url}
                  className={`group relative flex flex-col items-center p-1.5 ${
                    isActive ? "active" : ""
                  }`}
                >
                  <div className="nav-icon relative">
                    <div
                      className={`absolute inset-0 bg-[#4f8fff] rounded-full blur-xl transition-all duration-300 ${
                        isActive
                          ? "opacity-20"
                          : "opacity-0 group-hover:opacity-10"
                      }`}
                    />

                    <Icon
                      className={`w-5 h-5 transition-all duration-300 ${
                        isActive
                          ? "text-[#4f8fff] scale-110"
                          : "text-white/70 group-hover:text-white/90"
                      }`}
                      strokeWidth={1.5}
                    />

                    <div
                      className={`absolute -bottom-1 left-1/2 w-1 h-1 bg-[#4f8fff] rounded-full transition-all duration-300 transform -translate-x-1/2 ${
                        isActive
                          ? "opacity-100 w-4"
                          : "opacity-0 group-hover:opacity-50 group-hover:w-2"
                      }`}
                    />
                  </div>

                  <span
                    className={`text-[10px] mt-1 transition-all duration-300 ${
                      isActive
                        ? "text-[#4f8fff]"
                        : "text-white/50 group-hover:text-white/70"
                    }`}
                  >
                    {item.url.text || "Link"}
                  </span>
                </PrismicNextLink>
              );
            })}
          </div>
        </nav>
      </div> */}
    </>
  );
};

export default Navbar;
