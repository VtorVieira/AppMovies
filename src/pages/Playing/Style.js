import styled from 'styled-components';

export const DivDetails = styled.div`
  display: flex;
  margin-top: 3%;
  margin-bottom: 3%;
  gap: 40px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const DivImg = styled.div`
  margin-left: 3%;
  a {
    img {
      border-radius: 5px;
      width: 100%;
      height: 100%;
    }
  }
  @media (max-width: 768px) {
    width: 80%;
    height: 80%;
  }
`;

export const DivText = styled.div`
  background-color: #f1f5f9;
  line-height: 180%;
  width: 75%;
  border-radius: 5px;
  @media (max-width: 768px) {
    margin-bottom: 10%;
    width: 90%;
    height: 10%;
  }
`;

export const Text = styled.div`
  margin-left: 1%;
  margin-right: 1%;
  margin-top: 1%;
`;
