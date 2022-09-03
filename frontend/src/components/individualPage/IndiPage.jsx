import { Avatar } from '@mui/material'
import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './indiPage.css'
import { useSelector } from 'react-redux';

const IndiPage = () => {
    const user = useSelector(state => state.auth.userData)
    console.log(user)
    function getRandomFloat(min, max, decimal) {
        const str = (Math.random() * (max - min) + min).toFixed(decimal);
        return parseFloat(str)
    }
    return (
        <div>
            <div className='pin_container'>
                <div className='div_1'>
                    <img src="https://i.pinimg.com/564x/fe/72/25/fe72258492bdb0cab263fa00d7232a6b.jpg" alt="pin_image" />
                </div>
                <div className='div_2'>
                    <div>
                        <button className='save_button'>Save</button>
                        <h1 className="pin_title">Gallery Wall</h1>
                        <p className="pin_desc">There are so many amazing ways to decorate an empty wall and tell a story and one of the most popular techniques is creating a gallery wall.</p>
                        <div className='user_avatar'>
                            <div style={{display:"flex"}}>
                            <Avatar alt="Remy Sharp" src='https://i.pinimg.com/75x75_RS/81/cb/36/81cb36420378047f86a4d9d4e12394ae.jpg' />
                            <div className='avatar_detail'>
                                <h5 style={{marginTop:"0"}}>Taattva</h5>
                                <p style={{marginTop:"-25px"}}>{getRandomFloat(1.1, 25.9, 2)}K followers</p>
                            </div>
                            </div>
                            <button className='follow_user'>Follow</button>
                        </div>
                    </div>
                    <br />
                    <div className='pin_comment'>
                        <Accordion style={{border:"0.1px solid #cecece",marginRight:"10px"}}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography><h2>2 Comments</h2></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <div style={{display:"flex" , gap:"20px"}}>
                                        <Avatar alt="Remy Sharp" src='https://i.pinimg.com/75x75_RS/81/cb/36/81cb36420378047f86a4d9d4e12394ae.jpg' />
                                        <p>Hi ! How do I order these</p>
                                    </div>
                                    <br />
                                    <div style={{display:"flex" , gap:"20px"}}>
                                        <Avatar alt="Remy Sharp" src='https://i.pinimg.com/75x75_RS/81/cb/36/81cb36420378047f86a4d9d4e12394ae.jpg' />
                                        <p>Hi ! How do I order these</p>
                                    </div>
                                    <br />
                                    <div className='comment_input_container'>
                                    <Avatar alt="Remy Sharp" src={user.imageUrl} />
                                    <input className='comment_input' type="text" placeholder='Add a Comment'/>
                                    </div>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndiPage
