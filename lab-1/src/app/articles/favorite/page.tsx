'use client';
import {useState, useEffect, Suspense} from "react";
import ArticlesLayout from "@/app/components/ArticlesLayout";
import FavoriteArticle from "@/app/components/FavoriteArticle";
import Loading from "@/app/components/Loading";

const Favorite = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let posts = [];
        const fetchData = async () => {
            try {
                for (let i = 1; i < 4; i++) {
                    const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + i)
                    const apiData = await res.json();
                    posts.push(apiData);
                }
            } catch (error) {
                console.log(error);
            }
            setData(posts);
            setLoading(false)
        }

        fetchData();
    }, [])

    if (loading) {
        return <Loading />
    }

    return (
        <ArticlesLayout>
                <FavoriteArticle data={data} />
        </ArticlesLayout>
    );
}

export default Favorite;