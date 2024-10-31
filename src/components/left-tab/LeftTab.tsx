import React, { ReactElement } from "react";
import LeftTabElement from "./LeftTabElement";

export default function LeftTab (): ReactElement {

    return (
        <div className=" space-y-5 flex flex-col items-center max-md:w-[100%] w-[23%] h-full border-2 border-red-900 p-4">
            <div>
                <h2 className="font-bold text-xl">Mais Recente</h2>
            </div>
            <hr className="w-[90%] border-gray-600" />
            <div className="max-md:flex max-md:justify-center max-md:items-center max-md:w-full border-2 border-violet-700">
                <div className="flex flex-col justify-start items-start w-[90%] border-2 border-blue-400 space-y-2 max-md:flex-row max-md:w-full max-md:h-full max-md:space-y-3 max-md:flex-wrap max-md:space-x-5 max-md:justify-left">
                    <LeftTabElement title="Mugabe vendeu o amigo aaaaaaaaaaaaa" newsId="" time="8 mins" imageSrc="/img.png" />
                    <LeftTabElement title="Mugabe vendeu o amigo..." newsId="" time="18 mins" imageSrc="/img.png" />
                    <LeftTabElement title="Mugabe vendeu o amigo..." newsId="" time="8 mins" imageSrc="/img.png" />
                    <LeftTabElement title="Mugabe vendeu o amigo..." newsId="" time="8 mins" imageSrc="/img.png" />
                    <LeftTabElement title="Mugabe vendeu o amigo aaaaaaaaaaaaa" newsId="" time="8 mins" imageSrc="/img.png" />
                    <LeftTabElement title="Mugabe vendeu o amigo..." newsId="" time="18 mins" imageSrc="/img.png" />
                </div>
            </div>
        </div>
    );
}