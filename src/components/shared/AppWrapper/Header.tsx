import './../../../styles/sideNav.scss';
import { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link, useLocation } from 'react-router-dom';
import { PageMapping } from './../globalTypes';

export default function Header(): JSX.Element {
  const [open, setOpen] = useState(false);
  const currPath = useLocation().pathname;

  return (
    <header id="nav-container">
      <Menu
        isOpen={open}
        onStateChange={(state: { isOpen: boolean }) => {
          setOpen(state.isOpen);
        }}
      >
        {Array.from(PageMapping.keys()).map((path) =>
          PageMapping.get(path)?.hideHeader ? null : (
            <Link
              key={path}
              onClick={() => setOpen(false)}
              className="menu-link"
              to={path}
            >
              {PageMapping.get(path)?.pageName}
            </Link>
          )
        )}
      </Menu>
      <div id="nav-header">
        <h3>{PageMapping.get(currPath)?.pageName}</h3>
      </div>
    </header>
  );
}
