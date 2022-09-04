import React from 'react';
import styled from 'styled-components';
import PintrestIcon from '../icons/Pinterest.png';
import SearchIcon from '../icons/SearchIcon.png';

import { Link } from 'react-router-dom';
import CancelIcon from '../icons/Cancle.png';
import {BsBellFill} from 'react-icons/bs';
import {AiFillMessage} from 'react-icons/ai'
import {AiOutlineDown} from 'react-icons/ai'
import {FaUserCircle} from 'react-icons/fa'
import {BiLogOut} from 'react-icons/bi'
// props:{
//     onSubmit: onSearchSubmit()

// }

// const LogOutDetails =()=>{

//     return <div>
//             <h5>Log Out</h5>
//             <h3>isdf</h3><h1>fjkdjfkd</h1>
//         </div>

// }
const Navbar = (props) => {

    const [input, setInput] = React.useState("");

    const onSearchSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(input);

    }

    return (

        <NavWrappar>

            <Logo>
                <img src={PintrestIcon}></img>
            </Logo>
            <HomePageButton>
                <Link to="/"><p>Home</p></Link>
            </HomePageButton>
            <Following>
                <Link to="/pin/todaypins"><p style={{fontWeight:"400"}}>Today</p> </Link>
            </Following>

            <Create>
                <p style={{fontWeight:"400"}}>Create</p>
               <AiOutlineDown style={{ marginTop: "7px", width: "16px", height: "16px", marginLeft: "5px" }}/>
                <Link to="/pin/create"><h6>Create pin</h6></Link>
            </Create>
            <SearchWrapper>
                <SearchBarWrapper>

                    <IconButton className='searchdiv'>
                        <img src={SearchIcon} className='Search' style={{ marginTop: "16px", marginLeft: "7px", width: "16px", height: "16px" }} />
                    </IconButton>

                    <form>
                        <input type="text" placeholder='Search' onChange={(e) => setInput(e.target.value)}></input>
                        <button type="submit" onClick={onSearchSubmit}></button>
                    </form>
                    <img alt="cancel" src={CancelIcon} className='Cancel' onClick={() => window.location.reload()} style={{ width: "25px", height: "25px" }} />
                </SearchBarWrapper>
                <DropContent className='Drop'>
                    <IdeasForYou>

                        <p>Ideas for you</p>
                        <div className='IdeasFlexMain'>
                            <div className='hoverDiv'>
                                <img src="https://i.pinimg.com/236x/2f/e4/00/2fe40091e0caeb745eab7069528b03c8.jpg"></img>
                                <h5>Maths vocabulary</h5>
                            </div>
                            <div className='hoverDiv'>
                                <img src="https://i.pinimg.com/236x/12/69/7e/12697ef1ee7b648d3f3ac71b4c79f8d3.jpg"></img>
                                <h5>Teaching techniques</h5>
                            </div>
                            <div className='hoverDiv'>
                                <img src="https://i.pinimg.com/236x/ba/2f/a2/ba2fa28c937da1c797658121be062591.jpg"></img>
                                <h5>Photo editing</h5>
                            </div>
                            <div className='hoverDiv'>
                                <img src="https://i.pinimg.com/236x/17/d6/9f/17d69fda85598f127a4232f1700ab2e2.jpg"></img>
                                <h5>Drawing techniques</h5>
                            </div>

                        </div>



                    </IdeasForYou>
                    <Popular>
                        <p>Popular in pinterest</p>

                        <div className='IdeasFlexMain'>
                            <div className='hoverDiv'>
                                <img src="https://i.pinimg.com/236x/78/35/aa/7835aa32cb58637496c36e93dcdd0681.jpg"></img>
                                <h5>Ganesh Chathurthi Status</h5>
                            </div>
                            <div className='hoverDiv'>
                                <img src="https://i.pinimg.com/236x/48/07/a3/4807a3c7399db01305c85ed3f4e24f38.jpg"></img>
                                <h5>Ganesh papa photo</h5>
                            </div>
                            <div className='hoverDiv'>
                                <img src="https://i.pinimg.com/236x/03/84/e3/0384e3992cca30a02b667af82e823c94.jpg"></img>
                                <h5>Baby ganesh</h5>
                            </div>
                            <div className='hoverDiv'>
                                <img src="https://i.pinimg.com/236x/80/e3/16/80e3168bf7c67581fb2400973bc90a15.jpg"></img>
                                <h5>Kitchen interior</h5>
                            </div>



                        </div>
                        <div className='IdeasFlexMain'>
                            <div className='hoverDiv'>
                                <img src="https://i.pinimg.com/236x/6e/19/ab/6e19abff46703debadcdd1bcc1691bf3.jpg"></img>
                                <h5>Living room design</h5>
                            </div>
                            <div className='hoverDiv'>
                                <img src="https://i.pinimg.com/236x/b3/5c/ee/b35cee0eca8133353ede91ba9e939135.jpg"></img>
                                <h5>phone wallpaper</h5>
                            </div>
                            <div className='hoverDiv'>
                                <img src="https://i.pinimg.com/236x/2d/67/f9/2d67f9834649b584682ab58606f5a27e.jpg"></img>
                                <h5>White background</h5>
                            </div>
                            <div className='hoverDiv'>
                                <img src="https://i.pinimg.com/236x/e7/13/1e/e7131e068a7ed8a988cffcac602f120d.jpg"></img>
                                <h5>Teachers day cards handmade creative</h5>
                            </div>



                        </div>
                    </Popular>
                </DropContent>

            </SearchWrapper>

            <IconsWrap >

                <Notify className='icons'>
                    <Link to="" >< BsBellFill className="ColorChange" style={{  width: "25px", height: "25px" }} /></Link>
                    
                    <h6>Notifications</h6>
                </Notify>

                <Notify className='icons'>
                    <Link to=""><AiFillMessage className="ColorChange" style={{ width: "25px", height: "25px" }}/></Link>
                    <h6>Messages</h6>
                </Notify>

                <Notify className='icons'>
                    <Link to="">< FaUserCircle className="ColorChange" style={{ width: "25px", height: "25px" }}/></Link>
                    <h6>Your profile</h6>
                </Notify>

                <Notify className='icons' >
                <BiLogOut  className="ColorChange" style={{  width: "25px", height: "25px" }} />

                    <h6 className='SignOut'>Log Out</h6>
                </Notify>


            </IconsWrap>
        </NavWrappar>

    )
}

const NavWrappar = styled.div`
display:flex;
align-items:center;
height:56px;
padding: 12px 4px 4px 12px;
background-color:white;
width:100%;
// border:1px solid black;
color:black;
margin:0px 0px 100px 0px;
position:fixed;
z-index:2;
top:0px;


`;
const Logo = styled.div`
display:flex;
height:48px;
min-width:3%;
align-items:center;
justify-content:center;
border-radius:24px;
cursor:pointer;
background-color: white;
:hover {
    background-color: #C0C0C0	;
}


    
`;
const HomeButtons = styled.div`
display:flex;
cursor:pointer;
height:48px;
min-width:5%;
align-items:center;
justify-content:center;
border-radius:24px;
`;

const HomePageButton = styled(HomeButtons)`

background-color:rgb(17,17,17);
    a{
        text-decoration:none;
        color:white;
        font-weight: 700;
    }
`;


const Following = styled.div`
    display:flex;
    height:48px;
    min-width:5%;
    align-items:center;
    justify-content:center;
    border-radious:24px;
    cursor:pointer;
    background-color: white;
    border-radius:24px;
    :hover {
        background-color: #C0C0C0	;
    }
        a {
            text-decoration:none;
            color:black;
            font-weight: 700;
        }

        
    ;`
const Create = styled.div`

display:flex;
    height:48px;
    min-width:5%;
    align-items:center;
    justify-content:center;
    border-radious:24px;
    cursor:pointer;
    background-color: white;
    border-radius:24px;
    position:relative;
    z-index:1;
    a {
        text-decoration:none;
        color:black;
        font-weight: 700;
    }
    h6{
        display:none;
    }
    
    :hover h6{
    display:block;
    min-width:100px;
    font-size:16px;
    word-wrap: normal;
    background-color:whitesmoke;
    color:black;
    padding:10px;
    border-radius:5px;
    position:absolute;
    top:45px;
    left:-10px;
    :hover{
        background-color:#C0C0C0;
    }
    
    }
`;
const SearchBarWrapper = styled.div`
display:flex;
`;

const SearchWrapper = styled.div`
    background-color: #efefef;
    display:flex;
    flex-direction:column;
    height:48px;

    width:75%;
    border-radius: 50px;
    border:none;
    padding-left:10px;
    .Cancel{
        display:none;
    }
    .Drop{
        display:none;
    }

    form {
        display:flex;
        column-span:1;
        width:100%;
       // background-color:yellow;
    }

    form > input {
        background-color: transparent;
        border:none;
        width:100%;
        height:48px;
        margin-left:5px;
        font-size:20px;
        outline:none;
        
        //border:1px solid blue;
    }
    
    form > button{
        display:none;
    }
    :hover .searchdiv{
        display:none;
    }
   
     :hover{
        padding:4px;
        border:5px solid #4a8ad4;
        form>input{
            // width:100%;
        height:30px;
        // background-color:yellow;
        }
        .Drop{
            display:block;
            //border:2px solid yellow;
        }
        .Cancel{
            display:block;
        }
       
    }

`;

const Iconsstyling = styled.div`
    display:flex;
    justify-content:space-between;
    padding:1px;
    width:10%;
    align-items:center;
    cursor:pointer;
    // border:1px solid red;
   
    
`;
const IconsWrap = styled(Iconsstyling)`
position:relative;
z-index:1;

.icons{
// border:1px solid yellow;
display:flex;
height:38px;
min-width:38px;
align-items:center;
justify-content:space-evenly;
border-radius:50px;
cursor:pointer;
background-color: white;
.ColorChange{
    color:#767676;
}
:hover .ColorChange{
    color:black;
}

:hover {
    background-color: #C0C0C0;
   
} 

}

`;
const IconButton = styled.div`

   
`;

const DropContent = styled.div`
margin:9px 0px 0px 20px;
background-color:white;
position:relative;
z-index:1;
border-bottom-right-radius:20px;
border-bottom-left-radius:20px;

`
const IdeasForYou = styled.div`
margin:10px; 0px;
.hoverDiv{
    position:relative;
    width:200px;
    height:100px;
    color:white;
    text-align:center;
    margin:auto;
   
    margin:0px 2px 0px 2px; 
    img{
        width:100%;
        height:100%;
        filter:brightness(70%);
        border-radius:16px;
        padding:3px;
        :hover{
            filter:brightness(50%);
        }
    }
   
    h5{
        text-align:center;
        text-wrap:wrap;
        position:absolute;
        top:40px;
        left:50px;
        

    }
   
   
}
.IdeasFlexMain{
    display:flex;
    gap:10px;
  
}


    

.OverText{
    position:absolute;
    top:0;
    color:white;
}
`;
//Search bar hover Popular div 
const Popular = styled(IdeasForYou)`


.hoverDiv{
    position:relative;
    width:200px;
    height:100px;
    color:white;
    text-align:center;
    margin:auto;
    margin:3px; 
    img{
        width:100%;
        height:100%;
        
          filter:brightness(70%);
        
        border-radius:16px;
    }
   
    h5{
        position:absolute;
        top:40px;
        left:50px;
        

    }
    
   
}



`;

//Icons hover div css

const Notify = styled.div`
display:flex;
flex-direction:column;
position:relative;
text-align:center;




h6{
    display:none;
}

:hover h6 {
display:block;
min-width:60px;
word-wrap: normal;
background-color:black;
color:white;
padding:8px;
border-radius:5px;
position:absolute;
top:50px;


}

:hover .SignOut {
    display:block;
    min-width:60px;
    word-wrap: normal;
    background-color:black;
    color:white;
    padding:8px;
    border-radius:5px;
    position:absolute;
    top:50px;
    right:4px;
    
    
    }
`;



export default Navbar

