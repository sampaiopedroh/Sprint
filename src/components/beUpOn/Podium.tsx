import { ReactElement, useState, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";

interface Piloto {
    nome: string;
    equipe: string;
    pontos: number;
    imagemEquipe: string;
}

const Podium: React.FC = () => {
    const [pilotos, setPilotos] = useState<Piloto[]>([
        { nome: 'Piloto 1', equipe: 'Equipe A', pontos: 25, imagemEquipe: '../../../public/icone_equipes.png' },
        { nome: 'Piloto 2', equipe: 'Equipe B', pontos: 20, imagemEquipe: '../../../public/icone_equipes.png' },
        { nome: 'Piloto 3', equipe: 'Equipe A', pontos: 15, imagemEquipe: '../../../public/icone_equipes.png' },
    ]);

    return (
        <div className="w-full lg:w-1/2 pr-4">
            <h2 className="text-2xl font-bold mb-4">Classificação</h2>
            <div className="border rounded-lg p-4 bg-white">
                <ul>
                    {pilotos.map((piloto: { imagemEquipe: string | undefined; equipe: string | undefined; nome: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; pontos: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }, index: Key | null | undefined) => (
                        <li key={index} className="flex justify-between items-center py-2 border-b border-gray-200">
                            <div className="flex items-center">
                                <img src={piloto.imagemEquipe} alt={piloto.equipe} className="w-6 h-6 mr-2" />
                                <span>{piloto.nome}</span>
                            </div>
                            <span>{piloto.pontos} pts</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Podium;