import { PostProps} from "@/types";
import {ThumbUp, ThumbDown} from "@mui/icons-material";

export default function FullPost({post}:{post: PostProps}){
    return (
        <div className= "p-4 m-2 bg-sky-100 flex flex-col items-center justify-center text-black">
            <h2>
                {post.title}
            </h2>
            <p className = "text-lg">{post.content}</p>
            <div className = "flex">
                <div className="p-1 m-1">
                    {post.upvotes}
                    <ThumbUp />
                </div>
                <div className="p-1 m-1">
                    {post.downvotes}
                    <ThumbDown/>
                </div>
            </div>
        </div>
    )
}