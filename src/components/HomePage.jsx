
import React from 'react'
import styled from "styled-components";
import Pin from './Pin';
import { Link } from 'react-router-dom';
const HomePage = (props) => {
  let {pins} = props;
 

  return (
    <Wrapper>
      <Container>
        
        {
        
        pins?.map((data,index)=>{
          let urls;
          let title = data.title;
          let isVedio=false;
         if(data.video===undefined){
          urls = data.image;
          isVedio=true;
          // console.log("img",urls);
         }else{
          urls = data.video;
          // console.log("video",urls);
         }
          return  <Pin  key={index} url={urls} title={title} isV={isVedio} save = {data.save} id={data.id}/>
        })
        
        }
        
      </Container>
    </Wrapper>
  )
};


const Wrapper = styled.div`
background-color:white;
display:flex;
width:100%;
height:100%;
margin-top:15px;
justify-content:center;


`;

const Container = styled.div`
background-color:white;
column-count:6;
height:100%;
column-gap:4px;
margin:0 auto;
margin: 60px auto;






`;

export default HomePage;
