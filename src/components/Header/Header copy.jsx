import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { DivPosition, TitlePosition } from './Style';

function Header() {

  const navigate = useNavigate();

  function handleChange({ target }) {
    navigate(`/${target.value}`, { replace: true });
  }

  return (
    <header>
      <DivPosition>
        <TitlePosition>
          <Link to='/'>
            <h1>Desk Movies</h1>
          </Link>
        </TitlePosition>
        <div>
          <select name="filmes" id="filmes" onChange={handleChange}>
            <option value="">Filmes</option>
            <option value="playing">Em cartaz</option>
            <option value="upcomming">Próximas Estreias</option>
            <option value="popular">Popular</option>
          </select>
        </div>
      </DivPosition>
    </header >
  );
}

export default Header;
