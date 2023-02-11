export type ChatMessageType = {
    message: string,
    photo: string,
    userID: number,
    userName: string
}

export type StatusType = 'pending' | 'ready' | 'error';
type EventNameType = 'message' | 'status';
type MessageSubscriberType = (messages: ChatMessageType[]) => void;
type StatusSubscriberType = (status: StatusType) => void;

let ws: WebSocket | null = null;

const closeHandler = () => {
    subscribers['status'].forEach(s => s('pending'));
    setTimeout(createChannel, 3000);
}

const openHandler = () => {
    subscribers['status'].forEach(s => s('ready'));
}

const errorHandler = () => {
    subscribers['status'].forEach(s => s('error'));
}

const messageHandler = (e: MessageEvent) => {
    const newMessages = JSON.parse(e.data);
    subscribers['message'].forEach(s => s(newMessages));
}

const cleanUp = () => {
    ws?.removeEventListener('close', closeHandler);
    ws?.removeEventListener('message', messageHandler);
    ws?.removeEventListener('open', openHandler);
    ws?.removeEventListener('error', errorHandler);
}

const createChannel = () => {
    cleanUp();
    ws?.close();
    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
    subscribers['status'].forEach(s => s('pending'));
    ws.addEventListener('close', closeHandler);
    ws.addEventListener('message', messageHandler);
    ws.addEventListener('open', openHandler);
    ws.addEventListener('error', errorHandler);
}

let subscribers = {
    'message': [] as MessageSubscriberType[],
    'status': [] as StatusSubscriberType[]
};

export const chatAPI = {
    start() {
        createChannel();
    },
    stop() {
        subscribers['message'] = [];
        subscribers['status'] = [];
        cleanUp();
        ws?.close();
    },
    subscribe(eventName: EventNameType, cb: MessageSubscriberType | StatusSubscriberType) {
        //@ts-ignore
        subscribers[eventName].push(cb);
    },
    unsubscribe(eventName: EventNameType, cb: MessageSubscriberType | StatusSubscriberType) {
        //@ts-ignore
        subscribers[eventName] = subscribers[eventName].filter(s => s !== cb);
    },
    sendMessage(message: string) {
        ws?.send(message);
    }
}

