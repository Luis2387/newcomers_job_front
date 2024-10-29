
'use client'

import { useState } from "react";

const LogoUpload = () => {
    const [logImg, setLogoImg] = useState("");
    const logImgHander = (e) => {
        setLogoImg(e.target.files[0]);
    };
    return (
        <>
            <div className="uploading-outer">
                <div className="uploadButton">
                    <input
                        className="uploadButton-input"
                        type="file"
                        name="attachments[]"
                        accept="image/*"
                        id="upload"
                        required
                        onChange={logImgHander}
                    />
                    <label
                        className="uploadButton-button ripple-effect"
                        htmlFor="upload"
                    >
                        {logImg !== "" ? logImg.name : "Browse Logo"}
                    </label>
                    <span className="uploadButton-file-name"></span>
                </div>
            </div>
        </>
    );
};

export default LogoUpload;
