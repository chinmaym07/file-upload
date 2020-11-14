
const express = require('express');
const fileupload = require('express-fileupload');

const  app = express();

app.use(fileupload());
app.listen(5000,() => console.log("Server Started ..."));

app.post('/upload',(req,res) =>{
    if(req.files === null){
        return res.status(400).json({message:"No file Uploaded"})
    }
    const file = req.files.file;
    file.mv(`${__dirname}/client/public/uploads/${file.name}`,err =>{
        if(err) {
            console.error(err);
            return res.status(500).send(err);
        }
        res.json({fileName:file.name,filePath:`/uploads/${file.name}`,size:file.size})
    })
});
