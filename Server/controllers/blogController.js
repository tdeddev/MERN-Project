// Call with Database
const slugify = require('slugify')
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
    res.json({
        data: {title,content,author,slug}
    })
}

//localhost:5500//install-postman