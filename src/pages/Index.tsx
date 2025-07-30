import Header from "@/components/Header";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import ConsultationForm from "@/components/ConsultationForm";
import GravityFallsMap from "@/components/GravityFallsMap";
import MysticalCalculator from "@/components/MysticalCalculator";
import CertificateGenerator from "@/components/CertificateGenerator";
import NewsSection from "@/components/NewsSection";
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
        <Header />
        <Services />
        <Reviews />
        <ConsultationForm />
        <GravityFallsMap />
        <MysticalCalculator />
        <CertificateGenerator />
        <NewsSection />

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