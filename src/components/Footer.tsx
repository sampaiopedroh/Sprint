export const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-4 mt-10">
        <div className="container mx-auto px-4 flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 md:mb-0">
            <img
              className="w-[175px] h-auto"
              src="https://www.techmahindra.com/themes/custom/techm/techm_logo.svg"
              alt="Tech Mahindra Logo"
            />
          </div>
          <div className="text-center md:text-left">
            <p className="text-sm">
              © {new Date().getFullYear()} Tech Mahindra. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  };