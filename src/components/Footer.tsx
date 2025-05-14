
import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-owl-darkbrown text-white">
      <div className="section-container py-8">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Филин - ночной властелин леса</h2>
            <p className="mb-4">
              Сайт посвящен изучению и сохранению этих удивительных птиц. 
              Узнайте больше об их жизни, поведении и роли в экосистеме.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" className="rounded-full border-white hover:bg-white hover:text-owl-darkbrown">
                <Icon name="Facebook" className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-white hover:bg-white hover:text-owl-darkbrown">
                <Icon name="Instagram" className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-white hover:bg-white hover:text-owl-darkbrown">
                <Icon name="Twitter" className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline inline-flex items-center">
                  <Icon name="Home" className="h-4 w-4 mr-2" />
                  Главная
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline inline-flex items-center">
                  <Icon name="Info" className="h-4 w-4 mr-2" />
                  О филине
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:underline inline-flex items-center">
                  <Icon name="Image" className="h-4 w-4 mr-2" />
                  Галерея
                </a>
              </li>
              <li>
                <a href="#facts" className="hover:underline inline-flex items-center">
                  <Icon name="FileText" className="h-4 w-4 mr-2" />
                  Интересные факты
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Мир Филинов. Все права защищены.</p>
          <p className="mt-2">
            Сайт создан в образовательных целях. Информация собрана из открытых источников.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
