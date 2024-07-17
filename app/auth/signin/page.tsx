"use client";

import React from "react";
import { SignInForm } from "./signinForm";
import { AuthLayout } from "../authLayout";
import { SignInLeftSection } from "./signInLeftSection";
import { AuthBottomBar } from "../authBottomBar";

const SignIn: React.FC = () => {
  return (
    <>
      <AuthLayout>
        <div className="w-full rounded-2xl flex flex-row">
          <SignInLeftSection />
          <SignInForm />
        </div>
        <AuthBottomBar />
      </AuthLayout>
    </>
  );
};

export default SignIn;
