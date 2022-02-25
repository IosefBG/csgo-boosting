import React from "react";
import Head from 'next/head'
import Link from "next/link";

function Invalid() {
  return (
    <>
      <Head>
        <title>Invalid Link</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="py-12 bg-l-2 dark:bg-d-2">
        <div className="min-w-screen min-h-screen flex items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full mx-auto rounded-lg bg-l-3 dark:bg-d-3 shadow-lg p-5 text-gray-700">
            <div className="mb-10">
              <h1 className="text-center font-bold text-xl uppercase text-black dark:text-white">
                This link is invalid. Please go back <Link href="/">home</Link>.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Invalid;
