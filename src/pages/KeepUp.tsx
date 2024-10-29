import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Calendar } from '../components/Calendar'; 
// import Equipe from './Equipe'; // Componente para a página da equipe
import { Chat } from '../components/Chat'; // Componente para o chat

export const KeepUp = () => {
  const [activeTab, setActiveTab] = useState('calendar'); // Estado para controlar a aba ativa

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />

      <div className="container mx-auto px-4 py-16 flex-grow flex">
        <div className="w-64 bg-white rounded-md shadow-md mr-8 hidden md:block">
          <ul className="space-y-2">
            <li
              className={`py-3 px-4 cursor-pointer hover:bg-gray-100 ${activeTab === 'calendario' ? 'bg-gray-200 font-bold' : ''}`}
              onClick={() => handleTabClick('calendario')}
            >
              Calendário
            </li>
            <li
              className={`py-3 px-4 cursor-pointer hover:bg-gray-100 ${activeTab === 'equipe' ? 'bg-gray-200 font-bold' : ''}`}
              onClick={() => handleTabClick('equipe')}
            >
              Equipe
            </li>
            <li
              className={`py-3 px-4 cursor-pointer hover:bg-gray-100 ${activeTab === 'chat' ? 'bg-gray-200 font-bold' : ''}`}
              onClick={() => handleTabClick('chat')}
            >
              Chat
            </li>
          </ul>
        </div>

        <div className="flex-grow">
          {activeTab === 'calendario' && <Calendar />}
          {/* {activeTab === 'equipe' && <Equipe />} */}
          {activeTab === 'chat' && <Chat />}
        </div>
      </div>

      <Footer />
    </div>
  );
};