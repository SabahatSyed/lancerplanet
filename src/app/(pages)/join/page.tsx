"use client";
import Link from "next/link";

import { Magic } from "magic-sdk";
import Web3 from "web3";
import { ethers } from "ethers";
import React, { useState } from "react";
import { MyURL } from "@/utils/constant";
import { check } from "drizzle-orm/pg-core";
import { useRouter } from "next/navigation";

async function CheckUserExists(email: string) {
  const res = await fetch(`/api/user?email=${email}`);
  const user = await res.json();
  if (user.status == "success") {
    return user;
  }
  return false;
}

async function createAccount(email: string, publicAddress: string) {
  const response = await fetch(`/api/user/register`, {
    method: "POST",
    body: JSON.stringify({ email, address: publicAddress }),
  });
  const result = await response.json();
  return result;
}

async function checkNewUser(u_id: number) {
  const res = await fetch(`/api/user/info?u_id=${u_id}`);
  const result = await res.json();
  if (result.status == "success") {
    return false;
  }
  return true;
}

function SignUp() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleLogin() {
    setLoading(true);

    const magic = new Magic(
      process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY ??
        "pk_live_7B848874FC801890",
      {
        network: process.env.NEXT_PUBLIC_ETH_NETWORK ?? "sepolia", // Ethereum testnet
      }
    );
    const provider = await magic.wallet.getProvider();

    await magic.wallet.connectWithUI();

    
    const walletInfo: any = await magic.wallet.getInfo();
    if(!walletInfo){
      await magic.user.requestInfoWithUI({
        scope: { email: "required" },
      });

    }
    const { email, publicAddress } = walletInfo;
    let user;
    user = await CheckUserExists(email);
    // will return user object if user exists else return false

    if (!user) {
      user = await createAccount(email, publicAddress);
    }
    console.log("usedr",user)
    localStorage.setItem("user", JSON.stringify(user.data));

    localStorage.setItem("log-in", JSON.stringify({ status: true }));

    const isNewUser = await checkNewUser(user.data.u_id);
    if (isNewUser) {
      router.push("/user-info-form");
    } else {
      router.push("/jobs");
    }
    setLoading(false);

    //Check if user is new_user then move it to gather user_info page.

    //Else move it to jobs page.
  }

  return (
    <>
      <div>
        <div className="pt-6 bg-white relative sm:rounded-lg flex flex-col lg:flex-row justify-center">
          {loading ? (
            <div className="absolute flex justify-center items-center bg-gray-800/50 w-full top-0 h-full z-50">
              <p className="text-white text-xl mr-2">Loading wallet...</p>

              <div role="status">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              </div>
            </div>
          ) : (
            <></>
          )}
          <div className="basis-1 lg:basis-1/2 flex flex-col justify-center items-center pt-6 lg:mt-0">
            <p className="w-[95%] lg:w-[80%] mx-auto text-4xl font-semibold text-h2clr -mb-12 z-30">
              Top <span className="text-indigo-500">1%</span> of the world{"'"}s
              leading talent pool 🤞
            </p>
            <video muted autoPlay={true} loop={true} className="z-10">
              <source src="/assets/videos/signup.mp4"></source>
            </video>
          </div>

          <div className="basis-1 lg:basis-1/2 ">
            <div className="mt-12 flex flex-col items-center">
              <p className="text-2xl xl:text-3xl font-extrabold">
                Join{" "}
                <Link href="/" className="text-indigo-500">
                  Lancer Planet
                </Link>
                .
              </p>
              <div className="w-full flex-1 mt-8">
                <div className="flex flex-col space-y-5 items-center">
                  <p className="w-[50%] mx-auto text-center">
                    We provides a new way to connect your{" "}
                    <span className="text-indigo-600">crypto wallet </span>
                    with Lancer Planet.
                  </p>
                  <button
                    onClick={handleLogin}
                    className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline cursor-default">
                    <div className="bg-white p-2 rounded-full">
                      <svg className="w-4" viewBox="0 0 533.5 544.3">
                        <path
                          d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                          fill="#4285f4"
                        />
                        <path
                          d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                          fill="#34a853"
                        />
                        <path
                          d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                          fill="#fbbc04"
                        />
                        <path
                          d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                          fill="#ea4335"
                        />
                      </svg>
                    </div>
                    <span className="ml-4">Login using Google</span>
                  </button>
                </div>

                <div className="my-12 border-b text-center w-[50%] mx-auto">
                  <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                    Join using your crypto wallet
                  </div>
                </div>

                <div className="mx-auto max-w-xs">
                  <button
                    onClick={handleLogin}
                    className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                    <svg
                      className="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2">
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-3">Connect Wallet</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SignUp;
