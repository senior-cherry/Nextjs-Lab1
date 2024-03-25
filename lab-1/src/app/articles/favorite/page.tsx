import FavoriteArticle from '../../components/FavoriteArticle';
import Layout from "@/app/components/Layout";
import ArticlesLayout from "@/app/components/ArticlesLayout";

const FavoriteArticlesPage = () => {
    return (
        <Layout>
            <ArticlesLayout>
                <div>
                    <FavoriteArticle articleId={1} />
                    <FavoriteArticle articleId={2} />
                    <FavoriteArticle articleId={3} />
                </div>
            </ArticlesLayout>
        </Layout>
    );
};

export default FavoriteArticlesPage;