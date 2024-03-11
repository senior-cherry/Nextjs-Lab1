'use client';
import {useState, useEffect, Suspense} from "react";
import ArticlesLayout from "@/app/components/ArticlesLayout";
import FavoriteArticle from "@/app/components/FavoriteArticle";
import Loading from "@/app/components/Loading";

const Favorite = () => {
    const [data, setData] = useState([]);

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
        }

        fetchData();
    }, [])
    return (
        <ArticlesLayout>
            <Suspense fallback={<Loading />}>
                <FavoriteArticle data={data} />
            </Suspense>
        </ArticlesLayout>
    );
}

export default Favorite;