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
          <Card className="bg-mystery-parchment/90 border-mystery-brown border-2 transform hover:scale-105 transition-transform hover:shadow-2xl group cursor-pointer relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <img 
                src="/img/4c0618e6-a52a-4903-919c-dfc23a82ac69.jpg" 
                alt="Mabel Pines" 
                className="w-16 h-16 rounded-full border-2 border-mystery-gold object-cover group-hover:bounce"
              />
            </div>
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
              <p className="text-sm text-mystery-brown italic mb-4">
                "Мэйбл одобряет этот свитер... то есть шляпу!" 🌈
              </p>
              <Button className="w-full bg-mystery-forest hover:bg-mystery-darkGreen text-mystery-parchment">
                Получить Шляпу
              </Button>
            </CardContent>
          </Card>

          {/* Service 2 */}
          <Card className="bg-mystery-parchment/90 border-mystery-brown border-2 transform hover:scale-105 transition-transform hover:shadow-2xl group cursor-pointer relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <img 
                src="/img/a0423e84-f403-4196-9b8e-6ff876d1d26b.jpg" 
                alt="Garden Gnomes" 
                className="w-16 h-16 rounded-full border-2 border-mystery-forest object-cover group-hover:wiggle"
              />
            </div>
            <CardHeader>
              <CardTitle className="font-handwritten text-2xl text-mystery-forest group-hover:text-mystery-gold transition-colors">
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
              <p className="text-sm text-mystery-brown italic mb-4">
                "Гномы рекомендуют этот вклад!" 🧙‍♂️💰
              </p>
              <Button className="w-full bg-mystery-gold hover:bg-yellow-600 text-mystery-darkGreen">
                Отрастить Бороду
              </Button>
            </CardContent>
          </Card>

          {/* Service 3 */}
          <Card className="bg-mystery-parchment/90 border-mystery-brown border-2 transform hover:scale-105 transition-transform hover:shadow-2xl group cursor-pointer relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <img 
                src="/img/c5590e69-91de-4230-9777-052b08dfd5f5.jpg" 
                alt="Dipper Pines" 
                className="w-16 h-16 rounded-full border-2 border-mystery-brown object-cover group-hover:pulse"
              />
            </div>
            <CardHeader>
              <CardTitle className="font-handwritten text-2xl text-mystery-forest group-hover:text-mystery-gold transition-colors">
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
              <p className="text-sm text-mystery-brown italic mb-4">
                "Диппер расследовал - дом безопасен!" 🕵️‍♂️📖
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