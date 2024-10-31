/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { ReactElement, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NewsCategories, getNews, newsCategories } from "@/lib/utils";
import { NewsApiResponse, Article } from '@/lib/types/NewsApiResponse';
import MainBodyCard from "@/components/main-body/MainBodyCard";
export default function MainBodyTab ({ articles, status, totalResults }: NewsApiResponse): ReactElement {
    const apiKey: string = "4321adb1f3fa4dadb9aeb6813c546f09";
    const [category, setCategory] = useState<NewsCategories>('general');
    const [pageSize, setPageSize] = useState<10 | 20 | 50>(10)
    const [page, setPage] = useState<number>(1);
    const [nOfpages, setNOfPages] = useState<number>(0);
    const [search, setSearch] = useState<string>('');
    //const [news,setNews]=useState<Article[]>(articles!);
    const [news, setNews] = useState<Article[]>([
        {
            urlToImage: "/img.png",
            author: "a",
            content: "Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem",
            description: "Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem",

            publishedAt: "s23234/2343",
            source: {
                id: "", name: "aaa"
            },
            title: "Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem",
            url: "",
        },
        {
            urlToImage: "/img.png",
            author: "a",
            content: "Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem",
            description: "Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem",

            publishedAt: "s23234/2343",
            source: {
                id: "", name: "aaa"
            },
            title: "Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem",
            url: "",
        },
        {
            urlToImage: "/img.png",
            author: "a",
            content: "Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem",
            description: "Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem",

            publishedAt: "s23234/2343",
            source: {
                id: "", name: "aaa"
            },
            title: "Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem",
            url: "",
        },
        {
            urlToImage: "/img.png",
            author: "a",
            content: "Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem",
            description: "Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem",

            publishedAt: "s23234/2343",
            source: {
                id: "", name: "aaa"
            },
            title: "Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem",
            url: "",
        },
        {
            urlToImage: "/img.png",
            author: "a",
            content: "Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem",
            description: "Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem",

            publishedAt: "s23234/2343",
            source: {
                id: "", name: "aaa"
            },
            title: "Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem",
            url: "",
        },
        {
            urlToImage: "/img.png",
            author: "a",
            content: "Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem",
            description: "Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem",

            publishedAt: "s23234/2343",
            source: {
                id: "", name: "aaa"
            },
            title: "Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem",
            url: "",
        },
        {
            urlToImage: "/img.png",
            author: "a",
            content: "Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem",
            description: "Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem",

            publishedAt: "s23234/2343",
            source: {
                id: "", name: "aaa"
            },
            title: "Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem",
            url: "",
        },
        {
            urlToImage: "/img.png",
            author: "a",
            content: "Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem",
            description: "Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem",

            publishedAt: "s23234/2343",
            source: {
                id: "", name: "aaa"
            },
            title: "Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem",
            url: "",
        },
        {
            urlToImage: "/img.png",
            author: "a",
            content: "Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem",
            description: "Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem",

            publishedAt: "s23234/2343",
            source: {
                id: "", name: "aaa"
            },
            title: "Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem Lorem Lorem Lorem  Lorem Lorem Lorem        LoremLoremLoremLorem",
            url: "",
        },
    ]);

    async function getSomeNews (q: boolean) {
        //   news =await getNews(category,pageSize,page,q? search : undefined,apiKey);
    }


    return (
        <Tabs defaultValue={newsCategories.Geral} className="w-full h-full space-y-10 p-6 max-md:flex max-md:flex-wrap">
            <TabsList className="max-md:flex max-md:flex-wrap">
                {Object.entries(newsCategories).map(([catName, catValue]: [string, NewsCategories]) => (
                    <TabsTrigger onClick={(): void => setCategory(catValue)} key={catValue} value={catValue}>{catName}</TabsTrigger>
                ))}
            </TabsList>

            <TabsContent value={category} className="flex w-full h-full  justify-center m-5 items-center ">
                <div className="flex flex-wrap w-full justify-left h-full  space-x-5 space-y-5   ">
                    {news?.map((article: Article, i: number): ReactElement => (
                        <MainBodyCard
                            title={article.title}
                            category={category}
                            description={article.description}
                            altText={article.url}
                            imgUrl={article.urlToImage}
                            key={i}
                            date={article.publishedAt}
                            newId={article.title}
                        />

                    ))}
                </div>
            </TabsContent>
        </Tabs>
    );
}

async function fetchNews (category: NewsCategories, pageSize: number, page: number, search?: string): Promise<NewsApiResponse> {
    try {
        const url: string = `https://newsapi.org/v2/top-headlines?apiKey=${ process.env.NEWSAPI_KEY }${ search ? `&q=${ search }` : '' }&category=${ category }&pageSize=${ pageSize }&page=${ page }`
        const result: Response = await fetch(url);
        return await result.json();
    } catch (error) {
        console.log(error);
    }

}