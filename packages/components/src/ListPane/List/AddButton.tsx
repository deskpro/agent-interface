import * as React from "react";
import Icon from "../../elements/Icon/Icon";

export type AddButtonProps = {
  onClick: (e: React.SyntheticEvent) => void;
};

const ListAddButton: React.FC<AddButtonProps> = ({ children, onClick }) => (
  <button type="button" className="dp-Add-task dp-Tasks-list" onClick={onClick}>
    <Icon name="add-im" size={16} />
    {children}
  </button>
);

export default ListAddButton;
