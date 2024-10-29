export const Calendar = () => {
    const corridas = [
      { data: '2023-12-25', circuito: 'Circuito 1', local: 'Cidade 1' },
      { data: '2024-01-15', circuito: 'Circuito 2', local: 'Cidade 2' },
      { data: '2024-02-10', circuito: 'Circuito 3', local: 'Cidade 3' },
      // Adicione mais corridas aqui
    ];
  
    return (
      <div className="bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Calendário de Corridas</h2>
        <ul className="space-y-4">
          {corridas.map((corrida, index) => (
            <li key={index} className="border-b border-gray-200 pb-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold">{corrida.circuito}</p>
                  <p className="text-gray-600">{corrida.local}</p>
                </div>
                <p className="text-gray-500">{corrida.data}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };