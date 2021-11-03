import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchEvents } from '../store/actions/eventActions'
import { Modal } from 'react-bootstrap'

export default function Homepage() {
    const dispatch = useDispatch()
    const events = useSelector((state) => state.events)
    const user = useSelector((state) => state.user)
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    useEffect(() => {
        dispatch(fetchEvents())
        // eslint-disable-next-line
    }, [])

    function onClickHandleApprove() {}

    function onClickHandleDelete() {}

    return (
        <div className="my-auto">
            <h1>
                WELCOME TO EMBREO EVENT APP {user.type} {user.username}
            </h1>
            <table class="table table-bordered ">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Dates</th>
                        <th scope="col">Location</th>
                        <th scope="col">Status</th>
                        <th scope="col">Vendor</th>
                        <th scope="col">Options</th>
                    </tr>
                </thead>
                {events.map((event) => {
                    return (
                        <tbody>
                            <tr>
                                <td>{event.name}</td>
                                <td>{event.dates}</td>
                                <td>{event.location}</td>
                                <td>{event.status}</td>
                                <td>{event.User.username}</td>
                                <td>
                                    <button
                                        type="button"
                                        onClick={(event) => handleShow(event)}
                                        class="btn btn-primary"
                                    >
                                        Detail
                                    </button>
                                    <Modal
                                        show={show}
                                        onHide={handleClose}
                                        centered
                                        aria-labelledby="contained-modal-title-vcenter"
                                    >
                                        <Modal.Body>
                                            <p className="text-center">
                                                Name: {event.name}
                                            </p>
                                            <p className="text-center">
                                                Date Option:{event.dates}
                                            </p>
                                            <p className="text-center">
                                                Location: {event.location}
                                            </p>
                                            <p className="text-center">
                                                Status: {event.status}
                                            </p>
                                            <p className="text-center">
                                                Vendor Name:{' '}
                                                {event.User.username}
                                            </p>
                                        </Modal.Body>
                                    </Modal>
                                    <button
                                        type="button"
                                        onClick={() => onClickHandleApprove()}
                                        class="btn btn-success"
                                    >
                                        Approve
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => onClickHandleDelete()}
                                        class="btn btn-danger"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    )
                })}
            </table>
        </div>
    )
}
