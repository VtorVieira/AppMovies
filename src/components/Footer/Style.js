import styled from 'styled-components';

export const DivPosition = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  background-color: #1976d2;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

export const TitlePosition = styled.div`
  color: azure;
  font-family: 'monospace';
  margin-left: 5%;
  margin-right: 3%;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
