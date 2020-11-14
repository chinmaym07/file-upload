import React from 'react';
    
import DropZone from "../dropzone/dropzone.component";

import './upload.styles.css';


const UploadFile = () => (
            <div className="upload">
                <div className="content">
                    <DropZone />
                </div>
            </div>
    );

export default UploadFile;