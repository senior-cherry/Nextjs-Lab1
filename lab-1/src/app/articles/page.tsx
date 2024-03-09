'use client';
import Layout from "@/app/components/Layout";
import { useState, useEffect } from "react";
import Loading from "@/app/components/Loading";

const Articles = () => {
    const [data, setData] = useState(null);
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
                        return <div className="post">
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