'use client';
import Layout from "@/app/components/Layout";
import { useState, useEffect } from "react";
import Loading from "@/app/components/Loading";

interface Post {
    id: number,
    title: string,
    body: string
}

const Articles = () => {
    const [data, setData] = useState<Post[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/posts');
                if (res.ok) {
                    const apiData = await res.json();
                    setData(apiData);
                } else {
                    console.log("Failed to fetch data");
                }
            } catch (error) {
                console.log("Error: ", error)
            }
        }
        fetchData();
    }, [])

    return (
        <Layout>
            <div>
                {data ? (
                    <pre>{data.map((post) => {
                        return <div className="post" key={post.id}>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                    })}</pre>
                ) : (
                    <Loading />
                )}
            </div>
        </Layout>
    );
}

export default Articles;