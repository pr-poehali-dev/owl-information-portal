
import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-owl-darkbrown/90 backdrop-blur-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="flex items-center gap-2 text-white font-montserrat font-bold text-xl">
              <Icon name="Binoculars" className="h-6 w-6" />
              <span>Мир Филинов</span>
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#" className="text-white px-3 py-2 rounded-md font-medium hover:bg-white/10 transition-colors">Главная</a>
              <a href="#about" className="text-white px-3 py-2 rounded-md font-medium hover:bg-white/10 transition-colors">О филине</a>
              <a href="#gallery" className="text-white px-3 py-2 rounded-md font-medium hover:bg-white/10 transition-colors">Галерея</a>
              <a href="#facts" className="text-white px-3 py-2 rounded-md font-medium hover:bg-white/10 transition-colors">Факты</a>
            </div>
          </div>
          <div className="md:hidden">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-owl-darkbrown" size="sm">
              <Icon name="Menu" className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
