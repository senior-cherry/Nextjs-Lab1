'use client';
import Layout from "@/app/components/Layout";
import { useState, useEffect } from "react";
import Loading from "@/app/components/Loading";

export default function Page({ params }: {params: {id: number}}) {
    const [data, setData] = useState(null);
    const [comment, setComment] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + params.id);
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

        const getComments = async () => {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/posts/1/comments");
                if (res.ok) {
                    const commentData = await res.json();
                    setComment(commentData);
                } else {
                    console.log("Failed to fetch data");
                }
            } catch (error) {
                console.log("Error: ", error)
            }
        }
        fetchData();
        getComments();
    }, [])

    return (
        <Layout>
            <div>
                {data ? (
                    <pre>
                        <div className="post" key={data.id}>
                            <h2>{data.title}</h2>
                            <p>{data.body}</p>
                        </div>
                    </pre>
                ) : (
                    <Loading />
                )}
            </div>
            <div>
                {comment ? (
                    <pre>
                        {comment.map((comment) => {
                            return <div className="comment" key={comment.id}>
                                <p>{comment.body}</p>
                            </div>
                        })}
                    </pre>
                ) : (
                    <Loading />
                )}
            </div>
        </Layout>
    );
}


