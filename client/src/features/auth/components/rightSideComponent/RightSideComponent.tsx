import React from "react";
 
import './RightSideComponent.scss'

import pubg from "../../../../assets/img/pubg.png";
import fortnite from "../../../../assets/img/fortnite.png";
import dota from "../../../../assets/img/dota.png";
import cs from "../../../../assets/img/cs.png";
import navi from "../../../../assets/img/navi.png";
import { Link } from "react-router-dom";

interface RightSideComponentProps {
  link: string;
}

const RightSideComponent = ({
  link
}: RightSideComponentProps): JSX.Element => {
  return (
    <>
      <div className="right-side">
          <div className="top-group">
            <h2 className="title">Natus Vincere —</h2>
            <span className="text">Online team management</span>
          </div>

          <div className="animation-block">
            <img className="pubg" src={pubg} alt="" />
            <img className="fortnite" src={fortnite} alt="" />
            <img className="dota" src={dota} alt="" />
            <img className="cs" src={cs} alt="" />
            <img className="navi" src={navi} alt="" />
          </div>
          <p className="link">
            I have an account! <Link to={link}> Click here</Link>
          </p>
        </div>
    </>
  );
};

export default RightSideComponent;
