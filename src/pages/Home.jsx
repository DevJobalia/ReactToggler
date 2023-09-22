import React, { useEffect, useState } from "react";
import image1 from "../assets/images/image-1.png";
import image2 from "../assets/images/image-2.png";
import image3 from "../assets/images/image-3.png";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const cardData = [
  {
    title: "Galaxy Swirls",
    img: {
      src: image1,
      alt: "galaxy swirl",
    },
    description:
      "Galaxy swirls refer to the patterns of stars and gas within galaxies that appear as spiral arms. These arms are formed by the gravitational forces between stars and the rotation of the galaxy.",
    cta: "Let’s Gooooooo!",
  },
  {
    title: "Rad Beaches",
    img: {
      src: image2,
      alt: "beach at sunset",
    },
    description:
      "Beaches at sunset offer a picturesque view of the sun setting over the ocean, with warm hues of orange, pink, and purple painting the sky. It's a serene and romantic experience.",
    cta: "Take me surfing!",
  },
  {
    title: "Killer Mountains",
    img: {
      src: image3,
      alt: "jagged mountains",
    },
    description:
      "Mountains are majestic landforms characterized by steep slopes and high elevations. They are often associated with natural beauty, adventure, and challenge, and are home to diverse ecosystems and unique cultures.",
    cta: "Pack My Bags",
  },
];

function App() {
  // TO GET USERS DEFAULT THEME
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      setIsDarkMode("dark");
    } else {
      setIsDarkMode("light");
    }
  }, []);

  const handleThemeSwitch = () => {
    // setTheme(theme === "dark" ? "light" : "dark");
    setIsDarkMode((prevMode) => !prevMode);
  };

  const [isDarkMode, setIsDarkMode] = useState(false);

  // // Function to toggle dark/light mode
  // const toggleDarkLightMode = () => {

  // };

  useEffect(() => {
    // Apply dark mode class to the HTML element when the mode changes
    const htmlElement = document.querySelector("html");
    if (htmlElement) {
      htmlElement.classList.toggle("dark", isDarkMode);
    }

    // Update CSS variables based on the dark/light mode
    const root = document.documentElement;
    if (root) {
      root.style.setProperty(
        "--color-bkg",
        isDarkMode ? "217deg 32.6% 17.5%" : "210deg 40% 98%"
      );
      root.style.setProperty(
        "--color-secondary",
        isDarkMode ? "210deg 40% 98%" : "217deg 32.6% 17.5%"
      );
      root.style.setProperty(
        "--color-accent1",
        isDarkMode ? "288deg 95.8% 60.6%" : "288deg 95.8% 90.6%"
      );
      root.style.setProperty(
        "--color-accent2",
        isDarkMode ? "168deg 83.8% 48.2%" : "168deg 83.8% 78.2%"
      );
    }
  }, [isDarkMode]);

  return (
    <>
      <button
        type="button"
        onClick={handleThemeSwitch}
        className="fixed z-10 top-2 right-2 bg-indigo-500 text-lg p-1 rounded-md"
      >
        {isDarkMode === "dark" ? "🌕" : "☀️"}
      </button>

      <div className="bg-bkg text-content isolate overflow-hidden p-4 sm:p-8 grid place-items-center">
        <Link to="/todo">Go to Todo Page</Link>
        <div
          className="grid relative min-h-screen place-items-center place-content-center gap-16 before:absolute before:h-1/2 before:w-3/4 before:rounded-tr-full before:rounded-bl-full before:blur-3xl before:bg-accent-2 before:animate-spin-slower before:-z-10 after:absolute after:h-2/3 after:w-2/3 after:rounded-tr-full after:rounded-bl-full after:blur-3xl after:bg-accent-1/80 after:animate-spin-slow after:-z-10
      "
        >
          <h1 className="text-6xl font-bold">
            <span className="underline decoration-accent-1">Dark</span> or{" "}
            <span className="underline decoration-accent-1">Light</span>?
          </h1>
          <section
            className="container grid sm:grid-cols-2 md:grid-cols-3 gap-6 items-start"
            aria-label="card container"
          >
            {cardData.map((card) => (
              <Card {...card} key={card.title} />
            ))}
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
