import React, { useEffect } from "react";
import Button from "../Button/Button";
import CommentInput from "../CommentInput/CommentInput";
import CommentItem from "../CommentItem/CommentItem";
import useComment from "./useComment";
import "./CommentWidget.css";

export default function CommentWidget() {
 const [commentList, commentInput, handleAddComment, handleDelete, handleInputChange, handleSubCommentReply] = useComment();

  return (
    <main>
      <h1 className="title">Comment Widget</h1>

      <div className="comment-container">
        <CommentInput
          handleInputChange={handleInputChange}
          inputValue={commentInput}
          placeholder={"Enter a comment"}
          classes={"comment-input"}
        />

        <Button variant="primary" handleChange={handleAddComment}>
          ADD COMMENT
        </Button>
      </div>

      {!!commentList.length && (
        <section>
          {commentList.map((commentObj) => (
            <CommentItem
              key={commentObj.id}
              comment={commentObj}
              handleDelete={handleDelete}
              handleSubCommentReply={handleSubCommentReply}
              parentId={""}
            />
          ))}
        </section>
      )}
    </main>
  );
}
