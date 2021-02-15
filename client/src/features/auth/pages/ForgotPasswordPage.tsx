import React from "react";
// Layouts
import { AuthLayout } from "../../../layout/authLayout/AuthLayout";
import ForgotPasswordComponent from "../components/forgotPasswordComponent";
// Containers

interface ForgotPasswordPageProps {}

export function ForgotPasswordPage({}: ForgotPasswordPageProps): JSX.Element {
  return (
    <AuthLayout>
      <ForgotPasswordComponent />
    </AuthLayout>
  );
}
