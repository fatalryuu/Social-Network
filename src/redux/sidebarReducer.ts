// import nikitaAvatar from '../img/nikita.jpg';
// import arseniyAvatar from '../img/arseniy.jpg';
// import nastyaAvatar from '../img/nastya.png';

let initialState = {
    // friends: [
    //     {id: 1, avatar: nikitaAvatar, name: 'Nikita'},
    //     {id: 2, avatar: arseniyAvatar, name: 'Arseniy'},
    //     {id: 3, avatar: nastyaAvatar, name: 'Nastya'}
    // ]
}

type InitialStateType = typeof initialState;

const sideReducer = (state = initialState, action: any): InitialStateType => {
    return state
}

export default sideReducer