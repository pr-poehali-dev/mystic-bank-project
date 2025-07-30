import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const NewsSection = () => {
  const newsItems = [
    {
      title: "🌈 Мэйбл выдала тысячу носков!",
      content: "За успешный вклад в \"шишки и желуди\" Мэйбл лично подарила клиенту коллекцию радужных носков. Теперь он самый стильный в лесу!"
    },
    {
      title: "🐷 Вада открыла морковный депозит!",
      content: "Новый тариф \"Морковное богатство\" показал рекордную доходность. Вада лично гарантирует свежесть овощей!"
    },
    {
      title: "👁️ Билл одобрил новые тарифы!",
      content: "Мистический надзиратель Билл Шифр официально одобрил все банковские операции. Теперь проценты растут даже во сне!"
    },
    {
      title: "🧙‍♂️ Гномы объявили о слиянии!",
      content: "Гном-отделение МистериКэш объединилось с Лесной Кредитной Компанией. Теперь кредиты выдают прямо под елками!"
    },
    {
      title: "🕵️‍♂️ Диппер раскрыл тайну процентов!",
      content: "Главный детектив банка выяснил: проценты растут благодаря магическим свойствам дневника номер 3!"
    },
    {
      title: "🎩 Стэн запустил лотерею!",
      content: "Новая акция \"Колесо Фортуны Стэна\"! Главный приз - золотая шляпа и годовая подписка на \"Тайны леса\"."
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-mystery text-4xl text-mystery-forest text-center mb-12">
          📰 Мистические Новости
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <Card key={index} className="bg-mystery-parchment/95 border-mystery-gold border-2">
              <CardHeader>
                <CardTitle className="font-handwritten text-lg text-mystery-forest">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-mystery-brown text-sm">
                  {item.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;