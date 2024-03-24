import Loading from "@/app/components/Loading";
import {Suspense} from "react";

// @ts-ignore
const FavoriteArticle = (props) => {
    return (
        <Suspense fallback={<Loading />}>
        <div>
                <pre>
                    <div className="post" key={props.id}>
                        <h2>{props.title}</h2>
                        <p>{props.body}</p>
                    </div>
                </pre>
        </div>
        </Suspense>
    );
}

export default FavoriteArticle;