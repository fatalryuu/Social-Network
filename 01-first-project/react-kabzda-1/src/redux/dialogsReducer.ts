const SEND_MESSAGE = 'dialogs/SEND-MESSAGE';

type DialogType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    message: string
}

let initialState = {
    dialogs: [
        {id: 1, name: 'Nikita'},
        {id: 2, name: 'Danik'},
        {id: 3, name: 'Arseniy'},
        {id: 4, name: 'Egor'},
        {id: 5, name: 'Nikita'},
        {id: 6, name: 'Nastya'}
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your day?'},
        {id: 3, message: 'Yo'}
    ] as Array<MessageType>
}

export type InitialStateType = typeof initialState;

const dialogsReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return  {
                ...state,
                messages: [...state.messages, {id: 4, message: body}],
            };
        default:
            return state;
    }
}

type SendMessageCreatorActionType = {
    type: typeof SEND_MESSAGE
    newMessageBody: string
}

export const sendMessageCreator = (newMessageBody: string): SendMessageCreatorActionType => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer