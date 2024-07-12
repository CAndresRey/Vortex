import { Commentary } from "../modules/CheckReviews/CheckReviews";

export type CommentProps = {
  comment: Commentary;
}
const Comment = ({ comment }:CommentProps ) => {
  return (
    <div className="flex items-start gap-4">
      <picture className="w-10 h-10 ">
        <img
          className="rounded-full"
          src="https://generated.vusercontent.net/placeholder-user.jpg"
          alt={comment.user}
          style={{ width: "100%", height: "auto" }}
        />
      </picture>
      <div className="grid gap-1.5">
        <div className="flex items-center gap-2">
          <div className="font-semibold">{comment.user}</div>
          <div className="text-muted-foreground text-xs">{comment.time}</div>
        </div>
        <div>{comment.content}</div>
      </div>
    </div>
  );
};

export default Comment;
