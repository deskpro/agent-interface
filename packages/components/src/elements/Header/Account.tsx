import * as React from "react";
import { Reference, Popper, Manager } from "react-popper";
import Arrow from "../../Button/Arrow";
import Menu from "../Menu/Menu";

const Account: React.FC = () => {
  const [isOpen, setOpenState] = React.useState<boolean>(false);
  return (
    <Manager>
      <Reference>
        {({ ref }) => (
          <span className="dp-Account" ref={ref}>
            <span className="dp-Icon dp-IconPlane dp-ActionDropDown" />
            <Arrow isActive={isOpen} onClick={() => setOpenState(!isOpen)} />
          </span>
        )}
      </Reference>
      {isOpen && (
        <Popper
          placement="bottom-end"
          modifiers={{ offset: { offset: "0,15" } }}
        >
          {({ ref, style }) => (
            <Menu
              className="Menu--tick dp-YourAccount"
              title="Your account"
              menuRef={ref}
              style={style}
            >
              <Menu.MenuItem
                icon={<span className="dp-Icon dp-IconPlane" />}
                name="raven"
                text="Raven Paper"
              />
              <Menu.MenuItem
                icon={<span className="dp-Icon dp-IconPlaneOrange" />}
                name="raven-craft"
                text="Raven Paper Crafts"
              />
              <Menu.MenuItem
                icon={<span className="dp-Icon dp-IconPlaneViolet" />}
                name="raven-eu"
                text="RP Europe (Demo)"
              />
              <Menu.MenuItem icon="add-tab" name="add-tab" text="Add new" />
              <Menu.MenuItem
                icon={<span className="dp-Icon dp-IconNoteGray" />}
                name="knowledge"
                text="Knowledgebase article"
              />
            </Menu>
          )}
        </Popper>
      )}
    </Manager>
  );
};

export default Account;
