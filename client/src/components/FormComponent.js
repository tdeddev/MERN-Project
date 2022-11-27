import {useState} from "react"
import NavbarComponent from "./NavbarComponent"

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
    return (
        <div className="container p-5">
            <NavbarComponent/>
            <h1>เขียนบทความ</h1>
            <form method="post">
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