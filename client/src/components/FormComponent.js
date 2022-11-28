import {useState} from "react"
import NavbarComponent from "./NavbarComponent"
import axios from "axios"
import Swal from "sweetalert2"

const FormComponent=()=>{
    const [state,setState] = useState({
        title:"",
        content:"",
        author:""
    })
    const {title, content, author} = state
    //กำหนดค่าให้กับ State
    const inputValue=name=>event=>{
        setState({...state,[name]:event.target.value})
    }
    const submitForm=(e)=>{
        e.preventDefault();
        console.log("API URL = ",process.env.REACT_APP_API);
        axios
        .post(`${process.env.REACT_APP_API}/create`,{title, content, author})
        .then(response=>{
            Swal.fire(
                'แจ้งเตือน',
                'บันทึกบทความเรียบร้อย',
                'success'
            )
            setState({...state,title:"",content:"",author:""})
        }).catch(err => {
            Swal.fire('แจ้งเตือน',err.response.data.error,'error')
        })
    }
    return (
        <div className="container p-5">
            <NavbarComponent/>
            <h1>เขียนบทความ</h1>
            <form onSubmit={submitForm}>
                <div className="form-group">
                    <label>ชื่อบทความ</label>
                    <input type="text" className="form-control w-50" value={title} onChange={inputValue("title")}/>
                </div>
                <div className="form-group">
                    <label>รายละเอียด</label>
                    <textarea className="form-control w-50" value={content} onChange={inputValue("content")}></textarea>
                </div>
                <div className="form-group">
                    <label>ผู้แต่ง</label>
                    <input type="text" className="form-control w-50" value={author} onChange={inputValue("author")}/>
                </div>
                <div className="mt-3">
                    <button type="sumbit" className="btn btn-primary">บันทึก</button>
                </div>
            </form>
        </div>
      );
}

export default FormComponent;