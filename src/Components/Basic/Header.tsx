import { useEffect, useState } from 'react';
// @ts-ignore
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
              <a href="/dog-catalog/" className={path === '/dog-catalog/' ? 'active' : ''}>Main</a>
              <a href="/dog-catalog/about" className={path === '/dog-catalog/about' ? 'active' : ''}>About</a>
              <a target="_blank" href="https://github.com/pvlvrmn/dog-catalog" className="header__external-link" rel="noreferrer">
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
