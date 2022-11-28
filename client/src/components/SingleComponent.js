import axios from "axios"
import { useState,useEffect } from "react"
import NavbarComponent from "./NavbarComponent"

const SingleComponent=(props)=>{
    const [blog,setBlog] = useState('')
    useEffect(() => {
        axios
        .get(`${process.env.REACT_APP_API}/blog/${props.match.params.slug}`)
        .then(response=> {
            setBlog(response.data)
        })
        .catch(err=>alert(err))
    },[])

    return(
        <div className="Container p-5">
            <NavbarComponent/>
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
            <p className='text-muted'>ผู้เขียน: {blog.author}, เผยแพร่ : {new Date(blog.createdAt).toLocaleString()}</p>
        </div>
    )
}

export default SingleComponent