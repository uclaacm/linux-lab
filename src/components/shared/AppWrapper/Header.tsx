import './../../../styles/sideNav.scss';
import { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link, useLocation } from 'react-router-dom';

interface stringMapping {
  [key: string]: string;
}

export default function Header(): JSX.Element {
  const [open, setOpen] = useState(false);
  const pathToTitleMapping: stringMapping = {
    '/': 'Home',
    '/stationary': 'Stationary',
    '/moving': 'Moving',
    '/creation': 'Creation',
    '/piping': 'Piping',
    '/searching': 'Searching',
    '/permissions': 'Permissions',
    '/game': 'Game',
  };
  const location = useLocation();

  return (
    <nav>
      <nav id="navContainer">
        <Menu
          isOpen={open}
          onStateChange={(state: { isOpen: boolean }) => {
            setOpen(state.isOpen);
          }}
        >
          <Link onClick={() => setOpen(false)} className="menuLink" to="/">
            Home
          </Link>
          <Link
            onClick={() => setOpen(false)}
            className="menuLink"
            to="/stationary"
          >
            Stationary
          </Link>
          <Link
            onClick={() => setOpen(false)}
            className="menuLink"
            to="/moving"
          >
            Moving
          </Link>
          <Link
            onClick={() => setOpen(false)}
            className="menuLink"
            to="/creation"
          >
            Creation
          </Link>
          <Link
            onClick={() => setOpen(false)}
            className="menuLink"
            to="/piping"
          >
            Piping
          </Link>
          <Link
            onClick={() => setOpen(false)}
            className="menuLink"
            to="/searching"
          >
            Searching
          </Link>
          <Link
            onClick={() => setOpen(false)}
            className="menuLink"
            to="/permissions"
          >
            Permissions
          </Link>
          <Link onClick={() => setOpen(false)} className="menuLink" to="/game">
            Game
          </Link>
        </Menu>
        <div id="navHeader">
          <h3>{pathToTitleMapping[location.pathname]}</h3>
        </div>
      </nav>
    </nav>
  );
}
