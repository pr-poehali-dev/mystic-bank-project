import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-mystery text-4xl text-mystery-forest text-center mb-12">
          🎭 Наши Абсурдные Тарифы
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <Card className="bg-mystery-parchment/90 border-mystery-brown border-2 transform hover:scale-105 transition-transform hover:shadow-2xl group cursor-pointer">
            <CardHeader>
              <CardTitle className="font-handwritten text-2xl text-mystery-forest group-hover:text-mystery-gold transition-colors">
                🎩 Кредит на Фетровую Шляпу
              </CardTitle>
              <CardDescription className="text-mystery-brown">
                Процентная ставка: 13.7% (число Билла)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-mystery-darkGreen mb-4">
                Особый кредит для покупки магических головных уборов. 
                Гарантия защиты от чтения мыслей!
              </p>
              <Button className="w-full bg-mystery-forest hover:bg-mystery-darkGreen text-mystery-parchment">
                Получить Шляпу
              </Button>
            </CardContent>
          </Card>

          {/* Service 2 */}
          <Card className="bg-mystery-parchment/90 border-mystery-brown border-2 transform hover:scale-105 transition-transform">
            <CardHeader>
              <CardTitle className="font-handwritten text-2xl text-mystery-forest">
                🧙‍♂️ Вклад от Гномов
              </CardTitle>
              <CardDescription className="text-mystery-brown">
                Проценты растут вместе с бородой
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-mystery-darkGreen mb-4">
                Чем длиннее ваша борода, тем выше процент! 
                Минимальный срок: до следующего полнолуния.
              </p>
              <Button className="w-full bg-mystery-gold hover:bg-yellow-600 text-mystery-darkGreen">
                Отрастить Бороду
              </Button>
            </CardContent>
          </Card>

          {/* Service 3 */}
          <Card className="bg-mystery-parchment/90 border-mystery-brown border-2 transform hover:scale-105 transition-transform">
            <CardHeader>
              <CardTitle className="font-handwritten text-2xl text-mystery-forest">
                👁️ Ипотека на Хижину
              </CardTitle>
              <CardDescription className="text-mystery-brown">
                В комплекте с привидениями
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-mystery-darkGreen mb-4">
                Таинственная недвижимость в лесу. 
                Бонус: бесплатное изгонание духов раз в месяц!
              </p>
              <Button className="w-full bg-mystery-brown hover:bg-amber-800 text-mystery-parchment">
                Поселиться в Лесу
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;