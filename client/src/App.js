import './App.css';
import NavbarComponent from './components/NavbarComponent';
import axios from "axios"
import {useEffect, useState} from "react"
import {Link} from "react-router-dom"
import Swal from "sweetalert2"

function App() {
  const [blogs,setBlogs] = useState([])

  const fetchData=()=>{
    axios
    .get(`${process.env.REACT_APP_API}/blogs`)
    .then(response => {
      setBlogs(response.data)
    })
    .catch(err=>alert(err))
  }
  useEffect(() => {
    fetchData()
  },[])

  function confirmDelete(slug){
    Swal.fire({
      title:"ยืนยันลบบทความ?",
      icon:"warning",
      showCancelButton:true
    }).then((result) =>{
      //กดปุ่ม ok 
      if(result.isConfirmed){
        deleteBlog(slug)
      }
    })
  }

  function deleteBlog(slug){
    //ส่ง req ไปให้ api เพื่อ ลบข้อมูล
    axios.delete(`${process.env.REACT_APP_API}/blog/${slug}`)
    .then(res => {
      Swal.fire("Deleted!",res.data.message,"success")
      fetchData();
    }).catch(err=>console.log(err))
  }

  return (
    <div className="container p-5">
      <NavbarComponent/>
        {blogs.map((blog,index)=>(
          <div className="row" key={index} style={{borderBottom:'1px solid silver'}}>
              <div className="col pt-3 pb-2">
                  <Link to={`/blog/${blog.slug}`}>
                    <h2>{blog.title}</h2>
                  </Link>
                  <p>เนื้อหา : {blog.content.substring(0,250)}</p>
                  <p className='text-muted'>ผู้เขียน: {blog.author}, เผยแพร่ : {new Date(blog.createdAt).toLocaleString()}</p>
                  <Link className='btn btn-outline-info' to={`blog/edit/${blog.slug}`}>แก้ไขบทความ</Link> &nbsp;
                  <button className='btn btn-outline-danger' onClick={() => confirmDelete(blog.slug)}>ลบบทความ</button>
              </div>
          </div>
        ))}
    </div>
  );
}

export default App;
