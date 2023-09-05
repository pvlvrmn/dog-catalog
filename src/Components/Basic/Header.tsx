import React, { useEffect, useState } from 'react';
import { ReactComponent as ExternalIcon } from '../../assets/external.svg';

function Header() {
  const [path, setPath] = useState<string>('');

  useEffect(() => {
    setPath(window.location.pathname);
  }, [window.location.pathname]);

  return (
    <header>
      <div className="header__wr">
        <div className="header__title">🐶 Dogs Catalog</div>
        <div className="header__menu">
          <ul className="header__list">
            <li className="header__elem">
              <a href="/dog-app/" className={path === '/dog-app/' ? 'active' : ''}>Main</a>
              <a href="/dog-app/about" className={path === '/dog-app/about' ? 'active' : ''}>About</a>
              <a target="_blank" href="https://github.com/pvlvrmn/dog-app" className="header__external-link" rel="noreferrer">
                Git
                <ExternalIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
