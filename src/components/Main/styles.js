import styled from 'styled-components'


export const ContainerAbout = styled.div` 
    height: 90vh;
    background-color: red;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding:30px;
`
export const BoxTitleAbout = styled.div` 
    background-color: white;
    width: 50%;
    height: 15%;
    display: flex;
    align-items: center;
`
export const TitleAbout = styled.p` 
    font-size: 5vw;
`
export const BoxContentAbout = styled.div` 
    background-color: blue;
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
    background-color: green;
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
    background-color: yellow;
`
export const TextAbout = styled.div` 
    font-size: 2vw;
`


export const ContainerProject = styled.div` 
    height: 90vh;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding:30px;
    background-color: violet;
`
export const BoxTitleProject = styled.div` 
    background-color: white;
    width: 50%;
    height: 15%;
    display: flex;
    align-items: center;
`
export const TitleMyProjects = styled.p` 
    font-size: 5vw;
`
export const BoxProject = styled.div` 
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: green;
`
export const CardProject = styled.div` 
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    background-color: red;

    transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
`
export const TemplateProject = styled.img` 
    width: 350px;
`