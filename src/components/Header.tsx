const Header = () => {
  return (
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
  );
};

export default Header;