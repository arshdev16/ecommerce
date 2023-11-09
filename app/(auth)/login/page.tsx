"use client";
import { signIn } from "next-auth/react";
import React from "react";

type Props = {};

const Login = (props: Props) => {
  return (
    <button
    onClick={(e) => {
          e.preventDefault()
          signIn('google')
        }}
    >
      Login
    </button>
  );
};

export default Login;
