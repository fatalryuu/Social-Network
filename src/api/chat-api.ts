export type ChatMessageType = {
    message: string,
    photo: string,
    userId: number,
    userName: string
}

type SubscriberType = (messages: ChatMessageType[]) => void;

let ws: WebSocket | null = null;

const closeHandler = () => {
    setTimeout(createChannel, 3000);
}

const messageHandler = (e: MessageEvent) => {
    const newMessages = JSON.parse(e.data);
    subscribers.forEach(s => s(newMessages));
}

const createChannel = () => {
    ws?.removeEventListener('close', closeHandler);
    ws?.close();
    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
    ws.addEventListener('close', closeHandler);
    ws.addEventListener('message', messageHandler);
}

let subscribers = [] as SubscriberType[];

export const chatAPI = {
    start() {
        createChannel();
    },
    stop() {
        subscribers = [];
        ws?.close();
        ws?.removeEventListener('close', closeHandler);
        ws?.removeEventListener('message', messageHandler);
    },
    subscribe(cb: SubscriberType) {
        subscribers.push(cb);
    },
    unsubscribe(cb: SubscriberType) {
        subscribers = subscribers.filter(s => s !== cb);
    },
    sendMessage(message: string) {
        ws?.send(message);
    }
}

