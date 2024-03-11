'use client';
import {useState, useEffect} from "react";
import ArticlesLayout from "@/app/components/ArticlesLayout";

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
            <p>{data.map((post) => {
                return <div className="post">
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            })}</p>
        </ArticlesLayout>
    );
}

export default Favorite;