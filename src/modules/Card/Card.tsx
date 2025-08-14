import React from "react";
import { Card as ReactCard } from "primereact/card";
import type { CardProps } from "./card.types";

export const Card = (props: CardProps) => {
  const {
    title,
    subTitle,
    header,
    footer,
    className,
    children,
  } = props;

  return (
    <ReactCard
      title={title}
      subTitle={subTitle}
      footer={footer}
      header={header}
      className={className}
    >
      {children}
    </ReactCard>
  );
};
