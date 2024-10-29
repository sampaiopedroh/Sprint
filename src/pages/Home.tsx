import { Header } from '../components/Header'; 
import { Footer } from '../components/Footer'; 
// import thumbnail from './images/thumbnail.jpg';

export const HomePage = () => {
  return (
    <div className="bg-gray-100"> 
      <Header /> 

      <div className="relative">
        {/* <img 
          src={thumbnail} 
          alt="Thumbnail"
          className="w-full h-[600px] object-cover" 
        /> */}
        {/* Adicione um overlay se desejar: */}
        {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <img 
            src="imagem1.jpg" 
            alt="Imagem 1"
            className="w-full h-auto rounded-md"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">Título da Seção 1</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">Título da Seção 2</h2>
            <p className="text-gray-700">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <img 
            src="imagem2.jpg" 
            alt="Imagem 2"
            className="w-full h-auto rounded-md"
          />

          <img 
            src="imagem3.jpg" 
            alt="Imagem 3"
            className="w-full h-auto rounded-md"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">Título da Seção 3</h2>
            <p className="text-gray-700">
              Duis aute irure dolor in reprehenderit in voluptate velit 
              esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>
      </div>

      <Footer /> 
    </div>
  );
};