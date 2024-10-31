type Source = {
    id: string;
    name: string;
}

export type Article = {
    source: Source;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export type NewsApiResponse = {
    status: 'ok' | 'error';
    totalResults?: number;
    articles?: Article[];
    code?: number | string;
    message?: string;
}