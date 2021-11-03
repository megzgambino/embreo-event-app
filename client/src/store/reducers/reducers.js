const initialState = {
    events : [],
    event : {},
    users : []
}


function reducer(state = initialState, action) {
    if (action.type === 'FETCH_DATA') {
        const newState = {
            ...state, data: action.payload
        }
        return newState
    } else if (action.type === 'CREATE_BALANCE') {
        const newState = {
            ...state, data:action.payload
        }
        return newState
    }

    return initialState
}

export default reducer
