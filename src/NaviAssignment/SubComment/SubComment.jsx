import { useDeferredValue, useState } from "react";
import Button from "../Button/Button";
import CommentInput from "../CommentInput/CommentInput";
import "./SubComment.css";

export default function SubComment({ handleSubCommentReply, parentId }) {
  const [subComment, setSubComment] = useState("");
  const deferredValue = useDeferredValue(subComment);

  function handleInputChange(e) {
    setSubComment(e.target.value);
  }

  return (
    <div className="sub-comment">
      <CommentInput
        handleInputChange={handleInputChange}
        inputValue={subComment}
        placeholder={"Enter your reply"}
        classes={"sub-comment-input"}
      />

      {!!deferredValue.length && (
        <Button
          variant="normal"
          handleChange={() => handleSubCommentReply(subComment, parentId)}
        >
          Reply
        </Button>
      )}
    </div>
  );
}
