import React from 'react';

const pilotos = [
    {
        nome: 'Edoardo Mortara',
        imagem: 'https://img.freepik.com/fotos-premium/retrato-do-piloto-de-f1-usando-capacete-piloto-de-formula-1-em-pe-na-pista-de-corrida-apos-a-competicao_46383-9870.jpg',
        descricao: 'Piloto suíço-italiano de corridas automobilísticas. Atualmente compete na Fórmula E pela equipe ROKiT Venturi Racing.',
    },
    {
        nome: 'Nyck De Vries',
        imagem: 'https://img.freepik.com/fotos-premium/retrato-do-piloto-de-f1-usando-capacete-piloto-de-formula-1-em-pe-na-pista-de-corrida-apos-a-competicao_46383-9870.jpg',
        descricao: 'Piloto de corridas profissional neerlandês que atualmente compete no Campeonato Mundial de Fórmula E da ABB FIA pela equipe Mahindra Racing.',
    },
];

export const Squad: React.FC = () => {
    return (
        <div className="bg-gray-100 flex-grow p-4">
             <h1 className="text-4xl font-bold mb-8 text-center">Nossa Equipe</h1>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {pilotos.map((piloto) => (
                    <div key={piloto.nome} className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-bold mb-4 text-center">{piloto.nome}</h2>
                        <img src={piloto.imagem} alt={piloto.nome} className="w-full h-auto rounded-lg mb-4" />
                        <p className="text-gray-700 text-base">{piloto.descricao}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};