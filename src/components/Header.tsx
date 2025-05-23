import React from "react";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  return (
    <header className="owl-header min-h-[100vh] flex flex-col justify-center items-center text-white p-8">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Филин</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Величественная ночная птица семейства совиных, обитающая в том числе и
          в лесах Калужской области
        </p>
        <Button
          className="bg-owl-gold hover:bg-owl-brown text-black hover:text-white transition-colors"
          size="lg"
          onClick={() => {
            const aboutSection = document.getElementById("about");
            aboutSection?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Узнать больше
        </Button>
      </div>
    </header>
  );
};

export default Header;
