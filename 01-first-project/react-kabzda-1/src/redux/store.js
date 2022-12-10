import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 15},
                {id: 2, message: 'It\'s my first post', likesCount: 12}
            ],
            newPostText: ''
        },
        dialogsPage: {
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
            newMessageText: ''
        },
        sidebar: {
            names: [
                'Nikita ',
                'Arseniy ',
                'Nastya'
            ]
        }
    },
    _callSubscriber() {

    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)
    }
}

export default store;