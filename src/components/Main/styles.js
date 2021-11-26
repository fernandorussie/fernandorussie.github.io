import styled from 'styled-components'

export const Main = styled.div` 
    background-color: #1A1A1A;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const ContainerAbout = styled.div` 
    width: 90%;
    height: 100vh;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding:30px;
`
export const BoxTitleAbout = styled.div`
    width: 50%;
    height: 15%;
    display: flex;
    align-items: center;
`
export const TitleAbout = styled.p` 
    font-size: 5vw;
    font-weight: 900;
    text-transform: uppercase;
    color: #6F7FFB;
`
export const BoxContentAbout = styled.div` 
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
export const BoxImageAbout = styled.div` 
    width: 40%;
    height: 80%;
    display: flex;
    align-items: center;
`
export const ImageAbout = styled.img` 
    width: 100%;
`
export const IntroAbout = styled.div` 
    width: 35%;
    height: 60%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
`
export const TextAbout = styled.div` 
    font-size: 2vw;
    text-align: justify;
    color: #6F7FFB;
`


export const ContainerProject = styled.div` 
    width: 90%;
    height: 100vh;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding:30px;
`
export const BoxTitleProject = styled.div`
    width: 70%;
    height: 15%;
    display: flex;
    align-items: center;
`
export const TitleMyProjects = styled.p` 
    font-size: 5vw;
    font-weight: 900;
    text-transform: uppercase;
    color: #6F7FFB;
`
export const BoxProject = styled.div` 
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
export const CardProject = styled.div` 
    width: 23vw;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    position:relative;
    border-radius:16px;
    overflow:hidden;
    box-shadow:  15px 15px 27px black, -15px -15px 27px black;
    transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);

    
`
export const Convertion = styled.div` 

`
export const Imagem = styled.div` 
    background-image: url(${props => props.back});
    background-position: center;
    background-size: cover;
    background-repeat:no-repeat;
    width: 100%;
    height: 60%;
    padding:1px 32px;
    position:Absolute;
    top:0px;
    transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
    
    ${CardProject}:hover & {
       height:100%;
    }
`
export const Discription = styled.div` 
    background-color: #FAFAFC;
    height: 40%;
    width: 100%;
    position:absolute;
    bottom:0px;
    transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
    padding: 8px 16px;
    text-align:center;

    ${CardProject}:hover & {
        height:0px;
        padding:0px 16px;
    }
`