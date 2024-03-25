'use client';
import { useState, useEffect } from 'react';
import Loading from "@/app/components/Loading";

interface Article {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const FavoriteArticle = ({ articleId }: { articleId: number }) => {
    const [articleData, setArticleData] = useState<Article | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${articleId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch article');
                }
                const article: Article = await response.json();
                setArticleData(article);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching article:', error);
            }
        };

        fetchArticle();

        return () => {
            setArticleData(null);
            setIsLoading(true);
        };
    }, [articleId]);

    return (
        <div>
            {isLoading ? (
               <Loading />
            ) : articleData && articleData.title ? (
                <div className="post">
                    <h2>{articleData.title}</h2>
                    <p>{articleData.body}</p>
                </div>
            ) : (
                <p>No data available</p>
            )}
        </div>
    );
};

export default FavoriteArticle;
