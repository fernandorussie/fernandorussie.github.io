import styled from 'styled-components'
import { Link } from 'gatsby'

export const ContainerFooter =styled.div` 
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction:column;
    justify-content: space-around;
    align-items: center;
    background-color: #6F7FFB;
`
export const IntroFooter =styled.div` 
    width: 85%;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const BoxLogo =styled.div` 
    cursor: pointer;
`
export const Logo =styled.img` 
    width: 6vw;
`
export const NavFooter =styled.div` 
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
`
export const BoxBtn = styled.div` 
    width: 25%;
    min-width: 200px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;

    font-weight: 600;
`
export const StyledLink = styled(Link)` 
    display: flex;
    align-items: center;
    justify-content: center;
    font-size:1.5vw;
    font-weight: 900;
    text-transform: uppercase;
    color: white;
    margin-bottom: 5px;
    cursor: pointer;
    text-decoration: none;
`
export const ContentLink = styled.p` 
    font-size: 1.8vw;
`
export const BtnNav = styled.div` 
    display: flex;
    align-items: center;
    justify-content: center;
    font-size:1.5vw;
    font-weight: 900;
    text-transform: uppercase;
    color: white;
    margin-bottom: 5px;
    cursor: pointer;
`
export const BoxCopy =styled.div` 
    height: 7vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:1vw;
    color: white;
`