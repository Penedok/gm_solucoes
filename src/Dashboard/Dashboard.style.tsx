import styled from "styled-components";
import { Swiper, } from "swiper/react";

interface ButtonProps {
    backgroundColor?: string;
}

export const Container = styled.div`
  display: "flex";
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
`;

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
    width: 100%;
    height: 400px;
    display: flex;
    justify-content:  space-around;
    align-items: center;
    flex-direction: row

`
export const BannerDivTexto = styled.div`
    display: flex;
    width: 40%;
    height: 400px;
    justify-content: space-evenly;
    align-items: center;
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


;








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

export const SlideImg = styled.img`
    width:80%;
    height: 300px;
    align-items: center;
`


export const SliderButton = styled(Swiper)`
  & .swiper-button-prev,
  & .swiper-button-next {
    color: #dd7a49 !important;
  }
`;





;












