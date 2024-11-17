import styled from "styled-components";
import { Swiper, } from "swiper/react";
import bannerImage from "../assets/banner_grafico.jpg";


interface ButtonProps {
  backgroundColor?: string;
}

export const Container = styled.div`
  display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const HeaderDiv = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;                                                 
    flex-direction: row;
    justify-content: center;
    background:#e0a68190
`
  ;

export const AreaDivHeader = styled.div`
    width: 90%;
    height:100px;
    display: flex;
    align-items: center;                                                 
    flex-direction: row;
    justify-content: space-between;;
`;

export const ItensHeader1 = styled.div`
    display: flex;
    align-items: center;

    
`;

export const ItensHeader2 = styled.div`
    width: 440px;
    display: flex;
    justify-content: space-between;;

`;

export const BannerDiv = styled.div`
  width: 80%;
  height: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-top:2.5em;
  margin-bottom:2em;
`
export const BannerDivTexto = styled.div`
  display: flex;
  width: 60%;
  height: 400px;
  justify-content: space-evenly;
  flex-direction: column;

  
   
`

export const BannerH2 = styled.h2`
  font-weight: 400;
  text-align: left;
  font-size: 45px;
   
`
export const BannerP = styled.p`
  text-align: left;
  font-weight: 400;
  font-size: 18px;
   
`
export const Button = styled.button<ButtonProps>`
  background-color: ${(props) => props.backgroundColor || '#dd7a49'};
  color: #fff;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #f3f3;
  }
`

export const CardContainer = styled.div`
width:100%;
display:flex;
justify-content:center;
height:300;
marginTop:20
  
`
export const CardCaixa = styled.div`
width:83%;
display:flex;
height:390px; 
justify-content:space-around;
align-items: center;

  
`
export const ItemCardDestaque = styled.div`
width:30%; 
display:flex;
height:300px;
background:#dd7a49;
border-radius:8px;
flex-direction:column;
justify-content:center;
align-items:center;
box-shadow: 10px 20px 0px 0 #000000;
  
`
export const ItemCard01 = styled.div`
width:30%; 
display:flex;
height:300px;
background:#f3f3f3;
border-radius:8px;
flex-direction:column;
justify-content:center;
align-items:center;
  
`

export const ItemCard02 = styled.div`
width:30%; 
display:flex;
height:300px;
background:#f3f3f3;
border-radius:8px;
flex-direction:column;
justify-content:center;
align-items:center;
  
`

















export const SlideImg = styled.img`
  width:80%;
  height: 450px;
  align-items: center;
`


export const SliderButton = styled(Swiper)`
  & .swiper-button-prev,
  & .swiper-button-next {
    color: #dd7a49 !important;
  }
`;

export const BannerDivIMG = styled.div`
  display: flex;
  background-image: url(${bannerImage});
  width: 40%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 400px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

export const PortifolioClienteContainer = styled.div`
width: 100%;
height: 210px;
display: flex;
margin-top:2em;
margin-bottom:2em;
justify-Content: center;



`;

export const GraficoSliderContainer = styled.div`
width: 80%;
height: 480px;
display: flex;
justify-content: center;
align-items: center;

`;


export const ModalContainer = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: #000;
z-Index: 100;

`;

export const ModalCaixa = styled.div`
position: absolute;
top: 10%;
left: 10%;
width: 80%;
height: 80%;
background: #000;
z-Index: 500;
padding: 20px;
display: flex;
justify-content:center;
align-items:center

`






;












