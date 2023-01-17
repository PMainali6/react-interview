import { useState } from "react";
import Button from "../Button/Button";
import SubComment from "../SubComment/SubComment";
import "./CommentItem.css";

export default function CommentItem({
  comment,
  handleDelete,
  handleSubCommentReply,
  parentId
}) {
  const [showSubComment, setShowSubComment] = useState(false);

  const newParentId =
    parentId === "" ? comment.id : [parentId, comment.id].join(".");

  function handleReply() {
    setShowSubComment(true);
  }

  function handleSubComment(subComment, parentId) {
    handleSubCommentReply(subComment, parentId);
    setShowSubComment(false);
  }

  function renderComment(comment) {
    return (
      <div>
        <div className="comment-item">
          <p className="comment">{comment.comment}</p>
          <div className="btn-list">
            <Button
              handleChange={() => handleDelete(parentId, comment.id)}
              variant="danger"
            >
              DELETE
            </Button>
            <Button handleChange={handleReply} variant="secondary">
              REPLY
            </Button>
          </div>
        </div>

        {!!showSubComment && (
          <SubComment
            handleSubCommentReply={(subComment, parentId) =>
              handleSubComment(subComment, parentId)
            }
            parentId={newParentId}
          />
        )}
      </div>
    );
  }

  if (comment.subComments.length > 0) {
    return (
      <>
        {renderComment(comment)}

        <div style={{ paddingLeft: "1.5rem" }}>
          {comment.subComments.map((subComment) => {
            return (
              <CommentItem
                key={subComment.id}
                comment={subComment}
                handleDelete={handleDelete}
                handleSubCommentReply={handleSubCommentReply}
                parentId={newParentId}
              />
            );
          })}
        </div>
      </>
    );
  } else {
    return <>{renderComment(comment)}</>;
  }
}
