import React from "react";

interface LeftSideComponentProps {
  title: string;
  text: string;
  children: React.ReactChild | React.ReactChild[];
}

const LeftSideComponent = ({
  title,
  text,

  children,
}: LeftSideComponentProps): JSX.Element => {
  return (
    <>
      <div className="left-side">
        <h3 className="title">{title}</h3>
        <p className="text">{text}</p>
        {children}
      </div>
    </>
  );
};

export default LeftSideComponent;
