import styled from 'styled-components'
import { Link } from 'gatsby'

export const Main = styled.div` 
    background-color: #1A1A1A;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const ContainerAbout = styled.div` 
    width: 90%;
    min-height: 100vh;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    padding:30px;

    @media(max-width: 768px) {
        align-items: center;
    }
`
export const BoxTitleAbout = styled.div`
    width: 50%;
    height: 15%;
    display: flex;
    align-items: center;
`
export const TitleAbout = styled(Link)` 
    font-size: 5vw;
    font-weight: 900;
    font-family: fontBold;
    text-transform: uppercase;
    text-decoration: none;
    color: #6420ff;
    cursor: pointer;
    
    @media(max-width: 768px) {
        width: 100%;
        display: flex;
        justify-content: center;
    }
`
export const BoxContentAbout = styled.div` 
    width:100%;
    min-height: 60vh;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;

    @media(max-width: 768px) {
        flex-direction: column;
    }
`
export const BoxImageAbout = styled(Link)` 
    width: 50%;
    min-width: 300px;
    display: flex;
    align-items: center;

    @media(max-width: 768px) {
        min-width:70%;
    }
`
export const ImageAbout = styled.img` 
    width: 100%;
    cursor: pointer;

`
export const IntroAbout = styled.div` 
    width: 40%;
    height: 80%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    margin: 50px;
    padding: 20px;
    
    @media(max-width: 768px) {
        margin: 20px;
        padding: 0;
    }
`
export const TextAbout = styled.div` 
    font-size: 2vw;
    font-weight: 500;
    font-family: 'Roboto', sans-serif;
    text-align: justify;
    color: #6420ff;

    @media(max-width: 768px) {
        font-size: 2.5vw;
        text-align: left;
    }
`

export const ContainerProject = styled.div` 
    width: 90%;
    min-height: 100vh;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding:30px;
    border-bottom: solid 2px #6420ff;
`
export const BoxTitleProject = styled.div`
    width: 70%;
    height: 15%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media(max-width: 768px) {
        width: 100%;
    }
`
export const TitleMyProjects = styled.p` 
    font-size: 5vw;
    font-weight: 900;
    font-family: fontBold;
    text-transform: uppercase;
    cursor: pointer;
    color: #6420ff;
`
export const BoxProject = styled.div` 
    width:100%;
    min-height: 60vh;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
`
export const CardProject = styled(Link)` 
    position:relative;
    width: 25%;
    min-width: 300px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin:30px;
    padding:20px;
    text-decoration: none;
    color: black;
    border-radius:16px;
    overflow:hidden;
    cursor: pointer;
    box-shadow:  15px 15px 27px black, -15px -15px 27px black;
    transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
    
    @media(max-width: 768px) {
        min-width: 260px;
        height: 280px;
    }
`
export const Imagem = styled.div` 
    background-image: url(${props => props.back});
    background-position: center;
    background-size: cover;
    background-repeat:no-repeat;
    position:Absolute;
    top:0px;
    width: 100%;
    height: 60%;
    padding:16px 32px;
    transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
    
    ${CardProject}:hover & {
       height:100%;
    }

    @media(max-width: 768px) {
        height: 50%;
    }
`
export const Discription = styled.div` 
    position:absolute;
    bottom:0px;
    height: 40%;
    width: 100%;
    padding: 8px 16px;
    text-align:center;
    text-decoration: none;
    background-color: #FAFAFC;
    transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);

    ${CardProject}:hover & {
        height:0%;
        padding:0px 16px;
    }

    @media(max-width: 768px) {
        height: 50%;
    }
`
export const Name = styled.h2` 
    font-size: 2vw;
    font-weight:900;
    font-family: 'Roboto', sans-serif;;
    text-transform: uppercase;
    text-decoration: none;
    margin:15px 0px;

    @media(max-width: 768px) {
        font-size: 3vw;
    }
`
export const Subtitle = styled.p` 
    font-size: 1.2vw;
    font-weight: 300;
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
    margin-bottom:15px;

    @media(max-width: 768px) {
        font-size: 1.8vw;
    }
`