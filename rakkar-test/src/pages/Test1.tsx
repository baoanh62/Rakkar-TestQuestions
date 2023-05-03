import Link from "next/link";
import { Page } from "../types/page";
import React from "react";
import MainLayout from '../components/common/MainLayout'

const Test1: Page = () => {
    return (
      <div className="container">
        <div className="grid place-content-center min-h-screen">
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-4xl my-8">
              Welcome test 1
              <Link href="/Test1Page">Test 1</Link>
            </h1>
          </div>
        </div>
      </div>
    );
  };

export default Test1;

Test1.layout = MainLayout