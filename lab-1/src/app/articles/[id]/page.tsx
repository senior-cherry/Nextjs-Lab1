'use client';
import Layout from "@/app/components/Layout";
import Loading from "@/app/components/Loading";
import { useEffect, useState } from "react";

interface Article {
    id: number,
    title: string,
    body: string
}

interface Comment {
    id: number,
    body: string
}

const ArticlePage = ({ params }: any) => {
    const [data, setData] = useState<Article | null>(null);
    const [comment, setComment] = useState<Comment[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
                if (res.ok) {
                    const apiData = await res.json();
                    setData(apiData);
                } else {
                    console.log("Failed to fetch data");
                }
            } catch (error) {
                console.log("Error: ", error);
            }
        };

        const getComments = async () => {
            try {
                const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}/comments`);
                if (res.ok) {
                    const commentData = await res.json();
                    setComment(commentData);
                } else {
                    console.log("Failed to fetch data");
                }
            } catch (error) {
                console.log("Error: ", error);
            }
        };

        fetchData();
        getComments();
    }, [params.id]);

    return (
        <Layout>
            <h2 className="title">Post</h2>
            <div>
                {data ? (
                    <pre>
            <div className="post">
              <h2>{data.title}</h2>
              <p>{data.body}</p>
            </div>
          </pre>
                ) : (
                    <Loading />
                )}
            </div>
            <h2 className="title">Comments</h2>
            <div>
                {comment ? (
                    <pre>
            {comment.map((comment) => (
                <div className="post" key={comment.id}>
                    <p>{comment.body}</p>
                </div>
            ))}
          </pre>
                ) : (
                    <Loading />
                )}
            </div>
        </Layout>
    );
};

export default ArticlePage;




