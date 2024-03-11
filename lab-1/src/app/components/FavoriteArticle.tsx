import Loading from "@/app/components/Loading";

const FavoriteArticle = (props) => {
    return (
        <div>
            {props.data ? (
                <div>
                {props.data.map((post) => {
                    return <div className="post" key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                })}
                </div>
            ) : <Loading />}
        </div>
    );
}

export default FavoriteArticle;