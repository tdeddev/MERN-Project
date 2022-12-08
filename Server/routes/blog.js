const express = require('express')
const router = express.Router()
const {create,getAllblogs,singleBlog,remove,edit} = require("../controllers/blogController")

router.post('/create',create)

router.get('/blogs',getAllblogs)

router.get('/blog/:slug',singleBlog)

router.delete('/blog/:slug',remove)

router.put('/blog/:slug',edit)

module.exports = router