import styled from 'styled-components';

export const DivUpcomming = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 3%;
  margin-left: 3%;
  margin-right: 3%;
  gap: 50px;
  margin-bottom: 3%;
`;

export const DivCard = styled.div`
  width: 18%;
  height: 18%;
  text-align: center;
  a {
    img {
      border-radius: 5px;
    }
  }
  &:hover {
    box-shadow: 1px 6px 6px 1px rgba(0,0,0,0.1);
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;