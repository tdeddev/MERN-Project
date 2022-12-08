import { useEffect, useState } from "react"
import NavbarComponent from "./NavbarComponent"
import axios from "axios"
import Swal from "sweetalert2"
import ReactQuill from 'react-quill'
import "react-quill/dist/quill.snow.css"

const EditComponent = (props) => {
    const [state, setState] = useState({
        title: "",
        author: "",
        slug: ""
    })
    const { title, author, slug } = state
    const [content, setContent] = useState('')

    const submitContent = (e) => {
        setContent(e)
    }

    //ดึงข้อมูลบทความที่ต้องการแก้ไข
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API}/blog/${props.match.params.slug}`)
            .then(response => {
                const { title, content, author, slug } = response.data
                setState({ ...state, title, author, slug })
                setContent(content)
            })
            .catch(err => alert(err))
        // eslint-disable-next-line
    }, [])

    //กำหนดค่าให้กับ State
    const inputValue = name => event => {
        setState({ ...state, [name]: event.target.value })
    }
    // http://localhost:5500/api/blog/slug
    const submitForm = (e) => {
        e.preventDefault();
        console.log("API URL = ", process.env.REACT_APP_API);
        axios
            .put(`${process.env.REACT_APP_API}/blog/${state.slug}`, { title, content, author })
            .then(response => {
                const {title, content, author, slug} = response.data
                setState({...state, title, author, slug})
                setContent(content)
                Swal.fire(
                    'แจ้งเตือน',
                    'อัพเดทบทความเรียบร้อย',
                    'success'
                )
                
            }).catch(err => {
                Swal.fire('แจ้งเตือน', err.response.data.error, 'error')
            })
    }
    return (
        <div className="container p-5">
            <NavbarComponent />
            <h1>แก้ไขบทความ</h1>
            <form onSubmit={submitForm}>
                <div className="form-group">
                    <label>ชื่อบทความ</label>
                    <input type="text" className="form-control w-50" value={title} onChange={inputValue("title")} />
                </div>
                <div className="form-group">
                    <label>รายละเอียด</label>
                    <ReactQuill
                        value={content}
                        onChange={submitContent}
                        theme="snow"
                        className="pb-5 mb-3"
                        style={{border:'1px solid gray'}}
                    />
                </div>
                <div className="form-group">
                    <label>ผู้แต่ง</label>
                    <input type="text" className="form-control w-50" value={author} onChange={inputValue("author")} />
                </div>
                <div className="mt-3">
                    <button type="sumbit" className="btn btn-primary">บันทึก</button>
                </div>
            </form>
        </div>
    );
}

export default EditComponent;