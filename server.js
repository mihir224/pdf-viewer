const express=require("express");
const upload=require('express-fileupload');
const app=express();
const port=process.env.port||5000;
app.use(upload());
app.use(express.static("public"));
app.get('/',function(req,res){
    res.sendFile(__dirname+"/index.html");
})
var uploadedFiles=[];
app.post('/',function(req,res){
    if(req.files){
    var file=req.files.pdf;
    var filename=file.name;
    var size=file.size;
    if(size>6000000){
        console.log("filesize exceeds 6mb, reduce file size");
    }else{
    console.log(size);
    console.log(filename);
    uploadedFiles.push(filename);
    file.mv('./pdf-viewer/src/files/'+filename,function(err){
        if(err){
            res.send(err);
        }
        else{
            res.redirect("http://localhost:3000");
        }
    });
    app.get("/api/pdf-viewer",function(req,res){
        res.json(uploadedFiles);
    });
    }}
}); 

app.listen(port, function(){
    console.log("Server started on port " + port);
})
