import React, { useState,useCallback } from 'react';
import styled from 'styled-components';
import { AiFillGithub,AiFillFacebook } from "react-icons/ai";
import { RiKakaoTalkFill } from "react-icons/ri";
import kakaoQr from '../img/kakaoqr.png'

const Qrwrap = styled.div`
    width:100%;
    height:100%;
    position:absolute;
    bottom:0;
    z-index:1000;
`;
const Qr = styled.div `
    position:absolute;
    width:30vw;
    min-width:300px;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    text-align:center;
    background:#fff;
    padding:80px 0;
    box-sizing:border-box;
    border-radius:30px;
    box-shadow:0px 1px 2px #666;

    & > b {
        width:100%;
        display:block;
        font-size:16px;
        border-top:1px solid #666;
        border-bottom:1px solid #666;
        color:#666;
        padding:10px;
        box-sizing:border-box;
        position:absolute;
        bottom:30px;
    }
`;


const QrwrapImg = styled.img`
    width:100px;
    height:100px;
    cursor: pointer;
    display:block;
    margin:0 auto;
    margin-bottom:50px;
`;
const FooterWrap = styled.footer`
    clear:both;
    width:100%;
    height:100px;
    padding:35px 0 0 0;
    box-sizing:border-box;
    font-size:12px;
    color:#666;
    text-align:center;
    text-transform:uppercase;
`;
const SnsLink = styled.article`
    width:100%;
    height:30px;
    margin: 0 auto;
    margin-bottom:10px;

`;
const SNS = {
    cursor :"pointer",
    marginRight:10,
    fontSize:32,
}
const SNSAtag = styled.a `
    color:#666;
`;

function Footer() {
    const [kakaoQROpen,setKakaoQRopen] = useState(false);

    const kakaoOpen = ()=> {
    setKakaoQRopen(!kakaoQROpen);
    }  
    console.log(kakaoQROpen)
    return(
        <>
        <FooterWrap>
        <SnsLink>
            <SNSAtag 
            href="https://github.com/kkwoncokr/"
            target="_blank">
            <AiFillGithub style={SNS}/>
            </SNSAtag>
            <SNSAtag href="https://www.facebook.com/profile.php?id=100015649083124"
            target="_blank">
            <AiFillFacebook style={SNS}/>
            </SNSAtag>
            <SNSAtag onClick={kakaoOpen}>
            
            <RiKakaoTalkFill style={SNS} cursor="pointer"/>
            </SNSAtag>
        </SnsLink>
            copylight © kangkyoungwon.
        </FooterWrap>
        {kakaoQROpen
        ?(
            <Qrwrap>
                <Qr>
                    <QrwrapImg src={kakaoQr} alt="kakao" onClick={kakaoOpen}/>
                    <b>QR코드를 누르면 사라집니다.</b>
                </Qr>
            </Qrwrap>
        )
        : null
        }
        </>
    );
}
export default Footer;