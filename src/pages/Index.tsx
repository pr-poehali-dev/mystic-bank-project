import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [calculatorAmount, setCalculatorAmount] = useState("");
  const [calculatorResult, setCalculatorResult] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState("");
  const [certificateName, setCertificateName] = useState("");

  const mysticalCalculate = () => {
    const amount = parseFloat(calculatorAmount);
    const mysticalResults = [
      `🎩 За ${amount}₽ вы получите ${(amount * 1.137).toFixed(2)}₽ + магическую шляпу!`,
      `🧙‍♂️ Гномы насчитали ${(amount * 2.71).toFixed(2)}₽ + подарок от Билла Шифра!`,
      `👁️ Мистический расчет: ${(amount * 3.14).toFixed(2)}₽ + способность видеть аномалии!`,
      `🌲 Лесные проценты: ${(amount * 1.618).toFixed(2)}₽ + карта тайных троп!`,
      `🐷 Вада рекомендует: ${(amount * 4.20).toFixed(2)}₽ + годовой запас морковки!`
    ];
    setCalculatorResult(mysticalResults[Math.floor(Math.random() * mysticalResults.length)]);
  };

  const generateCertificate = () => {
    const avatars = ["🕵️‍♂️ Диппер", "🌈 Мэйбл", "🎩 Стэн", "📖 Форд", "🐷 Вада"];
    const randomAvatar = avatars[Math.floor(Math.random() * avatars.length)];
    setSelectedAvatar(randomAvatar);
  };

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
            <h1 className="font-mystery text-6xl md:text-8xl text-mystery-forest mb-4 drop-shadow-lg hover:text-mystery-gold transition-colors cursor-pointer">
              МистериКэш
            </h1>
            <div className="flex justify-center mb-6">
              <img 
                src="/img/fc4a582f-6c62-4807-9934-da9b96347310.jpg" 
                alt="Bill Cipher Symbol" 
                className="w-20 h-20 object-contain hover:rotate-180 transition-transform duration-500 cursor-pointer"
                title="👁️ Билл наблюдает за тобой..."
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

        {/* Gravity Falls Map */}
        <section className="py-16 px-4 bg-mystery-forest/5">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-mystery text-4xl text-mystery-forest text-center mb-12">
              🗺️ Карта Филиалов МистериКэш
            </h2>
            
            <div className="relative">
              <img 
                src="/img/1792e564-ca3a-457b-ad8b-55f2b4d671b6.jpg" 
                alt="Карта Гравити Фолз" 
                className="w-full max-w-4xl mx-auto rounded-lg border-4 border-mystery-brown shadow-2xl"
              />
              
              <div className="absolute top-1/4 left-1/4 group cursor-pointer">
                <div className="w-6 h-6 bg-mystery-gold rounded-full animate-pulse"></div>
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-mystery-parchment p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  <p className="text-mystery-darkGreen font-bold">🏠 Хижина Тайн - Главный офис</p>
                </div>
              </div>
              
              <div className="absolute top-1/2 right-1/3 group cursor-pointer">
                <div className="w-6 h-6 bg-mystery-forest rounded-full animate-pulse"></div>
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-mystery-parchment p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  <p className="text-mystery-darkGreen font-bold">🧙‍♂️ Гном-отделение</p>
                </div>
              </div>
              
              <div className="absolute bottom-1/3 left-1/2 group cursor-pointer">
                <div className="w-6 h-6 bg-mystery-brown rounded-full animate-pulse"></div>
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-mystery-parchment p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  <p className="text-mystery-darkGreen font-bold">🐷 Офис Вады - Инвестиции</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mystical Calculator */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-mystery text-4xl text-mystery-forest text-center mb-12">
              🔮 Калькулятор Мистических Процентов
            </h2>
            
            <Card className="bg-mystery-parchment/95 border-mystery-gold border-3">
              <CardHeader className="text-center">
                <CardTitle className="font-handwritten text-2xl text-mystery-brown">
                  Узнай свои волшебные проценты!
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-mystery-darkGreen font-bold mb-2">
                    Сумма вклада (в рублях):
                  </label>
                  <Input 
                    type="number"
                    value={calculatorAmount}
                    onChange={(e) => setCalculatorAmount(e.target.value)}
                    placeholder="Введите сумму..."
                    className="bg-mystery-oldPaper border-mystery-gold text-lg text-center"
                  />
                </div>
                
                <Button 
                  onClick={mysticalCalculate}
                  className="w-full bg-mystery-forest hover:bg-mystery-darkGreen text-mystery-parchment font-bold text-lg py-3"
                  disabled={!calculatorAmount}
                >
                  <Icon name="Calculator" className="mr-2" />
                  Рассчитать Мистические Проценты!
                </Button>
                
                {calculatorResult && (
                  <Card className="bg-mystery-gold/20 border-mystery-gold border-2">
                    <CardContent className="p-4">
                      <p className="font-handwritten text-xl text-mystery-darkGreen text-center">
                        {calculatorResult}
                      </p>
                    </CardContent>
                  </Card>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Certificate Generator */}
        <section className="py-16 px-4 bg-mystery-brown/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-mystery text-4xl text-mystery-forest text-center mb-12">
              📜 Генератор Сертификата Вкладчика
            </h2>
            
            <Card className="bg-mystery-parchment/95 border-mystery-brown border-3">
              <CardHeader className="text-center">
                <CardTitle className="font-handwritten text-2xl text-mystery-forest">
                  Получи персональный сертификат!
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-mystery-darkGreen font-bold mb-2">
                    Твое мистическое имя:
                  </label>
                  <Input 
                    value={certificateName}
                    onChange={(e) => setCertificateName(e.target.value)}
                    placeholder="Введите имя для сертификата..."
                    className="bg-mystery-oldPaper border-mystery-gold text-lg"
                  />
                </div>
                
                <Button 
                  onClick={generateCertificate}
                  className="w-full bg-mystery-gold hover:bg-yellow-600 text-mystery-darkGreen font-bold text-lg py-3"
                  disabled={!certificateName}
                >
                  <Icon name="Award" className="mr-2" />
                  Сгенерировать Сертификат!
                </Button>
                
                {selectedAvatar && certificateName && (
                  <Card className="bg-mystery-forest/10 border-mystery-forest border-2">
                    <CardContent className="p-6 text-center">
                      <div className="text-6xl mb-4">{selectedAvatar.split(' ')[0]}</div>
                      <h3 className="font-mystery text-2xl text-mystery-forest mb-2">
                        Сертификат Тайного Вкладчика
                      </h3>
                      <p className="font-handwritten text-xl text-mystery-brown mb-4">
                        Настоящим удостоверяется, что
                      </p>
                      <p className="font-mystery text-3xl text-mystery-darkGreen mb-4">
                        {certificateName}
                      </p>
                      <p className="font-handwritten text-lg text-mystery-brown mb-4">
                        является почетным клиентом МистериКэш<br/>
                        под покровительством {selectedAvatar}
                      </p>
                      <p className="text-sm text-mystery-darkGreen">
                        Дата выдачи: {new Date().toLocaleDateString('ru-RU')}
                      </p>
                      <div className="mt-4 text-2xl">🔺👁️🔺</div>
                    </CardContent>
                  </Card>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* News Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-mystery text-4xl text-mystery-forest text-center mb-12">
              📰 Мистические Новости
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-mystery-parchment/95 border-mystery-gold border-2">
                <CardHeader>
                  <CardTitle className="font-handwritten text-lg text-mystery-forest">
                    🌈 Мэйбл выдала тысячу носков!
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-mystery-brown text-sm">
                    За успешный вклад в "шишки и желуди" Мэйбл лично подарила клиенту 
                    коллекцию радужных носков. Теперь он самый стильный в лесу!
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-mystery-parchment/95 border-mystery-gold border-2">
                <CardHeader>
                  <CardTitle className="font-handwritten text-lg text-mystery-forest">
                    🐷 Вада открыла морковный депозит!
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-mystery-brown text-sm">
                    Новый тариф "Морковное богатство" показал рекордную доходность. 
                    Вада лично гарантирует свежесть овощей!
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-mystery-parchment/95 border-mystery-gold border-2">
                <CardHeader>
                  <CardTitle className="font-handwritten text-lg text-mystery-forest">
                    👁️ Билл одобрил новые тарифы!
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-mystery-brown text-sm">
                    Мистический надзиратель Билл Шифр официально одобрил все банковские 
                    операции. Теперь проценты растут даже во сне!
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-mystery-parchment/95 border-mystery-gold border-2">
                <CardHeader>
                  <CardTitle className="font-handwritten text-lg text-mystery-forest">
                    🧙‍♂️ Гномы объявили о слиянии!
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-mystery-brown text-sm">
                    Гном-отделение МистериКэш объединилось с Лесной Кредитной Компанией. 
                    Теперь кредиты выдают прямо под елками!
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-mystery-parchment/95 border-mystery-gold border-2">
                <CardHeader>
                  <CardTitle className="font-handwritten text-lg text-mystery-forest">
                    🕵️‍♂️ Диппер раскрыл тайну процентов!
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-mystery-brown text-sm">
                    Главный детектив банка выяснил: проценты растут благодаря 
                    магическим свойствам дневника номер 3!
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-mystery-parchment/95 border-mystery-gold border-2">
                <CardHeader>
                  <CardTitle className="font-handwritten text-lg text-mystery-forest">
                    🎩 Стэн запустил лотерею!
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-mystery-brown text-sm">
                    Новая акция "Колесо Фортуны Стэна"! Главный приз - золотая шляпа 
                    и годовая подписка на "Тайны леса".
                  </p>
                </CardContent>
              </Card>
            </div>
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