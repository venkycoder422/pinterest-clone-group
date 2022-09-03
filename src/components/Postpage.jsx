// import React from 'react'
import right_up from '../img/right-up.png'
import scan from "../img/scan.png"
import more_icon from "../img/more_icon.png"
import upload_icon from "../img/upload_icon.png";
import copy from "../img/copy.png"
import axios from "axios";
import "../css/Postpage.css"
import { useState } from 'react'
import { useEffect } from 'react';
import down_arrow from "../img/down-arrow.png"
import SendIcon from '@mui/icons-material/Send';
export default function Postpage() {

    const [count, setcount] = useState(30000);
    const [commentData, setcommentData] = useState([]);
    const [loginuserdata, setloginuserdata] = useState({
        userName: "",
        userProfilePic: ""
    })

    const [save, setsave] = useState("Save");
    const [follow, setfollow] = useState("Follow")

    const [postdata, setpostdata] = useState({
        uploadUser: "",
        imageUrl: "",
        imageName: "",
        imageDescription: "",
        profileImage: "",
    })
    const [chat, setchat] = useState();

    const getLoginuserdata = () => {
        axios({
            method: "get",
            url: "http://localhost:3001/loggedUserData"
        })
            .then(res => {
                // console.log(res.data.userProfilePic)
                setloginuserdata({
                    userName: res.data.userName,
                    userProfilePic: res.data.userProfilePic
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        getLoginuserdata();
        axios({
            method: "get",
            url: `http://localhost:3001/postpagedetails/1`,
        })
            .then(res => {
                // console.log(res)
                setpostdata({
                    uploadUser: res.data.uploadUser,
                    imageUrl: res.data.imageurl,
                    imageName: res.data.imageName,
                    imageDescription: res.data.imageDescription,
                    profileImage: res.data.profileImage,
                })
            })
            .catch(err => {
                console.log(err);
            })


            axios({
                method: "get",
                url: "http://localhost:3001/commentsData"
            })
                .then(res => {
                    setcommentData(res.data);
                })
                .catch(err => {
                    console.log(err);
                })

    }, [chat])
    // console.log(postdata);
    // console.log(loginuserdata);


    const handleSave = () => {
        if (save === "Save") {
            setsave("Saved");
        } else {
            setsave("Save");
        }
    }

    const handleFollow = () => {
        if (follow === "Follow") {

            setfollow("Following")
            setcount(count + 1)
        } else {
            setfollow("Follow");
            setcount(count - 1);
        }
    }

    const handleKeyDown = (event) => {

        if (event.key === 'Enter') {
            var data = setcommentData(chat);
            setchat('');
        }
        console.log(data);
    }
    // console.log(chat)
    const handlecommentData = () => {
        if(chat != ""){
        axios({
            method: "post",
            url: " http://localhost:3001/commentsData",
    
            data: {
                comment: chat,
                profilePic: loginuserdata.userProfilePic,
                userName: loginuserdata.userName
            }
        
        })
        setchat("")
            .catch(err => {
                console.log(err);
            })
    }
}
    
    // console.log(commentData)

    // Getting the comment data;

    const getCommentData = () => {
     
    }
    getCommentData();


    return (
        <div>

            <div className='post_main'>

                <div className='post_middle'>
                    {/* Post left  */}
                    <div className='post_left'>
                        <div className='container container2'>
                            <img src={postdata.imageUrl} alt="Snow" className='main_image' />
                            

                            <a href={postdata.imageUrl} target='_blank'>
                                <div className='bottom_right_new'>
                                    <img src={scan} />

                                </div>

                            </a>
                        </div>
                    </div>


                    {/* Post right */}




                    <div className='post_right'>

                        <div className='icon_collection' >

                            <div className='icon_collection_left'>

                                <img src={more_icon} alt="" />
                                <img src={upload_icon} alt="" />
                                <img src={copy} alt="" />


                            </div>

                            <div className='icon_collection_right'>

                                <div onClick={handleSave} className='save'>
                                    {save}

                                </div>
                            </div>

                        </div>





                        <div className='post_info'>

                            <div className='owner_post'>
                                <h2>{postdata.imageName}</h2>


                            </div>
                            <div>

                                <p>{postdata.imageDescription}</p>
                            </div>

                            <div className='post_follow_section'>
                                <div className='flex'>
                                    <div>
                                        <img
                                            src={postdata.profileImage}
                                            alt=''
                                            className='channel_image'
                                        />
                                    </div>

                                    <div>
                                        <p>{postdata.uploadUser}</p>
                                        <p >{count} Followers</p>
                                        {/* <p>{imageData.total_photos} Total Photos</p> */}
                                    </div>
                                </div>

                                <div onClick={handleFollow} className='follow_div'>{follow}</div>


                            </div>

                            <div className='profile_collection'>
                                <h4>Comments</h4>
                                <img src={down_arrow} alt='' className='down_hover' />
                            </div>

                        </div>

                        <div className='comments_section'>
                            <p>Share feedback, ask a question or give a high five</p>
                            <div className='comments_section2'>
                                <div>
                                    <img src={loginuserdata.userProfilePic} alt="" className='channel_image2' />
                                </div>

                                <div className='chat_input'>
                                    <input type="text" name="" id="" value={chat} onChange={(e) => setchat(e.target.value)} onKeyDown={handleKeyDown} />
                                    {/*  */}
{/* import SendIcon from '@mui/icons-material/Send'; */}
                                     <SendIcon className='send_icon' onClick={() => handlecommentData()}/>  
                                </div>

                            </div>

                            <div className='chat_main'>
                                {commentData.map((ele) => {
                                    return (
                                        <div className='chatsub_div'>
                                            <img
                                                src={ele.profilePic}
                                                alt=''
                                                className='chaticon'
                                            />
                                            <p>{ele.comment}</p>
                                            {/* <p>{ele.userName}</p> */}
                                        </div>
                                    );
                                })}
                            </div>

                        </div>
                    </div>
                </div>
                <div className='post_bottom'>
                    <h3>More like this</h3>

                </div>
            </div>


        </div>
    )
}

/* <a href={postdata.imageUrl} target="_blank">
                                <div className='bottom-left'>
                                    <img src={right_up} alt="" />
                                    <h3>View Image</h3>

                                </div>
                            </a>*/