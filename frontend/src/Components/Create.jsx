import React from 'react'
import { useState } from 'react'
import prvImage from '../Images/Screenshot 2022-09-01 131258.png';
import profile from "../Images/hii.png"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import axios from 'axios';

export const Create = () => {
    const [preview, setPreview] = useState(prvImage);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [link, setLink] = useState("");

    const postPin = () => {
        console.log(title);
        console.log(description);
        console.log(preview);

        if (!title || !description || !preview) {
            return alert("Error");
        }
        axios({
            method: "post",
            url: "http://localhost:3001/createpin",
            data: {
                title,
                description,
                image: preview
            }
        })
    }

    return (
        <div style={{ backgroundColor: "#cecece", width: "100%", height: "auto", paddingBottom: "70px", paddingTop: "70px" }}>
            <div style={{ backgroundColor: "white", width: "60%", margin: "auto", borderRadius: "10px", height: "600px", padding: "50px" }}>
                <div style={{ display: "flex", flexDirection: "row-reverse" }}>
                    <button onClick={postPin} style={{ border: "2px solid red", backgroundColor: "red", color: "white", borderTopRightRadius: "7px", borderBottomRightRadius: "7px", fontWeight: "bold", fontSize: "14px" }}>Save</button>
                    <select style={{ padding: "10px", paddingRight: "70px", backgroundColor: "#e8e5e5", borderRadius: "7px", borderTopRightRadius: "0px", borderBottomRightRadius: "0px", cursor: "pointer" }}>
                        <option value="select">Select</option>
                    </select>
                </div>
                <div style={{ display: "flex", padding: "20px" }}>
                    <div>
                        <img style={{ borderRadius: "10px", width: "330px", height: "450px" }} src={preview} alt="" /><br />
                        <input value={link} onChange={(e) => { setLink(e.target.value) }} style={{ marginTop: "20px", padding: "20px", borderRadius: "13px", border: "5px solid #cecece", paddingRight: "60px" }} type="text" placeholder='Enter Website' />
                        <button onClick={() => { setPreview(link); setLink("") }} style={{ padding: "15px", border: "5px solid white", borderRadius: "10px", cursor: "pointer" }}>{<KeyboardArrowRightIcon />}</button>
                    </div>
                    <div style={{ padding: "20px" }}>
                        <input value={title} onChange={(e) => { setTitle(e.target.value) }} style={{ fontSize: "30px", fontWeight: "bold", border: "none", borderBottom: "1px solid #cecece", padding: "20px", paddingRight: "0px" }} type="text" placeholder='Add Your Title' />
                        <img style={{ marginTop: "50px" }} src={profile} alt="" />
                        <input value={description} onChange={(e) => { setDescription(e.target.value) }} style={{ fontSize: "15px", fontWeight: "bold", border: "none", borderBottom: "1px solid #cecece", padding: "20px", paddingRight: "30px", width: "90%", marginTop: "40px" }} type="text" placeholder='Tell everyone what your pin is about' />
                    </div>
                </div>
            </div>
        </div>
    )
}
