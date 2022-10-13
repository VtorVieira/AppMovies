import styled from 'styled-components';

export const DivDetails = styled.div`
  display: flex;
  margin-top: 3%;
  gap: 50px;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const DivImg = styled.div`
  margin-left: 3%;
`;

export const DivText = styled.div`
  line-height: 30px;
  width: 65%;
`;

export const DivGenres = styled.div`
  display: flex;
  gap: 5px;
`;

export const DivCarousel = styled.div`
  margin-left: 3%;
  margin-right: 3%;
  @media (max-width: 768px) {
      display: none;
    }
`;

export const ParagrahPosition = styled.p`
  font-size: 26px;
  font-weight: bold;
  margin-top: 3%;
  margin-left: 3%;
  margin-bottom: 3%;
`;
