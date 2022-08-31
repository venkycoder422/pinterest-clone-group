import React from 'react';
import styled from 'styled-components';
import PintrestIcon from '../icons/Pinterest.png';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import TextsmsRoundedIcon from '@mui/icons-material/TextsmsRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom'
import CancelIcon from '@mui/icons-material/Cancel';

// props:{
//     onSubmit: onSearchSubmit()
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
                <a href='/'>Home</a>
            </HomePageButton>
            <Following>
                <a href='/'>Follow</a>
            </Following>
            <Create>
                <a href='/'>Create</a>
                <KeyboardArrowDownIcon style={{ marginTop: "7px" }} />
            </Create>
            <SearchWrapper>
                <SearchBarWrapper>

                    <IconButton className='searchdiv'>
                        <SearchIcon className='Search' style={{ marginTop: "12px", marginLeft: "7px" }} />
                    </IconButton>

                    <form>
                        <input type="text" placeholder='Search' onChange={(e) => setInput(e.target.value)}></input>
                        <button type="submit" onClick={onSearchSubmit}></button>
                    </form>
                    <a href="/"><CancelIcon className='Cancel' /></a>
                </SearchBarWrapper>
                <DropContent className='Drop'>
                    <IdeasForYou>
                        <h4>Ideas for you</h4>
                        <div>1</div>
                        <div>2</div>
                    </IdeasForYou>
                    <Popular>
                        <h2>Popular in pinterest</h2>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                        <div>6</div>
                        <div>7</div>
                        <div>8</div>
                        <div>9</div>
                    </Popular>
                </DropContent>

            </SearchWrapper>

            <IconsWrap >

                <div>
                    <Link to="/nofity"><NotificationsIcon /></Link>
                </div>

                <div>
                    <Link to="/comments"><TextsmsRoundedIcon /></Link>
                </div>

                <div>
                    <Link to=""><AccountCircleIcon /></Link>
                </div>

                <div>
                    <Link to=""><KeyboardArrowDownIcon /></Link>
                </div>


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
    a {
        text-decoration:none;
        color:black;
        font-weight: 700;
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
    }

    form > input {
        background-color: transparent;
        border:none;
        width:100%;
        margin-left:5px;
        font-size:20px;
        outline:none;
        // border:1px solid blue;
    }
    
    form > button{
        display:none;
    }
    :hover .searchdiv{
        display:none;
    }
   
     :hover{
        padding:5px;
        border:5px solid #4a8ad4;
        .Drop{
            display:block;
        }
        .Cancel{
            display:block;
        }
       
    }

`;

const Iconsstyling = styled.div`
    display:flex;
    justify-content:space-evenly;
    padding:1px;
    width:15%;
    align-items:center;
    cursor:pointer;
    // border:1px solid red;
   
    
`;
const IconsWrap = styled(Iconsstyling)`
div{
// border:1px solid yellow;
display:flex;
height:48px;
min-width:48px;
align-items:center;
justify-content:space-evenly;
border-radius:50px;
cursor:pointer;
background-color: white;

:hover {
    background-color: #C0C0C0	;
}
}
`;
const IconButton = styled.div`

   
`;

const DropContent = styled.div`

`

const IdeasForYou = styled.div`
`;
const Popular = styled.div`
`;

export default Navbar

