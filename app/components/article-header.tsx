import {ArticleMetadata} from "../lib/blog-posts";
import * as console from "console";

export default function ArticleHeader(meta: ArticleMetadata) {
    console.log('meta', meta);
    return (
        <>
            <h1 className="my-0">{meta.title}</h1>
            <p>{meta.publishedAt}</p>
        </>
    )
}