"use client";
import { useEffect, useState } from "react";
import { SimpleUser } from "@/models/user";
import { setLanguage } from "@/server-actions/serveractions";

export default function Lang({ user }: { user: SimpleUser }) {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLang] = useState(user.language);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setLanguage(user._id, language);
  }, [language]);

  return (
    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="flex items-center space-x-2"
        >
          <h1>Set Language</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 5.293a1 1 0 011.414 0L10 10.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {isOpen && (
          <div className="bg-white border border-gray-300 rounded-lg shadow-lg z-10 text-black">
            <ul>
              <li
                onClick={() => setLang("English")}
                className={`${language === "English" && "bg-kids"} px-4 py-2 hover:bg-gray-100 cursor-pointer font-bold`}
              >
                English
              </li>
              <li
                onClick={() => setLang("Hindi")}
                className={`${language === "Hindi" && "bg-kids"} px-4 py-2 hover:bg-gray-100 cursor-pointer font-bold`}
              >
                हिंदी
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
