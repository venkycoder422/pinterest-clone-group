
import React from 'react'
import styled from "styled-components";
import Pin from './Pin';
const HomePage = (props) => {
  let {pins} = props;

  return (
    <Wrapper>
      <Container>
        
        {
        
        pins?.map((data,index)=>{
          let urls = data.image;
          
          return <Pin key={index} url={urls}/>
        })
        
        }
        
      </Container>
    </Wrapper>
  )
};


const Wrapper = styled.div`
//background-color:pink;
display:flex;
width:100%;
height:100%;
margin-top:15px;
justify-content:center;
`;

const Container = styled.div`
//background-color:green;
column-count:6;
column-gap:5px;
margin:0 auto;
height:100%;


`;

export default HomePage;
