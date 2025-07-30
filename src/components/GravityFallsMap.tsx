const GravityFallsMap = () => {
  return (
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
  );
};

export default GravityFallsMap;