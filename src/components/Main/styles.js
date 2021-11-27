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
    justify-content: space-evenly;
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
    cursor: pointer;
`
export const BoxContentAbout = styled.div` 
    height: 60%;
    display: flex;
    align-items: center;
    padding: 20px;
`
export const BoxImageAbout = styled.div` 
    width: 60%;
    height: 80%;
    display: flex;
    align-items: center;
    margin-right: 50px;
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
    border-bottom: solid 2px #6F7FFB;
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
    cursor: pointer;
    color: #6F7FFB;
`
export const BoxProject = styled.div` 
    min-height: 60vh;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
`
export const CardProject = styled.div` 
    position:relative;
    width: 400px;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius:16px;
    overflow:hidden;
    cursor: pointer;
    box-shadow:  15px 15px 27px black, -15px -15px 27px black;
    transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
    
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
`
export const Discription = styled.div` 
    position:absolute;
    bottom:0px;
    height: 40%;
    width: 100%;
    padding: 8px 16px;
    text-align:center;
    background-color: #FAFAFC;
    transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);

    ${CardProject}:hover & {
        height:0%;
        padding:0px 16px;
    }
`
export const Name = styled.h2` 
    font-size: 2vw;
    font-weight:900;
    text-transform: uppercase;
    margin:15px 0px;
`
export const Subtitle = styled.p` 
    font-size: 1.4vw;
    
    margin-bottom:15px;
`