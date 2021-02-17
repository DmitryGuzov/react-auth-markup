import React  from "react";
// Actions
// Models
// Components
import SignInComponent from "../components/signInComponent/SignInComponent";

export interface SignInContainerProps {
}

function SignInContainer({ }: SignInContainerProps): JSX.Element {
 
  return (
    <>
      <SignInComponent />
    </>
  );
}

export default SignInContainer