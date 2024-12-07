import hindi from "@/hindi";
import Image from "next/image";
import Link from "next/link";

type props = {
  language: string;
  isCorrect: string;
  handleNextClick: () => void;
  setIsCorrect: (type: string) => void;
};

export default function IsCorrect({
  language,
  isCorrect,
  handleNextClick,
  setIsCorrect,
}: props) {
  return (
    <div>
      {isCorrect != "CLEAR" && (
        <div>
          <div className="bg-black opacity-70 z-10 h-screen w-screen fixed left-0 top-0"></div>
          <div
            className="
          container bg-kids z-20 fixed rounded-3xl p-8
          md:grid flex flex-col grid-cols-3 place-items-center
          font-sans font-extrabold"
          >
            {isCorrect === "YES" ? (
              <div className="row-span-2">
                <Image
                  width={100}
                  height={100}
                  src={`/correct.png`}
                  alt="Correct"
                  className="h-60 md:h-full md:w-full w-auto"
                />
                <h1 className="text-center font-sans font-extrabold text-xl  bg-white">
                  {language === "English" ? "C O R R E C T !" : hindi.right}
                </h1>
              </div>
            ) : (
              <div>
                <Image
                  width={100}
                  height={100}
                  src={`/incorrect.png`}
                  alt="Incorrect"
                  className="h-60 md:h-full md:w-full w-auto"
                />
                <h1 className="text-center font-sans font-extrabold text-xl  bg-white">
                  {language === "English" ? "I N C O R R E C T" : hindi.wrong}
                </h1>
              </div>
            )}
            <Link
              href="/quiz"
              className="bg-bluekid block text-center md:inline  text-white p-8 px-12 mt-5 text-4xl rounded-half shadow shadow-gray-500 hover:brightness-75 w-xl font-sans"
            >
              <button>{language === "English" ? "Menu" : hindi.menu}</button>
            </Link>
            {isCorrect === "YES" ? (
              <button
                onClick={handleNextClick}
                className="bg-green-500 block text-center md:inline text-white p-8 px-12 mt-5 text-4xl rounded-half shadow shadow-gray-500 hover:brightness-75 w-xl font-sans"
              >
                {language === "English" ? "Next Question" : hindi.nextQustion}
              </button>
            ) : (
              <button
                onClick={() => setIsCorrect("CLEAR")}
                className="bg-red-500 text-center md:inline text-white p-8 px-12 mt-5 text-4xl rounded-half shadow shadow-gray-500 hover:brightness-75 w-xl font-sans"
              >
                {language === "English" ? "Try Again" : hindi.tryAgain}
              </button>
            )}
            {isCorrect === "YES" && (
              <h1 className="col-start-2 col-span-2 text-4xl">
                {language === "English" ? "YOU WIN 300 COINS" : hindi.win}
              </h1>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
