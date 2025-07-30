import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-mystery-oldPaper relative overflow-hidden">
      {/* Background Forest Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('/img/3dd5a3d7-f5d5-4caa-a30f-18edca0018bf.jpg')"
        }}
      />
      
      {/* Main Content */}
      <div className="relative z-10 font-journal">
        {/* Header */}
        <header className="text-center py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-mystery text-6xl md:text-8xl text-mystery-forest mb-4 drop-shadow-lg">
              МистериКэш
            </h1>
            <div className="flex justify-center mb-6">
              <img 
                src="/img/fc4a582f-6c62-4807-9934-da9b96347310.jpg" 
                alt="Bill Cipher Symbol" 
                className="w-20 h-20 object-contain"
              />
            </div>
            <p className="font-handwritten text-2xl text-mystery-brown mb-6">
              "Доверяй свои деньги загадочным силам!" 
            </p>
            <p className="text-lg text-mystery-darkGreen italic">
              📖 Таинственный банк из Гравити Фолз ⭐
            </p>
          </div>
        </header>

        {/* Services Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-mystery text-4xl text-mystery-forest text-center mb-12">
              🎭 Наши Абсурдные Тарифы
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Service 1 */}
              <Card className="bg-mystery-parchment/90 border-mystery-brown border-2 transform hover:scale-105 transition-transform">
                <CardHeader>
                  <CardTitle className="font-handwritten text-2xl text-mystery-forest">
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

        {/* Reviews Section */}
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

        {/* Consultation Form */}
        <section className="py-16 px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-mystery-parchment/95 border-mystery-brown border-3">
              <CardHeader className="text-center">
                <CardTitle className="font-mystery text-3xl text-mystery-forest">
                  📞 Консультация с Агентом Станом
                </CardTitle>
                <CardDescription className="font-handwritten text-lg text-mystery-brown">
                  Получите сертификат тайного вкладчика!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-mystery-darkGreen font-bold mb-2">
                    Ваше таинственное имя:
                  </label>
                  <Input 
                    placeholder="Например: Агент Х или Тайный Вкладчик #13"
                    className="bg-mystery-oldPaper border-mystery-gold"
                  />
                </div>
                
                <div>
                  <label className="block text-mystery-darkGreen font-bold mb-2">
                    Какую загадку вы хотите решить с помощью денег?
                  </label>
                  <Textarea 
                    placeholder="Расскажите о своих финансовых мистериях..."
                    className="bg-mystery-oldPaper border-mystery-gold h-32"
                  />
                </div>
                
                <div>
                  <label className="block text-mystery-darkGreen font-bold mb-2">
                    Предпочитаемый способ связи:
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input type="radio" name="contact" className="mr-2" />
                      <span>Голубиная почта</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="contact" className="mr-2" />
                      <span>Телепатия</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="contact" className="mr-2" />
                      <span>Сны</span>
                    </label>
                  </div>
                </div>
                
                <Button className="w-full bg-mystery-gold hover:bg-yellow-600 text-mystery-darkGreen font-bold text-lg py-3">
                  <Icon name="Scroll" className="mr-2" />
                  Получить Сертификат Тайного Вкладчика
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 bg-mystery-darkGreen text-mystery-parchment text-center">
          <div className="max-w-4xl mx-auto">
            <p className="font-handwritten text-lg mb-4">
              МистериКэш © 2024 • Лицензия выдана Биллом Шифром
            </p>
            <p className="text-sm opacity-80">
              ⚠️ Это пародийный сайт для развлечения фанатов Гравити Фолз. 
              Никаких настоящих финансовых услуг не предоставляется.
            </p>
            <div className="flex justify-center items-center mt-4 space-x-4">
              <Icon name="TreePine" size={24} />
              <span className="font-mystery text-xl">🔺👁️🔺</span>
              <Icon name="TreePine" size={24} />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;