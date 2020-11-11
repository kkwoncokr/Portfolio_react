import React from 'react';
import styled from 'styled-components';
import PortpolioList from './PortpolioLIst';

const PortWrap = styled.section`
    width:100%;
    padding:150px 0 100px 0;
    box-sizing:border-box;
`;
const Portpolios = styled.article`
    width:80%;
    margin:0 auto;
`;
const PortpolioHead = styled.div`
    width:100%;
    font-size:30px;
    text-align:center;
    display:inline-block;
`;
const PortpolioH2 = styled.h2`
    text-align:center;
    display:inline-block;
    color:#666;
    letter-spacing:4px;
    font-weight:300;
    border-bottom: 1px solid #666;
    padding:10px 0;
    box-sizing:border-box;
    margin-bottom:50px;
    @media all and (min-width:200px) {
        font-size:24px;
    }
    @media all and (min-width:600px) {
        font-size:35px;
    }
`;


function Portpolio() {
    return(
        <PortWrap>
            <Portpolios>
                <PortpolioHead>
                    <PortpolioH2>PUBLISING</PortpolioH2>
                    </PortpolioHead>
                <PortpolioList/>
            </Portpolios>
        </PortWrap>
    );
}
export default Portpolio;