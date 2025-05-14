import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const Gallery: React.FC = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1548330060-dd438a19a3ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      alt: "Филин крупным планом",
      caption: "Проницательный взгляд филина",
    },
    {
      src: "https://images.unsplash.com/photo-1578922184036-19b50d5abeaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      alt: "Филин в лесу",
      caption: "В естественной среде обитания",
    },
    {
      src: "https://images.unsplash.com/photo-1579571076332-d09df0b480c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      alt: "Филин с раскрытыми крыльями",
      caption: "Мощные крылья для бесшумного полёта",
    },
    {
      src: "https://images.unsplash.com/photo-1613582558513-6800e4523508?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      alt: "Филин на ветке",
      caption: "Наблюдение за территорией",
    },
    {
      src: "https://images.unsplash.com/photo-1582267989013-db1ea7f9d80a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      alt: "Филин зимой",
      caption: "Адаптированный к различным климатическим условиям",
    },
    {
      src: "https://images.unsplash.com/photo-1618149496704-c5d8a3749376?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      alt: "Филинята",
      caption: "Молодое поколение филинов",
    },
  ];

  return (
    <section id="gallery" className="bg-muted py-16">
      <div className="section-container">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-owl-darkbrown">
            Галерея филинов
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Величественные и загадочные, филины покоряют своей красотой и
            грацией
          </p>
        </div>

        <div className="image-grid">
          {images.map((image, index) => (
            <Card
              key={index}
              className="overflow-hidden shadow-md hover:shadow-xl transition-shadow animate-on-scroll"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-gray-700">{image.caption}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
