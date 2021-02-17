import React  from "react";
// Actions
// Models
// Components
import ForgotPasswordComponent from "../components/forgotPasswordComponent/ForgotPasswordComponent";

export interface ForgotPasswordContainerProps {
}

function ForgotPasswordContainer({ }: ForgotPasswordContainerProps): JSX.Element {
 
  return (
    <>
      <ForgotPasswordComponent />
    </>
  );
}

export default ForgotPasswordContainer