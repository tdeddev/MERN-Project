import { useState } from "react"
import NavbarComponent from "./NavbarComponent"
import axios from 'axios'
import Swal from 'sweetalert2'
import { authenticate } from "../services/authorize"
import { withRouter } from "react-router-dom"

const LoginComponent = (props) => {

const [state, setState] = useState({
    username : "",
    password : ""
})

const { username , password} = state

const inputValue = name => event => {
    setState({...state,[name]:event.target.value})
}

const submitForm = (e) =>{
    e.preventDefault();
    axios
    .post(`${process.env.REACT_APP_API}/login`, {username, password})
    .then(res => {
        // Login สำเร็จ
        authenticate(res,() => props.history.push("/create"))
    }).catch(e => Swal.fire("Is Wrong!!",e.response.data.err,"error"))
}


    return(
        <div className="container p-5">
            <NavbarComponent/>
            <h1>เข้าสู่ระบบ Admin</h1>
            <form onSubmit={submitForm}>
                <div className="form-group">
                    <label>UserName</label>
                    <input type="text" className="form-control w-50" value={username} onChange={inputValue("username")}/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control w-50" value={password} onChange={inputValue("password")} />
                </div>
                <div className="mt-3">
                    <button type="sumbit" className="btn btn-primary">เข้าสู่ระบบ</button>
                </div>
            </form>
        </div>
    )
}

export default withRouter(LoginComponent)