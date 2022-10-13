import styled from 'styled-components';

export const StyledMain = styled.main`
  width: 100%;
  height: 75vh;
`;

export const MovieList = styled.div`
  display: flex;
  height: 50%;
  width: 90%;
  margin-left: 3%;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;

export const ContentPosition = styled.div`
  border-radius: 5px;
  text-align: center;
  height: 80%;
  width: 80%;
  a {
    img {
      border-radius: 5px;
    }
  }
  &:hover {
    box-shadow: 1px 6px 6px 6px rgba(0,0,0,0.07);
  }
`;

export const SearcPosition = styled.div`
  text-align: center;
  margin-top: 3%;
`;

export const Image = styled.img`
  border: 1px solid black;
  width: 1000px;
  height: 200px;
  @media (max-width: 768px) {
    height: 100px;
  }
`;

export const TextContent = styled.span`
  font-size: 15px;
  font-weight: bold;
  margin-top: 5%;
  margin-left: 3%;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ParagrahPosition = styled.p`
  font-size: 26px;
  font-weight: bold;
  margin-top: 5%;
  margin-left: 3%;
  @media (max-width: 768px) {
    margin-bottom: 6%;
    margin-top: 12%;
  }
`;
