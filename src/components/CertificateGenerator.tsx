import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const CertificateGenerator = () => {
  const [selectedAvatar, setSelectedAvatar] = useState("");
  const [certificateName, setCertificateName] = useState("");

  const generateCertificate = () => {
    const avatars = ["🕵️‍♂️ Диппер", "🌈 Мэйбл", "🎩 Стэн", "📖 Форд", "🐷 Вада"];
    const randomAvatar = avatars[Math.floor(Math.random() * avatars.length)];
    setSelectedAvatar(randomAvatar);
  };

  return (
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
  );
};

export default CertificateGenerator;