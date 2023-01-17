import { useEffect, useState } from "react";
import { createCommentObj, getUpdatedObj, deleteCommentObj, saveToLocal, getFromLocal } from "../utils/utils";

export default function useComment() {
    const [commentInput, setCommentInput] = useState("");
    const [commentList, setCommentList] = useState([]);
  
    // fetching the comments from the local store
    useEffect(() => {
      const commentFromStore = getFromLocal("comment") || [];
      setCommentList(commentFromStore)
    }, [])
  
    function handleInputChange(e) {
      setCommentInput(e.target.value);
    }
  
    function handleDelete(parentId, id) {
      const p0 = performance.now();
      let updatedList = [];
      // if top comment is to be deleted
      if(parentId === "") {
        updatedList = commentList.filter(comment => comment.id !== id);
      } 
      // if nested comments are to be deleted
      else {
        updatedList = [...commentList];
        const parentList = parentId.split(".");
    
        const topParentId = parentList.shift();
        for (let i = 0; i < updatedList.length; i++) {
          if (updatedList[i].id === topParentId) {
            deleteCommentObj(updatedList[i], parentList, id);
          }
        }
      }
  
      setCommentList(updatedList);
      console.log("handleDelete: ", performance.now() - p0)
      saveToLocal(updatedList)
    }
  
    function handleAddComment() {
      // create a new comment obj
      const p0 = performance.now();
      const commentObj = createCommentObj(commentInput);
      setCommentList((commentList) => {
        const updatedList = [...commentList, commentObj];
        saveToLocal(updatedList)
        return updatedList;
      });
      setCommentInput("");
      console.log("handleAddComment: ", performance.now() - p0)

    }
  
    function handleSubCommentReply(subComment, parentId) {
      const p0 = performance.now();
      const updatedList = [...commentList];
      const parentList = parentId.split(".");
  
      const topParentId = parentList.shift();
      for (let i = 0; i < updatedList.length; i++) {
        if (updatedList[i].id === topParentId) {
          getUpdatedObj(updatedList[i], parentList, subComment);
        }
      }
  
      setCommentList(updatedList);
      console.log("handleSubCommentReply: ", performance.now() - p0)
      saveToLocal(updatedList)
    }

    return [commentList, commentInput, handleAddComment, handleDelete, handleInputChange, handleSubCommentReply];
}