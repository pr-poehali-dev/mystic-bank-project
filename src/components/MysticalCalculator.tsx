import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const MysticalCalculator = () => {
  const [calculatorAmount, setCalculatorAmount] = useState("");
  const [calculatorResult, setCalculatorResult] = useState("");

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

  return (
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
  );
};

export default MysticalCalculator;