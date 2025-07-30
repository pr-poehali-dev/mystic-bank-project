import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const ConsultationForm = () => {
  return (
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
  );
};

export default ConsultationForm;