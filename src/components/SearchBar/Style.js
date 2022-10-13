import styled from 'styled-components';

export const SeachInput = styled.input`
  border-radius: 4px;
  width: 60%;
  padding: 8px;
  font-size: 16px;
  @media (max-width: 768px) {
    width: 100%
  }
`;

export const SeachButton = styled.button`
  border-radius: 4px;
  font-size: 16px;
  width: 10%;
  height: 40px;
  @media (max-width: 768px) {
    width: 100%
  }
`;
