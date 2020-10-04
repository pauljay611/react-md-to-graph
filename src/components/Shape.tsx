import React from "react";

interface Props {
  id: string;
  size: string;
  shape: JSX.Element;
}

const Shape: React.FC<Props> = (props) => {
  return (
    <symbol
      viewBox="0 0 100 100"
      id={props.id}
      key="0"
      width={props.size}
      height={props.size}
    >
      {props.shape}
    </symbol>
  );
};

export default Shape;
