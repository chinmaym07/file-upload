import React,{useState} from 'react';

import './upload.styles.css';


const UploadFile = () => {
        const files = useState([]);
        const removeFile = () => {
             
             
        }
        const addFile = () => {
            
        }

        return (
            <div className="upload">

                <aside>
                    <h4>Files</h4>
                    <ul>
                        {
                            files.map(file => (
                                <li key={file.path}>
                                    {file.path} - {file.size} bytes
                                    <button className="cross" onClick={removeFile}>X</button>
                                </li>
                                
                            ))
                        }
                    </ul>
                    
                </aside>
            </div>
        );
    
}

export default UploadFile;