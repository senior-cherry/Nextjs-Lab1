'use client';
import {useState, useEffect, Suspense} from "react";
import ArticlesLayout from "@/app/components/ArticlesLayout";
import FavoriteArticle from "@/app/components/FavoriteArticle";
import Loading from "@/app/components/Loading";
import Layout from "@/app/components/Layout";

const Favorite = () => {
    let apiData: any;
    let id;
    let title;
    let body;

    useEffect(() => {

        const fetchData = async () => {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/posts/1")
                apiData = await res.json();
                id = apiData.id;
                title = apiData.title;
                body = apiData.body;
                console.log(id)
                console.log(title);
                console.log(body);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, [])

    return (
        <Layout>
            <ArticlesLayout>
                    <FavoriteArticle id={id} title={title} body={body} />
            </ArticlesLayout>
        </Layout>
    );
}

export default Favorite;