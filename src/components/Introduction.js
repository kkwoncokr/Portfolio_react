import React from 'react';
import me from '../img/me.jpg';
import styled from 'styled-components';
import ListCareer from './ListCareer';

const Introwrap = styled.section`
  width:80%;
  height:90vh;
  margin:0 auto;
  padding:100px 0 50px 0;
  box-sizing:border-box;
`;
const ImgMe = styled.article`
  width:150px;
  height:150px;
  border-radius:100px;
  background-image: url(${me});
  background-size:cover;
  background-position:top center;
  background-repeat:no-repeat;
  margin:0 auto;
  display:block;
  margin-bottom:50px;
`;
const Introtext = styled.article`
  text-align:center;
  letter-spacing:-1.5px;
  font-size:25px;
  font-weight:300;
  margin-bottom:50px;
`;
const Information = styled.article`
  width:100%;
  height:245px;
  text-align:center;
  padding:10px;
  box-sizing:border-box;
  color:#666;
  letter-spacing:-1.5px;
`;
const Career = styled.article`
  width:48%;
  float: left;
  @media all and (min-width:200px) {
      width:100%;
    }
  @media all and (min-width:600px) {
      width:48%;
      margin-right:2%;
    }
`;
const Skils = styled.article`
  float: left;
  @media all and (min-width:200px) {
      width:100%;
    }
  @media all and (min-width:600px) {
      width:48%;
    }

  `;
  const Title = {
    letterSpacing : '5px',
    fontSize : 20,
    padding: '15px 0',
    boxSizing : 'border-box',
    textAlign: 'center',
    marginBottom : 20,
    borderBottom : '2px solid #666'
  }
function Introduction () {
    return (
      <Introwrap>
        <ImgMe/>
        <Introtext>
          <p>강경원</p>
          <p>1996.05.25</p>
        </Introtext>
        <Information>
          <Career>
            <h2 style={Title}>CAREER</h2>
          <ListCareer/>
          </Career>
          <Skils>
           <h2 style={Title}>SKILLS</h2>
           <p>HTML, CSS, JAVASCRIPT, REACT</p>
          </Skils>
        </Information>
      </Introwrap>
    );
}
export default Introduction;