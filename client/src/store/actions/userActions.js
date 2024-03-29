import axios from 'axios'

export const userLogin = (user) => (dispatch) => {
    
    axios({
        method: 'POST',
        url: 'http://localhost:4000/login',
        data: user
    })
    .then(({data}) => {
        // console.log(data)
        localStorage.setItem('access_token', data.access_token)
        const neededData = {
            access_token : data.access_token,
            type : data.type,
            username : data.username
        }
        dispatch({
            type: 'LOGIN_USER',
            payload: neededData
        })
    })
    .catch(err => console.log(err))
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