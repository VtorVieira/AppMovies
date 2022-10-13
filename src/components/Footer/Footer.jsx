import React from 'react';
import { DivPosition, TitlePosition } from './Style';

function Footer() {
  return (
    <footer>
      <DivPosition>
        <TitlePosition>
          <h2>DeskMovies</h2>
        </TitlePosition>
        <TitlePosition>
          <p>Created by Vitor Vieira</p>
        </TitlePosition>
        <TitlePosition>
          <p>Created with React, MUI and Styled Component</p>
        </TitlePosition>
      </DivPosition>
    </footer >
  );
}

export default Footer;
