import React, { useEffect, useState } from 'react';
import { connectMqtt } from '../services/api';


interface SensorData {
    distanciaFrente?: number;
    distanciaTras?: number;
    temperatura?: number;
    marcha?: number;
    bateria?: number;
    pressaoPneu?: number;
    desgastePneu?: number;
    rpm?: number;
    velocidade?: number;
}

export const Pilot: React.FC = () => {
    const [telemetria, setTelemetria] = useState<SensorData>({});

    useEffect(() => {
        const client = connectMqtt();

        client.on('message', (topic, message) => {
            const topicName = topic.replace('/TEF/device001/', "");
            try {
                setTelemetria(prev => ({
                    ...prev,
                    [topicName as keyof SensorData]: parseFloat(message.toString()),
                }));
            } catch (error) {
                console.error(`Erro ao converter mensagem do tópico ${topic}: ${error}`);
                setTelemetria(prev => ({
                    ...prev,
                    [topicName as keyof SensorData]: undefined,
                }));
            }
        });

        return () => {
            client.end();
        };

    }, []);

    return (
        <div className="p-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden">
                <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/LKqPtE-eM5g"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="mb-4 h-[35vh]"
                ></iframe>
                <img
                    src="https://images.tcdn.com.br/img/img_prod/1130749/quadro_track_interlagos_419_1_99930c0713c645bdccb331a8bf9f8b24.jpg"
                    alt="Circuito"
                    className="w-full rounded-lg h-[40vh]"
                />
            </div>
            <div> 
                <h2 className="text-2xl font-bold mb-4">Telemetria:</h2>
                <div className="grid grid-cols-2 gap-4"> 
                    {Object.entries(telemetria).map(([key, value]) => (
                        <div key={key} className="bg-white p-4 rounded-lg shadow-md">
                            <p className="font-bold">{key}: {value} </p>
                            <p className="text-gray-600 text-sm"></p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};