import React from "react";
import Google from './assets/images/google.png';
import Apple from './assets/images/apple.png'
import { useHistory } from "react-router-dom"

const Login = () => {
    const history = useHistory();
    const LoginMethod = () => {
        history.push({
            pathname: (`/dashboard`)
        })
    }
    return (
        <div className="grid grid-cols-3 login">
            <div className="left-section">
                <div className="h-screen flex items-center justify-center text">
                    Board.
                </div>
            </div>
            <div className="col-span-2 right-section">
                <div className="flex h-screen flex items-center justify-center text">
                    <div className="box-border md:w-2/5 lg:w-2/5 p-4 border-4 text-left">
                        <h1>Sign In</h1>
                        <p className="mt-2">Sign in to your account</p>
                        <div className="flex justify-between mt-5">
                            <div className="sign-button pt-2 pb-2 pl-4 pr-4 flex items-center" >
                                <img className="mr-2" src={Google} width="12px" height="12px" /> Sign in with Google
                            </div>
                            <div className="sign-button pt-2 pb-2 pl-4 pr-4 flex items-center">
                                <img className="mr-2" src={Apple} width="18px" height="18px" /> Sign in with Apple
                            </div>
                        </div>
                        <div className="box-border sign-in-box mt-5 p-5">
                            <div>
                                <label className="block">
                                    <span className="block text-sm font-medium text-slate-700">Email address</span>
                                    <input type="email" placeholder="johndoe@gmail.com" className="peer mt-2 w-full p-2" />
                                </label>
                            </div>
                            <div className="pt-4">
                                <label className="block">
                                    <span className="block text-sm font-medium text-slate-700">Password</span>
                                    <input type="password" placeholder="••••••••" className="peer mt-2 w-full p-2" />
                                </label>
                            </div>
                            <p className="pt-4 pb-4 forgot-password">Forgot password?</p>
                            <button className="p-4 rounded w-full" onClick={LoginMethod}>Sign In</button>
                        </div>
                        <div className="text-center">
                            <p className="mt-5 account">Don’t have an account?
                                <span className="register"> Register here</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;