import React from 'react'
import styled from "styled-components";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Pin = (props) => {
    console.log("gettinh", props)
    return (
        <Wrapper>
            <Container className='pin-container'>

                <Imagediv image={props.url}>
                    {/* <Create>
                        <a href='/'>Color</a>
                        <KeyboardArrowDownIcon style={{ marginTop: "7px" }} />
                    </Create><Save className='save' /> */}
                </Imagediv>

                {/* <img src={props.url} alt="pin"></img> */}
            </Container>
            
        </Wrapper >


    )
}


const Imagediv = styled.div`
display:flex;
background-image : url(${props => props.image});
height:200px;
width:120px;
justify-content:space-between;
// background:blue;
`;

const Wrapper = styled.div`
display:inline-block;
padding:8px;
`;

const Container = styled.div`
display:flex;
align-items: center;
box-sizing:border-box;
cursor:pointer;
width:236px;

img{
   
    display:flex;
    width:100%;
    cursor: zoom-in;
    border-radius:16px;
    object-fit:cover;
}
:hover save{
    display:block;
}

`;
const Create = styled.div`
    display:flex;
    width:60px;
    height:38px;
    align-items:center;
    border-radious:24px;
    cursor:pointer;
    border-radius:24px;
    color:white;
    a {
        text-decoration:none;
        color:white;
        font-weight: 700;
    }
`;

const Save = styled.button`
width:60px;
height:38px;
background-color:yellow;
border-radius:25px;
`

export default Pin;