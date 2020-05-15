// ipfs web app 
// by oran collins
// github.com/wisehackermonkey
// oranbusiness@gmail.com
// 20200515


const ipfsClient = require("ipfs-http-client")
const express = require("express")
const bodyParser = require("body-parser")
const fileUpload = require("express-fileupload")
const fs = require("fs")

//ipfs connect locally setup
const ipfs = new ipfsClient({host: "localhost", port: "5001", protocol: "http"})
const app = express()


//using ejs template language
app.set("view engine", 'ejs')

//setup body parser
app.use(bodyParser.urlencoded({extended:true}))
app.use(fileUpload())


//create routes
app.get("/", (req,res)=>{
    res.render("home")
})

//upload files to ipfs network from this route
app.post("/upload", (req,res)=>{
    const file = req.files.file

    const filename = req.body.filename
    const filepath = "files/" + filename

    //move the file to location on server
    file.mv(filepath, async (err)=>{
        if(err){
            console.log("Error: file failed to download")
            return res.status(500).send(err)
        }

        cosnt filehash = await addFile(filename, filepath)
        fs.unlink(filepath,(err)=>{
            if(err){console.log(err)}
        })

        res.render("upload",{filename,filehash})

    })
})

//add file from disk to ipfs network
//returns result hash from ipfs network
const addFile = async(filename,filepath) => {
    const file = fs.readFileSync(filepath)
    const fileAdded = await ipfs.add({path: filename, content: file})
    const fileHash = fileAdded[0].hash

    return fileHash
}