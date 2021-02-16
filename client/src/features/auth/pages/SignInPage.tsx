import React from "react";
// Layouts
import { AuthLayout } from "../../../layout/authLayout/AuthLayout";
import SignInContainer from "../containers/SignInContainer";
// Containers

interface SignInPageProps {}

export function SignInPage({}: SignInPageProps): JSX.Element {
  return (
    <AuthLayout>
      <SignInContainer />
    </AuthLayout>
  );
}
