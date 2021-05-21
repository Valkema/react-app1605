import React, { useContext } from 'react';
import { AppContext } from '../../App';
function PageHeader(props) {
  const {
    menu: [, setIsMenuOpen],
  } = useContext(AppContext);
  return (
    <header>
      <button
        onClick={() => {
          setIsMenuOpen(true);
        }}
      >
        open menu
      </button>
    </header>
  );
}
export default PageHeader;