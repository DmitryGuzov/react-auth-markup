import React  from "react";
// Actions
// Models
// Components
import ForgotPasswordComponent from "../components/forgotPasswordComponent/forgotPasswordComponent";

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