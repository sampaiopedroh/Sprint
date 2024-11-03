import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="w-1/4 bg-gray-200 p-4 fixed h-screen">
            <h3 className="text-xl font-bold mb-4">Menu</h3>
            <ul>
                <li>
                    <NavLink
                        to="/keepup"
                        className={({ isActive }) =>
                            `block py-2 px-4 rounded transition-colors duration-200 ${isActive ? 'bg-gray-300 text-gray-800' : 'hover:bg-gray-100'}`
                        }
                    >
                        Be Up On
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/keepup/chat"
                        className={({ isActive }) =>
                            `block py-2 px-4 rounded transition-colors duration-200 ${isActive ? 'bg-gray-300 text-gray-800' : 'hover:bg-gray-100'}`
                        }
                    >
                        Chat
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/keepup/equipe"
                        className={({ isActive }) =>
                            `block py-2 px-4 rounded transition-colors duration-200 ${isActive ? 'bg-gray-300 text-gray-800' : 'hover:bg-gray-100'}`
                        }
                    >
                        Equipe
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;