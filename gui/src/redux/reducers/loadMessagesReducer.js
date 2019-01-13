import { Actions } from '../actions/types';

const loadMessagesReducer = (state = [], action) => {
    switch (action.type) {
        // case Actions.CHAT_MESSAGE:
        //     return [ ...state, action.chatObject];
        case Actions.LOAD_MESSAGE:
            return action.payload;
        default:
            return state;
    }
};

export default loadMessagesReducer;