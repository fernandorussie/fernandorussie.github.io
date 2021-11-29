import styled from 'styled-components'
import { Link } from 'gatsby'


export const Body = styled.div` 
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #6420ff;
`
export const Container = styled.div` 
    width: 100%;
    height:85vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
export const BoxLogo = styled.div` 
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 10px 0px;
`
export const Avatar = styled.img` 
    width:27vw;
`
export const BoxText = styled.div` 
    color: white;
`
export const Title = styled.h1` 
    font-size: 5vw;
`
export const SubTitle = styled.h3`
    width:80%;
    font-size:1.5vw;
`
export const NavMenu = styled.div` 
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
export const Btn = styled.a`  
    font-size: 1.5vw;
    font-weight: 900;
    text-transform: uppercase;
    text-decoration: none;
    color: white;
    cursor: pointer;
`
export const NavSocial = styled.div` 
    width: 30%;
    height: 7vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
export const BtnSocial = styled.img` 
    width: 30px;
    fill: white;
    cursor: pointer;
    transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
    &:hover{
        fill: green;
        background-color: white;
        margin-bottom: 7px;
    }
`