import React, { useEffect, useState } from 'react';
import { ReactComponent as ExternalIcon } from '../assets/external.svg';

const Header = function () {
  const [path, setPath] = useState<string>('');

  useEffect(() => {
    setPath(window.location.pathname);
  }, [window.location.pathname]);

  return (
    <header>
      <div className="header__wr">
        <div className="header__wr_title">🐶 Dogs Catalog</div>
        <div className="header__wr_menu">
          <ul className="header__wr_menu_list">
            <li className="header__wr_menu_list_elem">
              <a href="/dogApp/" className={path === '/dogApp/' ? 'active' : ''}>Main</a>
              <a target="_blank" href="https://github.com/pvlvrmn/dogApp" className="header__wr_menu_list_elem_external" rel="noreferrer">
                Git
                <ExternalIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
