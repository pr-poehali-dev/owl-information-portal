import React from "react";
import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";

const Facts: React.FC = () => {
  const facts = [
    {
      icon: "Moon",
      title: "Ночные охотники",
      description:
        "Филины активны преимущественно в сумерках и ночью, что делает их идеальными ночными охотниками.",
    },
    {
      icon: "HeadphonesIcon",
      title: "Невероятный слух",
      description:
        "Асимметричное расположение ушных отверстий позволяет филинам точно определять источник звука.",
    },
    {
      icon: "Feather",
      title: "Бесшумный полёт",
      description:
        "Специальное строение перьев обеспечивает практически бесшумный полёт, помогая незаметно подкрадываться к добыче.",
    },
    {
      icon: "Rotate3D",
      title: "Поворот головы на 270°",
      description:
        "Филины могут поворачивать голову на 270 градусов, что компенсирует неподвижность их глаз.",
    },
    {
      icon: "Calendar",
      title: "Долгожители",
      description:
        "В дикой природе филины живут до 20 лет, а в неволе некоторые особи доживали до 50-60 лет.",
    },
    {
      icon: "Volume2",
      title: "Мощный голос",
      description:
        "Уханье филина может быть слышно на расстоянии нескольких километров, особенно в тихую ночь.",
    },
  ];

  return (
    <section id="facts" className="section-container">
      <div className="text-center mb-12 animate-on-scroll">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-owl-darkbrown">
          Интересные факты
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Удивительные особенности этих загадочных птиц
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {facts.map((fact, index) => (
          <div key={index} className="fact-card animate-on-scroll">
            <div className="flex items-center mb-4">
              <div className="bg-owl-brown rounded-full p-3 mr-4">
                <Icon name={fact.icon} className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-owl-darkbrown">
                {fact.title}
              </h3>
            </div>
            <p className="text-gray-700">{fact.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 animate-on-scroll">
        <Card className="border border-owl-gold overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-6 bg-owl-beige">
              <h3 className="text-2xl font-bold mb-4 text-owl-darkbrown">
                Природоохранный статус
              </h3>
              <p className="mb-4">
                Филины занесены в Красную книгу многих стран и регионов, включая
                Красную книгу Калужской области, где они имеют статус 1
                категории (вид, находящийся под угрозой исчезновения).
              </p>
              <p className="mb-4">Основные угрозы для их популяции:</p>
              <ul className="list-disc ml-6 mb-4">
                <li>Разрушение среды обитания</li>
                <li>Браконьерство</li>
                <li>Беспокойство в период гнездования</li>
                <li>Отравление ядохимикатами</li>
              </ul>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-owl-darkbrown">
                Меры охраны в Калужской области
              </h3>
              <p className="mb-4">
                Для сохранения филина в Калужской области реализуются следующие
                меры:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Icon
                    name="CheckCircle"
                    className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0"
                  />
                  <span>
                    Создание особо охраняемых природных территорий в местах
                    обитания филина
                  </span>
                </li>
                <li className="flex items-start">
                  <Icon
                    name="CheckCircle"
                    className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0"
                  />
                  <span>Регулярный мониторинг известных мест гнездования</span>
                </li>
                <li className="flex items-start">
                  <Icon
                    name="CheckCircle"
                    className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0"
                  />
                  <span>
                    Создание охранных зон вокруг гнездовий с запретом
                    хозяйственной деятельности
                  </span>
                </li>
                <li className="flex items-start">
                  <Icon
                    name="CheckCircle"
                    className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0"
                  />
                  <span>Экологическое просвещение местного населения</span>
                </li>
                <li className="flex items-start">
                  <Icon
                    name="CheckCircle"
                    className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0"
                  />
                  <span>Штрафы за незаконную охоту и разорение гнезд</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Facts;
