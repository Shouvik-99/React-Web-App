import React, { useState } from 'react'

export let IMAGE_SRC_NAME = null;
function Image() {
    const [file, setFile] = useState('');
    function handleChange(e) {
        console.log(e.target.files);
        IMAGE_SRC_NAME = e.target.files[0].name;
        setFile(URL.createObjectURL(e.target.files[0]));
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