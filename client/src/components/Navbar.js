import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const access_token = useSelector((state) => state.access_token)
    // const access_token = localStorage.getItem('access_token')
    const dispatch = useDispatch()
    useEffect(() => {}, [access_token])

    function onClickHandle() {
        // localStorage.clear()
        dispatch({
            type: 'USER_LOGIN',
            payload: false,
        })
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light py-0">
                <div className="navbar-nav">
                    {!access_token ? (
                        <Link
                            className="nav-item nav-link"
                            style={{
                                fontSize: '23px',
                                fontWeight: 'bolder',
                                color: 'black',
                            }}
                            to="/login"
                        >
                            LOGIN
                        </Link>
                    ) : (
                        <>
                            <Link
                                className="nav-item nav-link"
                                style={{
                                    fontSize: '23px',
                                    fontWeight: 'bolder',
                                    color: 'black',
                                }}
                                to="/"
                            >
                                HOME
                            </Link>
                            <button
                                type="button"
                                onClick={() => {
                                    onClickHandle()
                                }}
                                className="nav-item nav-link"
                                style={{
                                    fontSize: '23px',
                                    fontWeight: 'bolder',
                                    color: 'black',
                                }}
                            >
                                LOGOUT
                            </button>
                        </>
                    )}
                </div>
            </nav>
        </div>
    )
}
