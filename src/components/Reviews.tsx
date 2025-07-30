import { Card, CardContent } from "@/components/ui/card";

const Reviews = () => {
  return (
    <section className="py-16 px-4 bg-mystery-forest/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-mystery text-4xl text-mystery-forest text-center mb-12">
          🗣️ Отзывы Наших Клиентов
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-mystery-parchment/95 border-mystery-gold border-2">
            <CardContent className="p-6">
              <p className="font-handwritten text-lg text-mystery-brown mb-4">
                "После открытия вклада нашёл в кармане загадочные усы! 
                Теперь выгляжу как настоящий детектив!"
              </p>
              <p className="text-right text-mystery-darkGreen font-bold">
                — Диппер П., 12 лет
              </p>
            </CardContent>
          </Card>

          <Card className="bg-mystery-parchment/95 border-mystery-gold border-2">
            <CardContent className="p-6">
              <p className="font-handwritten text-lg text-mystery-brown mb-4">
                "Взяла кредит на магический свитер. Теперь он сам себя вяжет! 
                Правда, иногда пытается сбежать..."
              </p>
              <p className="text-right text-mystery-darkGreen font-bold">
                — Мэйбл П., неизвестный возраст
              </p>
            </CardContent>
          </Card>

          <Card className="bg-mystery-parchment/95 border-mystery-gold border-2">
            <CardContent className="p-6">
              <p className="font-handwritten text-lg text-mystery-brown mb-4">
                "Ипотека на хижину оказалась выгодной сделкой! 
                Привидения помогают с уборкой и готовят отличные блины."
              </p>
              <p className="text-right text-mystery-darkGreen font-bold">
                — Стэн П., владелец хижины
              </p>
            </CardContent>
          </Card>

          <Card className="bg-mystery-parchment/95 border-mystery-gold border-2">
            <CardContent className="p-6">
              <p className="font-handwritten text-lg text-mystery-brown mb-4">
                "Сначала думал, что это обман, но мой вклад действительно растёт! 
                Правда, деньги теперь светятся в темноте..."
              </p>
              <p className="text-right text-mystery-darkGreen font-bold">
                — Форд П., исследователь аномалий
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Reviews;