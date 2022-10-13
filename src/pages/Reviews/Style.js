import styled from 'styled-components';

export const DivReviews = styled.div`
  display: flex;
  margin-top: 3%;
  margin-left: 3%;
  margin-bottom: 3%;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const DivImg = styled.div`
  margin-left: 3%;
  margin-right: 3%;
`;

export const DivText = styled.div`
  line-height: 25px;
  width: 65%;
  @media (max-width: 768px) {
    width: 85%;
  }
`;

export const HrPosition = styled.hr`
  font-weight: bold;
  margin-top: 3%;
  margin-bottom: 3%;
`;
