const express = require('express');
const router = express.Router();
const Model = require('../model/model')

//Post Method

router.post('/createPost',async (req,res)=>{
    const newPost = new Model({
        title : req.body.title,
        author : req.body.author,
        content : req.body.content

    })
    try{
        const result = await newPost.save();
        res.status(200).json(result)
    }catch(error){
        res.status(400).json({message : error.message})
    }
})

//Get Method

router.get('/getAllPost',async (req,res)=>{
    try{
        const result = await Model.find();
        res.status(200).json(result)
    }catch(error){
        res.status(500).json({message : error.message})
    }
})

router.get('/getPost/:id',(req,res)=>{
    const id = req.params.id
    res.send("Post data with id ${id}")
})

//Patch

router.patch('/editPost/:id',(req,res)=>{
    const id = req.params.id
    res.send("Edit Post with id ${id}")
})

//Delete

router.delete('/deletePost/:id',(req,res)=>{
    const id = req.params.id
    res.send("Delete Post with id ${id}")
})
module.exports = router;