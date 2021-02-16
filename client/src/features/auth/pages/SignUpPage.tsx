import React from "react";
// Layouts
import { AuthLayout } from "../../../layout/authLayout/AuthLayout";
import SignUpContainer from "../containers/SignUpContainer";
// Containers

interface SignUpPageProps {}

export function SignUpPage({}: SignUpPageProps): JSX.Element {
  return (
    <AuthLayout>
      <SignUpContainer />
    </AuthLayout>
  );
}
