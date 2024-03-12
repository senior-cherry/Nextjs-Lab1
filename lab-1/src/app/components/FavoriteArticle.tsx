const FavoriteArticle = (props) => {
    return (
        <div>
                <pre>
                {props.data.map((post) => {
                    return <div className="post" key={post.id}>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                })}
                </pre>
        </div>
    );
}

export default FavoriteArticle;