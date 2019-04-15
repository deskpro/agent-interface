import * as React from "react";
import classNames from "classnames";
import { CSSTransition } from "react-transition-group";

import Icon from "../Icon/Icon";
import "@deskpro/agent-interface-style/dist/components/dp-Header.css";

export type HeaderProps = {
  className?: string;
  searchKeyword?: string;
  onSearch: (keyword: string) => void;
  left: React.ReactNode;
  right: React.ReactNode;
};

const Header: React.FC<HeaderProps> = ({
  className,
  searchKeyword = "",
  onSearch,
  left,
  right
}) => {
  const [keyword, updateKeyword] = React.useState<string>(searchKeyword);
  React.useEffect(() => {
    updateKeyword(searchKeyword);
  }, [searchKeyword]);

  const [isSearchActive, setSearchState] = React.useState<boolean>(
    !!searchKeyword
  );

  const handleSearchSubmit = React.useCallback(
    (e: React.SyntheticEvent) => {
      e.preventDefault();
      onSearch(keyword);
    },
    [keyword, onSearch]
  );

  const handleSearchEdit = React.useCallback(
    e => {
      if (e.key === "Enter" || e.key === "Tab") {
        handleSearchSubmit(e);
      }
      updateKeyword(e.target.value);
    },
    [updateKeyword, handleSearchSubmit]
  );

  return (
    <div className={classNames("dp-Header", className)}>
      <CSSTransition in={isSearchActive} classNames="search" timeout={500}>
        <div className="dp-SearchBox">
          <form className="dp-SearchForm" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search..."
              value={keyword}
              onChange={handleSearchEdit}
              onFocus={() => setSearchState(true)}
              onBlur={() => {
                if (!keyword) {
                  setSearchState(false);
                }
              }}
            />
            <Icon name="find" size={18} />
          </form>
          {isSearchActive && (
            <ul className="dp-IconPanelList">
              <li className="dp-MenuBarItem">
                <Icon name="star" size={18} />
              </li>
              <li className="dp-MenuBarItem dp-Close">
                <Icon
                  name="close"
                  size={12}
                  onClick={() => setSearchState(false)}
                />
              </li>
            </ul>
          )}
        </div>
      </CSSTransition>
      <CSSTransition in={!isSearchActive} classNames="fade" timeout={500}>
        <div className="dp-HeaderControls">{left}</div>
      </CSSTransition>
      <div className="dp-HeaderControls is-right">{right}</div>
    </div>
  );
};

export default Header;
