import { BookOpenIcon } from "@heroicons/react/16/solid";
import React, { useState, useEffect } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Header: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate("/");
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsSticky(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-10 bg-primary transition-all duration-300 ${
        isSticky ? "py-2" : "py-4"
      }`}
    >
      <nav className="px-12 mx-auto flex items-center justify-between">
        <div
          className="flex items-center cursor-pointer"
          onClick={redirectToHome}
        >
          <BookOpenIcon className="h-6 w-6 text-light" />
          <h1 className="ml-2 text-lg font-semibold font-regular text-light">
            Research Assistant
          </h1>
        </div>
        {!isAuthenticated && (
          <ul className="flex space-x-4 text-light font-regular">
            <li>
              <button onClick={() => scrollToSection("how-it-works")}>
                How It Works
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("pricing")}>
                Pricing
              </button>
            </li>
            <li>
              <a href="/contact" className=" hover:text-gray-800">
                Contact
              </a>
            </li>
          </ul>
        )}
        {!isAuthenticated && (
          <div className="flex items-center gap-4 w-40">
            <Button variant="primary" onClick={() => loginWithRedirect()}>
              Sign In / Sign Up
            </Button>
          </div>
        )}
        {isAuthenticated && user && (
          <div className="flex items-center gap-4 w-fit">
            <div className="flex">
              <p className="text-light font-bold text-body-m">{user.email}</p>
            </div>
            <Button variant="primary" onClick={() => logout()}>
              Sign Out
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
