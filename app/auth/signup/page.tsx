"use client";

import React from "react";
import { AuthLayout } from "../authLayout";
import { AuthBottomBar } from "../authBottomBar";
import { SignUpForm } from "./signupForm";

const SignUp: React.FC = () => {
  return (
    <>
      <AuthLayout>
          <div className="w-full rounded-2xl flex flex-row">
            <SignUpForm />
          </div>
          <AuthBottomBar />
      </AuthLayout>
    </>
  );
};

export default SignUp;
