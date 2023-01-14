import profileReducer, {addPostActionCreator, deletePost} from "./profileReducer";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'It\'s my first post', likesCount: 12}
    ],
    profile: null,
    status: ''
}

it('length of posts should be 3', () => {
    let action = addPostActionCreator('some text');
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(3);
})

it('message of posts should be \'love n\'', () => {
    let action = addPostActionCreator('love n');
    let newState = profileReducer(state, action);
    expect(newState.posts[2].message).toBe('love n');
})

it('after deleting length of posts should be 1', () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(1);
})

it('if unknown id then nothing to delete (length should be 2)', () => {
    let action = deletePost(3);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(2);
})