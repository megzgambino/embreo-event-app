const initialState = {
    events : [],
    event : {},
    users : [],
    user: {
        access_token : '',
        username : '',
        type : ''
    }
}


function reducer(state = initialState, action) {
    if (action.type === 'FETCH_EVENTS') {
        const newState = {
            ...state, events: action.payload
        }
        return newState
    } else if (action.type === 'GET_EVENT') {
        const newState = {
            ...state, event: action.payload
        }
        return newState
    } else if (action.type === 'CREATE_EVENT') {
        const newState = [
            ...state.events, action.payload
        ]
        return newState
    } else if (action.type === 'FETCH_USERS') {
        const newState = {
            ...state, users: action.payload
        }
        return newState
    } else if (action.type === 'LOGIN_USER') {
        const newState = {
            ...state, user: action.payload
        }
        return newState
    }

    return initialState
}

export default reducer
