import axios from 'axios'

export const login = (user) => (dispatch) => {
    axios({
        method: 'POST',
        url: 'http://localhost:4000/login',
        data: user
    })
}

export const fetchUsers = () => (dispatch) => {
    axios({
        method: 'GET',
        url: 'http://localhost:4000/users'
    })
    .then(({data}) => {
        dispatch({
            type: 'FETCH_USERS',
            payload: data
        })
    })
    .catch(err => console.log(err))
}