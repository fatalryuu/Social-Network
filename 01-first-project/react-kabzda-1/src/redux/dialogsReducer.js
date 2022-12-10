const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Nikita'},
        {id: 2, name: 'Danik'},
        {id: 3, name: 'Negr'},
        {id: 4, name: 'Egor'},
        {id: 5, name: 'Nikita'},
        {id: 6, name: 'Nastya'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your day?'},
        {id: 3, message: 'Yo'}
    ],
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            let newMessage = {
                id: 4,
                message: body
            }
            state.messages.push(newMessage)
            state.newMessageBody = ''

            return state
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body

            return state
        default:
            return state
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    }
}

export default dialogsReducer