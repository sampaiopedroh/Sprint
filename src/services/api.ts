import mqtt from 'mqtt';

const MQTT_BROKER = "18.217.90.106";
const MQTT_PORT = 1883;
const DEVICE_ID = "device001";
const TOPICO_BASE = "/TEF/";

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
  forcaG?: number;
}

let sensorReadings: SensorData = {};

const connectMqtt = () => {
    const client = mqtt.connect(`mqtt://${MQTT_BROKER}:${MQTT_PORT}`);

    client.on('connect', () => {
        console.log('Conectado ao broker MQTT!');
        const topicos = [
            "distanciaFrente", "distanciaTras", "dht/temperatura", "marcha",
            "bateria", "pressaoPneu", "desgastePneu", "rpm", "velocidade", "forcaG"
        ];

        topicos.forEach(topico => {
            client.subscribe(`${TOPICO_BASE}${DEVICE_ID}/${topico}`, (err) => {
                if (err) {
                    console.error(`Erro ao assinar o tópico ${topico}:`, err);
                } else {
                    console.log(`Assinado ao tópico: ${topico}`);
                }
            });
        });
    });

    client.on('message', (topic, message) => {
        const topicName = topic.replace(`${TOPICO_BASE}${DEVICE_ID}/`, "");
        try {
            sensorReadings[topicName as keyof SensorData] = parseFloat(message.toString());
        } catch (error) {
            console.error(`Erro ao converter mensagem do tópico ${topic}: ${error}`);
            sensorReadings[topicName as keyof SensorData] = undefined;
        }
    });

    client.on('error', (error) => {
        console.error('Erro MQTT:', error);
    });

    setInterval(() => {
        console.log("Leituras do sensor:", sensorReadings);
        sensorReadings = {};
    }, 1000);

    return client;
};

export { connectMqtt };