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

      <div className="mb-16 animate-on-scroll">
        <Card className="shadow-lg overflow-hidden">
          <div className="lg:flex">
            <div className="lg:w-1/3 bg-owl-brown p-6 flex flex-col justify-center items-center text-white">
              <h3 className="text-2xl font-bold mb-4 text-center">
                Филин в Калужской области
              </h3>
              <Icon name="MapPin" className="h-20 w-20 mb-4" />
            </div>
            <div className="lg:w-2/3 p-6">
              <div className="prose max-w-none">
                <p className="mb-4">
                  В Калужской области филин (<i>Bubo bubo</i>) встречается в
                  старовозрастных лесах, преимущественно в глубине крупных
                  лесных массивов, вдали от населенных пунктов. Предпочитает
                  хвойные и смешанные леса с небольшими полянами и опушками для
                  охоты.
                </p>
                <p className="mb-4">
                  Согласно данным регионального экологического мониторинга, в
                  Калужской области филин является редким видом. Основные места
                  гнездования — природный заповедник «Калужские засеки»,
                  национальный парк «Угра» и некоторые труднодоступные лесные
                  массивы Козельского, Ульяновского и Жиздринского районов.
                </p>
                <p className="mb-4">
                  В 2004 году филин был включен в Красную книгу Калужской
                  области со статусом 1 категории (вид, находящийся под угрозой
                  исчезновения). По последним оценкам орнитологов, в области
                  гнездится не более 10-15 пар филинов.
                </p>
                <h4 className="text-xl font-semibold mb-2 text-owl-darkbrown">
                  Причины редкости в регионе:
                </h4>
                <ul className="list-disc ml-6 mb-4">
                  <li>
                    Вырубка старовозрастных лесов и фрагментация лесных массивов
                  </li>
                  <li>
                    Беспокойство в гнездовой период (лесозаготовки, туризм)
                  </li>
                  <li>Браконьерский отстрел</li>
                  <li>Гибель на линиях электропередач</li>
                  <li>Сокращение кормовой базы</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
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
              <strong>Региональные особенности:</strong> В Калужской области
              филины предпочитают селиться в густых лесах бассейна рек Угра,
              Жиздра и Протва. Особенно важны для них малонарушенные участки
              заповедника «Калужские засеки», где сохранились условия, близкие к
              естественным.
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
