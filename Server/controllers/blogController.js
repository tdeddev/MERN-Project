// Call with Database and operation with database
const slugify = require('slugify')
const Blogs = require('../models/blogs')
// Save Data
exports.create = (req, res) => {
    const {title,content,author} = req.body
    const slug = slugify(title)

    //Validate / ตรวจสอบความถูกต้องของข้อมูล
    switch(true){
        case !title:
            return res.status(400).json({err:"กรุณาป้อนชื่อบทความ"})
            break;
        case !content:
            return res.status(400).json({err:"กรุณาป้อนเนื้อหาบทความ"})
            break;
    }
    //Save Data
    Blogs.create({title,content,author,slug},(err, blog) => {
        if(err){
            res.status(400).json({err:"มีบทความชื่อซ้ำกัน"})
        }
        res.json(blog)
    })
}

//localhost:5500//install-postman