import React from "react";
// Layouts
import { AuthLayout } from "../../../layout/authLayout/AuthLayout";
import SignUpComponent from "../components/signUpComponent";
// Containers

interface SignUpPageProps {}

export function SignUpPage({}: SignUpPageProps): JSX.Element {
  return (
    <AuthLayout>
      <SignUpComponent />
    </AuthLayout>
  );
}
