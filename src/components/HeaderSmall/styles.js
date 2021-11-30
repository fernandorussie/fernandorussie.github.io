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
    height: 25vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`
export const Avatar = styled.img` 
    width:10vw;

    animation: bounce-in-top 1.1s 1.4s both;
    @keyframes bounce-in-top {
  0% {
    -webkit-transform: translateY(-500px);
            transform: translateY(-500px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    -webkit-transform: translateY(-65px);
            transform: translateY(-65px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  72% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  81% {
    -webkit-transform: translateY(-28px);
            transform: translateY(-28px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  90% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  95% {
    -webkit-transform: translateY(-8px);
            transform: translateY(-8px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
}
`
export const BoxLogo = styled.div` 
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 10px 0px;
`
export const NavMenu = styled.div` 
    width: 25vw;
    height: 7vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
export const BtnLink = styled(Link)` 
    font-size: 1.5vw;
    font-weight: 900;
    text-transform: uppercase;
    text-decoration: none;
    color: white;
    cursor: pointer;

    transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
    &:hover{
      transform: scale(1.02);
      margin-bottom: 7px;
    }
`
export const Btn = styled.a`  
    font-size: 1.5vw;
    font-weight: 900;
    text-transform: uppercase;
    text-decoration: none;
    color: white;
    cursor: pointer;

    transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
    &:hover{
      transform: scale(1.02);
      margin-bottom: 7px;
    }
`
export const NavSocial = styled.div` 
    width: 25vw;
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
        margin-bottom: 7px;
    }
`