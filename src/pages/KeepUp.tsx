import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Calendar from '../components/beUpOn/Calendar';
import Podium from '../components/beUpOn/Podium';

export const KeepUpContent = () => (
    <div className="flex flex-col lg:flex-row justify-between">
        <Podium />
        <Calendar />
    </div>
);

export const KeepUp = () => {
    return (
        <div className="bg-gray-100 grid grid-cols-6 flex-grow"> 
            <Sidebar />
            <div className="col-span-5 p-4 flex-grow">
                <Outlet />
            </div>
        </div>
    );
};
