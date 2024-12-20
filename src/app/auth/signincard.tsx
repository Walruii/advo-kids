"use client";
import { K } from "@/util/constants";
import { signIn } from "next-auth/react";
import Image from "next/image";

interface CardProps {
  auth: string;
}

export default function Card({ auth }: CardProps) {
  return (
    <div className="">
      <button
        className="bg-yellow-400 pr-4 mt-5 rounded-lg shadow shadow-gray-500 text-white hover:bg-yellow-500"
        onClick={() =>
          signIn(auth.toLowerCase(), { callbackUrl: K.Links.Quiz })
        }
        role="button"
      >
        <Image
          src={`/${auth.toLowerCase()}.png`}
          height="64"
          width="64"
          alt=""
          className="inline mr-2"
        />
        Sign In with {auth}
      </button>
    </div>
  );
}
