import CommentForm from "./CommentForm";
import Comment from "./Comment"; 
import { Commentary } from "../modules/CheckReviews/CheckReviews";

export type AnnotationProps = {
  comments: Commentary[];
};

const Annotations = ({ comments }: AnnotationProps) => {
  return (
    <div>
      <h2 className="text-2xl">Annotations</h2>
      <p>Leave comments and annotations on the document.</p>
      <div className="grid gap-4">
        {comments.map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))}
      </div>
      <CommentForm />
    </div>
  );
};

export default Annotations;
