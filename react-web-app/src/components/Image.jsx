import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { IMAGE_FILE_PATH} from '../../public/ImageSource'

export let IMAGE_SRC_NAME = null;
function Image() {
    const [file, setFile] = useState('');
    const location = useLocation()
    useEffect(() => {
        if(location!==null && location.state !== null && location.state.foodImage!==null){
            IMAGE_SRC_NAME = location.state.foodImage;
        setFile(IMAGE_FILE_PATH.concat(location.state.foodImage))
        }
    },[])
    
    function handleChange(e) {
        if(e.target.files[0].name){
        IMAGE_SRC_NAME = e.target.files[0].name;
        setFile(URL.createObjectURL(e.target.files[0]));
        }
    }
    return (
        <div>
            <label className="form-label" style={{ fontWeight: 'bold' }}>Upload Image</label>
            <div>
                <input type="file" onChange={handleChange} />
            </div>
            <img src={file} />
        </div>
    )
}

export default Image