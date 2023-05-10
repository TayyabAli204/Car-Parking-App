
const express = require("express")
const routes = express.Router()
const verifyUser = require('../utils/verfyUser');
const {doCreatePost, doDeletePost, doGetPosts} = require("../controller/postController")

routes.post('/createPost', verifyUser, doCreatePost)

routes.delete('/deletePost',doDeletePost)

routes.get('/getPosts', doGetPosts)

module.exports = routes