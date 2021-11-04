import axios from 'axios'

export const createEvent = (event) => (dispatch) => {
    axios({
        method: 'POST',
        url: 'http://localhost:4000/events',
        data: event
    })
    .then(({data}) => {
        dispatch({
            type: 'CREATE_EVENT',
            payload: data
        })
    })
    .catch(err => console.log(err))
}

export const fetchEvents = () => (dispatch) => {
    axios({
        method: 'GET',
        url: 'http://localhost:4000/events'
    })
    .then(({data}) => {
        dispatch({
            type: 'FETCH_EVENTS',
            payload: data
        })
    })
    .catch(err => console.log(err))
}

export const getEvent = (id) => (dispatch) => {
    axios({
        method: 'GET',
        url: `http://localhost:4000/events/${id}`
    })
    .then(({data}) => {
        dispatch({
            type: 'GET_EVENT',
            payload: data
        })
    })
    .catch(err => console.log(err))
}



export const updateStatus = ({id, status}) => (dispatch) => {
    axios({
        method: 'PATCH',
        url: `http://localhost:4000/events`,
        data: {
            id,
            status
        }
    })

}

export const deleteEvent = (id) => (dispatch) => {
    axios({
        method: 'DELETE',
        url: `http://localhost:4000/events/${id}`,
    })
  
}