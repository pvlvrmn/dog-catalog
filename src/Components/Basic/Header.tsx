import {useEffect, useState} from 'react';
// @ts-ignore
import {ReactComponent as ExternalIcon} from '../../assets/external.svg';

function getWindowSize() {
  const {innerWidth} = window;
  return innerWidth;
}

function Header() {
  const [winWidth, setWinWidth] = useState(getWindowSize());
  const [path, setPath] = useState<string>('');

  useEffect(() => {
    setPath(window.location.pathname);
  }, [window.location.pathname]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWinWidth(getWindowSize());
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <header>
      <div className="header__wr">
        <div className="header__title">🐶 
          { winWidth > 450 ? ' Dogs Catalog' : ' Dogs' }
        </div>
        <div className="header__menu">
          <ul className="header__list">
            <li className="header__elem">
              <a href="./" className={path === '/dog-catalog/' ? 'active' : ''}>Main</a>
              <a href="about" className={path === '/dog-catalog/about' ? 'active' : ''}>About</a>
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
