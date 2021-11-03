import React, { useState } from 'react'
import { useDispatch} from 'react-redux'
import { useHistory } from 'react-router'
import { userLogin } from '../store/actions/userActions'
import Swal from 'sweetalert2'

export default function Login() {
    const dispatch = useDispatch()
    const history = useHistory()
    const [input, setInput] = useState()

    function handleOnChangeInput(e) {
        const { name, value } = e.target
        setInput({ ...input, [name]: value })
    }

    function handleOnClickLogin() {
        dispatch(userLogin(input))
        history.push('/')
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Login Success!',
            showConfirmButton: false,
            timer: 1500
        })
       
            
    }

    return (
        <div id="intro" className="bg-image shadow-2-strong">
            <div className="mask d-flex align-items-center h-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-5 col-md-8">
                            <form className="bg-white  rounded-5 shadow-5-strong p-5">
                                <img
                                    src="https://trendlab-staticfiles.s3.amazonaws.com/images/user/login.png"
                                    alt=""
                                    className="d-inline-block align-center"
                                />
                                <div className="form-outline mb-4">
                                    <label
                                        className="form-label"
                                        htmlFor="form1Example1"
                                    >
                                        Username :
                                    </label>
                                    <input
                                        type="username"
                                        name="username"
                                        id="form1Example1"
                                        onChange={(e) => {
                                            handleOnChangeInput(e)
                                        }}
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-outline mb-4">
                                    <label
                                        className="form-label"
                                        htmlFor="form1Example2"
                                    >
                                        Password :
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="form1Example2"
                                        onChange={(e) => {
                                            handleOnChangeInput(e)
                                        }}
                                        className="form-control"
                                    />
                                </div>
                                <button
                                    type="button"
                                    className="btn btn-primary btn-block"
                                    onClick={() => {
                                        handleOnClickLogin()
                                    }}
                                >
                                    Sign in
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
