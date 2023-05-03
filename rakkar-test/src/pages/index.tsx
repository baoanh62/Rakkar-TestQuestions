import React from "react";
import type { Page } from '../types/page'
import MainLayout from '../components/common/MainLayout'

import Link from "next/link";

const HomePage: Page = () => {
  return (
    <div className="container">
      <div className="grid place-content-center min-h-screen">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl my-8">
            Welcome to NextJS Multiple Layouts Tutorial
          </h1>
        </div>
      </div>
    </div>
  );
};
export default HomePage;

HomePage.layout = MainLayout
