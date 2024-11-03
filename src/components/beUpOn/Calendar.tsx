// components/Calendar.jsx
import React, { useState } from 'react';

const Calendar = () => {
    const [corridas, setCorridas] = useState([
        {
            pais: 'Brasil',
            pista: 'Autódromo de Interlagos',
            circuito: 'Grande Prêmio de São Paulo',
            data: '2025-03-15T14:00:00',
        },
        {
            pais: 'Estados Unidos',
            pista: 'Miami International Autodrome',
            circuito: 'Grande Prêmio de Miami',
            data: '2025-04-20T15:00:00',
        },
    ]);


    const formatarData = (dataISO: string): string => {
      const data = new Date(dataISO);
      const dia = data.toLocaleDateString('pt-BR', { day: '2-digit' });
      const mes = data.toLocaleDateString('pt-BR', { month: 'short' });
      const ano = data.getFullYear();
      const hora = data.toLocaleTimeString('pt-BR', {hour: '2-digit', minute:'2-digit'});
      return `${dia} ${mes} ${ano} - ${hora}`;

    }



  return (
      <div className="w-full lg:w-1/2 pr-4">
          <h2 className="text-2xl font-bold mb-4">Próximas Corridas</h2>
          <div className="border rounded-lg p-4 bg-white">
              {corridas.map((corrida, index) => (
                  <div key={index} className="mb-4 border-b pb-4 border-gray-300">
                      <div className="flex justify-between">
                          <p className="font-semibold">
                              <span className="mr-2">{corrida.pais}</span> - {corrida.pista}
                          </p>
                          <p className="text-gray-600 text-sm"> 
                              {formatarData(corrida.data)}
                          </p>
                      </div>
                      <p>{corrida.circuito}</p>

                  </div>
              ))}
          </div>
      </div>

  );
};

export default Calendar;