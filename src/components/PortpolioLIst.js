import React from 'react';
import styled from 'styled-components';
import Hwapyoungdong from '../img/hwapyoung-mockup2.png';
import Polic from '../img/polic-mockup2.png';
import Han from '../img/han-Mockup2.png';
import BangBang from '../img/bangbang-mockup2.png';
import StudyCode from '../img/study_code_mokup2.png';
import { Link } from 'react-router-dom';

const Popols = styled.div`
    text-align:center;
    float: left;
    box-sizing:border-box;
    cursor: pointer;
    @media all and (min-width:200px) {
        float:none;
        width:100%;
        height:300px;
        padding:50px 0 0 0;
    }
    @media all and (min-width:400px) {
        height:400px;
    }
    @media all and (min-width:600px) {
        float:left;
        width:50%;
    }
    @media all and (min-width:980px) {
        width:33.3%;
        height:320px;
        padding:0px 0 0 0;
        margin-bottom:150px;
    }
`;
const PopolP =styled.p`
    max-width:400px;
    background-color:${props => props.color || 'black'};
    color:#fff;
    display:inline-block;
    box-sizing:border-box;
    border-radius:10px;
    @media all and (min-width:200px) {
        width:70%;
        font-size:18px;
        padding:7px;
    }
    @media all and (min-width:600px) {
        width:90%;
        font-size:24px;
        padding:10px;
    }
`;
const Imgstyle = styled.img `
    width:100%;
    max-width:400px;
    min-width:230px;
    display: block;
    margin:0 auto;
    margin-bottom: 20px;
`;

function PP ({popol}) {
    return(
    <Popols>
        <Link 
        to={popol.href}
        target='_blank'
        >
        
            <Imgstyle
            src={popol.img} 
            alt={popol.name}/>
            <PopolP color = {popol.color}>{popol.name}</PopolP>
        </Link>
    </Popols>
    );
}

function PortpolioList () {
    const PopolList = [
        {
            id:1,
            img :Han,
            name : '한성백제박물관',
            color : '#A6704E',
            href : '/project/han/index.html'
        },
        {
            id:2,
            img : Polic,
            name : '폴리한의원',
            color : '#009BD2',
            href : '/project/polic/index.html'
        },
        {
            id:3,
            img : Hwapyoungdong,
            name : '화평동 왕냉면',
            color : '#dc6721',
            href : '/project/hwa/index.html'
        },
        {
            id:4,
            img : BangBang,
            name : '방방곡곡',
            color : '#7cc8fa',
            href : '/project/bang/index.html'
        },
        {
            id:5,
            img : StudyCode,
            name : '스터디코드',
            color : '#A72C3A',
            href : '/project/study/index.html'
        },
    ]
    return (
        <>
        {PopolList.map(popol =>(
            <PP key={popol.id} popol={popol}/>
        ))}
        </>
    );
}
export default PortpolioList;