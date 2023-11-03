import React from "react";
import Link from "next/link";

type Props = {
    title: string;
}

export default function PageTitle(props: Props) {
  return (
    <div className="grad">
    <h1 className="page-title">{props.title}</h1>
</div>
  );
}