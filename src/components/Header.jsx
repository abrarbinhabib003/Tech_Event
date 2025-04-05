import { Link } from "react-router-dom"; 

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
    
        <Link to="/" className="text-3xl font-bold text-blue-500 hover:text-blue-700 transition-all">
          TechWave 2025
        </Link>


        <nav>
          <ul className="flex gap-8">
            <li>
              <Link to="/" className="text-lg text-gray-700 hover:text-blue-500 transition-all">
                Home
              </Link>
            </li>
            <li>
              <Link to="/speakers" className="text-lg text-gray-700 hover:text-blue-500 transition-all">
                Speakers
              </Link>
            </li>
            <li>
              <Link to="/agenda" className="text-lg text-gray-700 hover:text-blue-500 transition-all">
                Agenda
              </Link>
            </li>
            <li>
              <Link to="/tickets" className="text-lg text-gray-700 hover:text-blue-500 transition-all">
                Tickets
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-lg text-gray-700 hover:text-blue-500 transition-all">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

   
        <Link
          to="/tickets"
          className="btn btn-primary text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-600 transition-all"
        >
          Get Your Pass
        </Link>
      </div>
    </header>
  );
};

export default Header;
