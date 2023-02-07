export type ChatMessageType = {
    message: string,
    photo: string,
    userId: number,
    userName: string
}

type SubscriberType = (messages: ChatMessageType[]) => void;

let ws: WebSocket;
const closeHandler = () => {
    setTimeout(createChannel, 3000);
}

const createChannel = () => {
    ws?.removeEventListener('close', closeHandler);
    ws?.close();
    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
    ws.addEventListener('close', closeHandler);
}

const subscribers = [] as SubscriberType[];

export const chatAPI = {
    subscribe(cb: SubscriberType) {
        subscribers.push(cb);
    }
}

