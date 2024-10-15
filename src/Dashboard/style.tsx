import styled from "styled-components";

export const Btn = styled.button`
  background-color: #dd7a49;
  color: #fff;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
`;

export const Slide = styled.div`
  .slide-item {
    width: 80%;
    height: 300px;
    align-items: center;
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: #dd7a49 !important;
  }
`;
