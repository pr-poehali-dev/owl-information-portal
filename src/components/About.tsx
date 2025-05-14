import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const About: React.FC = () => {
  return (
    <section id="about" className="section-container">
      <div className="text-center mb-12 animate-on-scroll">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-owl-darkbrown">
          Знакомьтесь — Филин
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Один из самых крупных и впечатляющих представителей отряда
          совообразных
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="shadow-lg overflow-hidden animate-on-scroll">
          <div className="h-48 bg-owl-brown flex items-center justify-center">
            <Icon name="Eye" className="text-white h-16 w-16" />
          </div>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-owl-darkbrown">
              Внешний вид
            </h3>
            <p>
              Филин — крупная сова с характерными перьевыми «ушками» на голове.
              Имеет оранжево-красные глаза, мощный клюв и оперение коричневых
              оттенков с тёмными пестринами. Размах крыльев может достигать
              170-190 см.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg overflow-hidden animate-on-scroll">
          <div className="h-48 bg-owl-gold flex items-center justify-center">
            <Icon name="Map" className="text-white h-16 w-16" />
          </div>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-owl-darkbrown">
              Среда обитания
            </h3>
            <p>
              Филины обитают в лесах разных типов, горных районах и пустынных
              местностях. Распространены в Евразии, Северной Африке и части
              Северной Америки. Предпочитают труднодоступные места, подальше от
              человеческих поселений.
            </p>
            <p className="mt-2 p-2 bg-owl-beige rounded-md border-l-4 border-owl-gold">
              <strong>Интересный факт:</strong> Филины встречаются и в России, в
              том числе в Калужской области, где они обитают в смешанных и
              хвойных лесах. В Калужской области филин занесен в региональную
              Красную книгу как редкий вид, нуждающийся в особой охране.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg overflow-hidden animate-on-scroll">
          <div className="h-48 bg-owl-forest flex items-center justify-center">
            <Icon name="Utensils" className="text-white h-16 w-16" />
          </div>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-owl-darkbrown">
              Питание
            </h3>
            <p>
              Филины — хищные птицы, которые питаются мелкими млекопитающими
              (мыши, крысы, кролики), другими птицами, а иногда и рептилиями.
              Охотятся в основном ночью, используя отличный слух и бесшумный
              полёт для обнаружения добычи.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
