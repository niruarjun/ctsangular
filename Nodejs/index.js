const express=require('express');
const app=express();
const port=5000;
app.get('/student',function(req,res){
    res.send("get all students")
})
app.get('/student/id',function(req,res){
    let id= req.params.id;
    res.send("get id"+id);
})
app.put('/student',function(req,res){
    res.send("Student:put");
})
app.delete('/student',function(req,res){
    res.send('student:delete')
})
app.listen(port,function(){
    console.log("server is Running port: "+port);
    
})