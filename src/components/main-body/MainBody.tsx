import React, { ReactElement } from "react";
import MainBodyTab from "@/components/main-body/MainBodyTab";
import { NewsApiResponse } from "@/lib/types/NewsApiResponse";
import { getNews } from "@/lib/utils";
import Pagination from "../Pagination";

export default async function MainBody (): Promise<ReactElement> {
    const news:NewsApiResponse=await getNews('general',26,1);
    return (
        <div className="w-[77%]  h-full flex flex-col border-2 border-green-600 max-md:w-full">
            <div className="flex items-center w-full">
                <h2 className="ml-32 text-4xl font-bold">NOTÍCIAS</h2>
            </div>
            <MainBodyTab
             status={news.status}
              totalResults={news.totalResults ? news.totalResults :-1}
              articles={news.articles ? news.articles : []}
              />
              <Pagination/>
        </div>
    );
}