import React from "react";
import { UserLayout } from "../../layouts/userLayout";
import { SignForm } from "./SignForm";

export const SignInPage: React.FC = () => {
  return (
    <UserLayout>
      <SignForm />
    </UserLayout>
  );
};
