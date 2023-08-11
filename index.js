const express = require("express")
const req = require("express/lib/request")
const path = require("path")
const app = express()

const multer = require("multer")

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, Date.now() + path.extname(file.originalname));
    }
});


const upload = multer ({storage : storage})
app.set("view enjine","ejs")

app.get("/upload",(req,res)=>{
    res.render("upload.ejs")
})
app.post("/upload",upload.single("image") ,(req,res)=>{
    res.send('image uploaded')
})

app.listen(3001,()=>
console.log("app is running on 3001")
)