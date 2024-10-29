export const Chat = () => {
    const [mensagens, setMensagens] = useState([]);
    const [novaMensagem, setNovaMensagem] = useState('');
    const mensagensFimRef = useRef(null);
  
    useEffect(() => {
      // Simula recebimento de mensagens do servidor (substitua por lógica real)
      const novasMensagens = [
        { id: 1, usuario: 'Bot', texto: 'Bem-vindo ao chat!' },
        { id: 2, usuario: 'Usuário', texto: 'Olá!' },
      ];
      setMensagens(novasMensagens);
    }, []);
  
    useEffect(() => {
      mensagensFimRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [mensagens]);
  
    const handleInputChange = (event) => {
      setNovaMensagem(event.target.value);
    };
  
    const enviarMensagem = () => {
      if (novaMensagem.trim() !== '') {
        const novaMensagemObj = {
          id: Date.now(),
          usuario: 'Eu', 
          texto: novaMensagem,
        };
  
        setMensagens([...mensagens, novaMensagemObj]);
        setNovaMensagem('');
      }
    };
  
    return (
      <div className="bg-white p-8 rounded-md shadow-md flex flex-col h-full">
        <h2 className="text-2xl font-bold mb-4">Chat</h2>
  
        <div className="flex-grow overflow-y-auto mb-4">
          <ul className="space-y-4">
            {mensagens.map((mensagem) => (
              <li key={mensagem.id} className={`flex ${mensagem.usuario === 'Eu' ? 'justify-end' : 'justify-start'}`}>
                <div className={`bg-${mensagem.usuario === 'Eu' ? 'blue-500' : 'gray-200'} text-white p-3 rounded-lg max-w-xs`}>
                  <p className="font-bold">{mensagem.usuario}</p>
                  <p>{mensagem.texto}</p>
                </div>
              </li>
            ))}
            <div ref={mensagensFimRef} />
          </ul>
        </div>
  
        <div className="flex">
          <input
            type="text"
            placeholder="Digite sua mensagem..."
            className="flex-grow border border-gray-400 rounded-l-md px-4 py-2 focus:outline-none focus:border-blue-500"
            value={novaMensagem}
            onChange={handleInputChange}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
            onClick={enviarMensagem}
          >
            Enviar
          </button>
        </div>
      </div>
    );
  };