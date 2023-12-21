import React from "react";
import Styles from "./header.module.css";

interface HeaderProps {
    pageTitle: string;
}

export default function Header (props: HeaderProps){
    const { pageTitle } = props;
  
    return (
      <div className = {Styles.pageTitle}>
        <title>{ pageTitle }</title>
      </div>
    );
  };