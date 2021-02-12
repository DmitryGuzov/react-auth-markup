import React from "react";
// Layouts
import { AuthLayout } from "../../../layout/authLayout/AuthLayout";
import SignInComponent from "../components/signInComponent";
// Containers

interface SignInPageProps {}

export function SignInPage({}: SignInPageProps): JSX.Element {
  return (
    <AuthLayout>
      <SignInComponent />
    </AuthLayout>
  );
}
