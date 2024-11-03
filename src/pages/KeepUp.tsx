import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Calendar from '../components/beUpOn/Calendar';
import Podium from '../components/beUpOn/Podium';

export const KeepUpContent = () => (
    <div className="flex flex-col lg:flex-row w-full">
        <Podium />
        <hr className="my-4 lg:mx-4 lg:my-0 lg:border-r lg:border-gray-300 lg:h-full" />
        <Calendar />
    </div>
);

export const KeepUp = () => {
    const location = useLocation();
    const shouldRenderContent = location.pathname === '/keepup';

    return (
        <div className="bg-gray-100 min-h-screen flex flex-grow"> 
            <Sidebar />
            <div className="ml-[25%] w-[75%] p-4 flex-grow">
                {shouldRenderContent}
                <Outlet />
            </div>
        </div>
    );
};