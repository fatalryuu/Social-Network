import nikitaAvatar from '../img/nikita.jpg';
import arseniyAvatar from '../img/arseniy.jpg';
import nastyaAvatar from '../img/nastya.png';
let initialState = {
    friends: [
        {avatar: nikitaAvatar, name: 'Nikita'},
        {avatar: arseniyAvatar, name: 'Arseniy'},
        {avatar: nastyaAvatar, name: 'Nastya'}
    ]
}

const sideReducer = (state = initialState, action) => {
    return state
}

export default sideReducer