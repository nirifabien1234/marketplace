"use client";

import React from "react";
import { AuthLayout } from "../authLayout";
import { AuthBottomBar } from "../authBottomBar";
import { ResetForm } from "./resetForm";

const SignUp: React.FC = () => {
  return (
    <>
      <AuthLayout>
          <div className=" flex max-w-md w-full rounded-2xl justify-center items-center  ">
            <ResetForm />
          </div>
      </AuthLayout>
    </>
  );
};

export default SignUp;