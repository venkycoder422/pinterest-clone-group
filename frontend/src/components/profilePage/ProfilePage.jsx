import React from 'react'
import { useSelector } from 'react-redux';
import { Avatar } from '@mui/material';
import './ProfilePage.css'


const ProfilePage = () => {
    const user = useSelector(state => state.auth.userData)
    console.log(user)

    return (
        <div>
            <Avatar className="avatar" sx={{ width: 100, height: 100 }} alt="Remy Sharp" src={user?.imageUrl} />
            <h1 className='profile_name'>{user?.name}</h1>
            <p style={{ color: "grey" }}>{11} following</p>
            <br />
            <div className="profile_button">
                <button>Share</button>
                <button>Edit Profile</button>
            </div>
            <h3>saved</h3>
            <div className='saved_container'>
                <div>
                    <img src="https://i.pinimg.com/236x/6d/06/2a/6d062a16efa71b0717692abf540d02e5.jpg" alt="saved Image" />
                    <h3 className="saved_title">Coat</h3>
                </div>
                <div>
                    <img src="https://i.pinimg.com/236x/6d/06/2a/6d062a16efa71b0717692abf540d02e5.jpg" alt="saved Image" />
                    <h3 className="saved_title">Coat</h3>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage
