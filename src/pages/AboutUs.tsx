export const AboutUs = () => {
  return (
    <div className="bg-gray-100 flex-grow flex flex-col">
      <div className="container mx-auto px-4 py-16 flex-grow">
        <h1 className="text-4xl font-bold mb-8 text-center">Sobre o Projeto</h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          Este é um projeto que integra um ESP32 a um website para monitorar dados de sensores em tempo real. O ESP32 envia dados para um servidor, e o site consome esses dados para fornecer visualizações e insights.

          O projeto é inspirado na Tech Mahindra e tem como objetivo demonstrar a capacidade de conectar dispositivos IoT à web para criar soluções inovadoras. 
        </p>
      </div>
    </div>
  );
};
