import React from "react";
import Styles from "./header.module.css";

interface HeaderProps {
    pageTitle: string;
}

const Header: React.FC<HeaderProps> = (props) => {
    const { pageTitle } = props;
  
    return (
      <div className = {Styles.pageTitle}>
        <title>{ pageTitle }</title>
      </div>
    );
  };

export default Header;