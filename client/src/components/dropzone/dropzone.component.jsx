import React,{ useState} from 'react';
import './dropzone.styles.css';
import axios from 'axios';
import MessageBox from '../message/message.component';
import Progress from '../progress/progress.component';

const DropZone = ({history}) => {
    const [file,setFile] = useState('');
    const [fileName,setFileName] = useState("Choose File");
    const [uploadedFile,setUploadedFile] = useState(null)
    const [message,setMessage] = useState('');
    const [uploadPercentage ,setUploadedPercentage] = useState(0);

    const handleChange = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
        e.preventDefault();
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file',file);
        try {
            const res = await axios.post('upload',formData,{
                headers:{
                    'Content-type':'multipart/form-data'
                },
                onUploadProgress: progressEvent => {
                    setUploadedPercentage(parseInt(Math.round((progressEvent.loaded * 100)/progressEvent.total)))
                    
                    setTimeout(()=> setUploadedPercentage(0),10000)
                }
                
            });
            const {fileName,filePath,size} = res.data;
            setUploadedFile(res.data);
            setMessage("File Uploaded");

        }catch(err){
            if(err.response.status === 500 )
            {
                setMessage("There was a problem with the server");
            }
            else
            {
                setMessage(err.response.data.message);
            }
        }
    }

    const validateFile = (file) => {
        const validTypes = ['text/csv','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','text/plain','application/pdf'];
        if (validTypes.indexOf(file.type) === -1) {
            return false;
        }
        return true;
    }
    const dragOver = (e) => {
        e.preventDefault();
    }

    const dragEnter = (e) => {
        e.preventDefault();
    }
    const dragLeave = (e) => {
        e.preventDefault();
    }
    const fileDrop = (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        if (files.length) {
            setFile(files[0]);
            setFileName(files[0].name);
        }
    }
    const fileSize = (size) => {
        if (size === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(size) / Math.log(k));
        return parseFloat((size / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }
    const fileType = (fileName) => {
        return fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length) || fileName;
    }
  
    return (
        <div className="content">
            <div className="container">
                {message ? <MessageBox message={message}/>:null}
                <form onSubmit={handleSubmit}>
                <div className="drop-container" onDragOver={dragOver} onDragEnter={dragEnter} onDragLeave={dragLeave} onDrop={fileDrop}>
                    <div className="drop-message">
                        <div className="upload-icon"></div>
                        Drag & Drop files here or click to upload
                    </div>
                    
                </div>
                <input type="file" name="file" onChange={handleChange} disabled={file !== ''?true:false}/>
                <Progress percentage={uploadPercentage}/>
                <input type="submit" value="Upload" className="btn btn-primary mt-4" disabled={file === ''?true:false}/>
                </form>
                <div className="file-display-container">
                    {
                        file !== ''?
                            <div className="file-status-bar" key={1}>
                                <div>
                                    <div className="file-type-logo"></div>
                                    <div className="file-type">{fileType(fileName)}</div>
                                    <span className={`file-name ${file.invalid ? 'file-error' : ''}`}>{file.name}</span>
                                    {
                                        file !== ''? <span className="file-size">({fileSize(file.size)})</span>:null 
                                    }
                                </div>
                                <div className="file-remove" onClick={() => setFile('')}>X</div>
                            </div>:null
                        
                    }
                </div>
                {
                uploadPercentage === 100 ? <button onClick={() => history.push({
                            pathname: '/preview',
                            state: {file: file}
                        })}> Click to Proceed For Validation</button>:null
                }
            </div>
        </div>
    );
}
export default DropZone;
