import React from "react";
// Layouts
import { AuthLayout } from "../../../layout/authLayout/AuthLayout";
import ForgotPasswordContainer from "../containers/ForgotPasswordContainer";
// Containers

interface ForgotPasswordPageProps {}

export function ForgotPasswordPage({}: ForgotPasswordPageProps): JSX.Element {
  return (
    <AuthLayout>
      <ForgotPasswordContainer />
    </AuthLayout>
  );
}
