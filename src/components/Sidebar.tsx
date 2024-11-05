import { NavLink, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();
    const isSquadActive = location.pathname.startsWith('/keepup/squad'); 

    return (
        <div className="col-span-1 bg-gray-200 p-4">
            <h3 className="text-xl font-bold mb-4">Menu</h3>
            <ul>
                <li>
                    <NavLink
                        to="/keepup"
                        className={({ isActive }) =>
                            `block py-2 px-4 rounded transition-colors duration-200 ${isActive ? 'bg-gray-300 text-gray-800' : 'hover:bg-gray-100'}`
                        }
                        end
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
                        to="/keepup/squad"
                        className={({ isActive }) =>
                            `block py-2 px-4 rounded transition-colors duration-200 ${isSquadActive ? 'bg-gray-300 text-gray-800' : 'hover:bg-gray-100'}`
                        }
                    >
                        {({ isActive }) => (
                            <>
                                Squad
                                {isSquadActive && ( // Exibe o submenu se alguma rota Squad estiver ativa
                                    <ul className="pl-4 mt-2">
                                        <li>
                                            <NavLink to="pilot-1" className={({ isActive }) => (`block py-2 px-4 rounded transition-colors duration-200 ${isActive ? 'bg-gray-300 text-gray-800' : 'hover:bg-gray-100'}`)}>Pilot 1</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="pilot-2" className={({ isActive }) => (`block py-2 px-4 rounded transition-colors duration-200 ${isActive ? 'bg-gray-300 text-gray-800' : 'hover:bg-gray-100'}`)}>Pilot 2</NavLink>
                                        </li>
                                    </ul>
                                )}
                            </>
                        )}
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;