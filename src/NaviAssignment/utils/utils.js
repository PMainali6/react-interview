// create a brand new comment obj
  function createCommentObj(comment) {
      const date = new Date();
      const commentObj = {
        time: date.toLocaleTimeString("it-IT"),
        date: date.toDateString(),
        id: Date.now() + "",
        comment: comment.trim(),
        subComments: []
      };
      return commentObj;
  }
  
  // adding sub comment recursively
  function getUpdatedObj(obj, parentList, subComment) {
    if (parentList.length === 0) {
      // add new sub comment object here
      const newSubComment = createCommentObj(subComment);
      obj.subComments.push(newSubComment);
      return;
    } else {
      const parentId = parentList.shift();
      for (let i = 0; i < obj.subComments.length; i++) {
        if (obj.subComments[i].id === parentId) {
          return getUpdatedObj(obj.subComments[i], parentList, subComment);
        }
      }
    }
  }

  // deleting nested comment recursively
  function deleteCommentObj(obj, parentList, id) {
    // reached the final
    if(parentList.length === 0) {
      // reached the object whose subcomment needs to be fitlered
      obj.subComments = obj.subComments.filter(comment => comment.id !== id)
      return;
    } else {
      const parentId = parentList.shift();
      for (let i = 0; i < obj.subComments.length; i++) {
        if (obj.subComments[i].id === parentId) {
          return deleteCommentObj(obj.subComments[i], parentList, id);
        }
      }
    }
  }
  
  // helper fn to persist in local store
  function saveToLocal(newList) {
      localStorage.setItem("comment", JSON.stringify(newList));
  }

  // helper fn to fetch comment list during the initial page load
  function getFromLocal(key) {
    const data = localStorage.getItem(key) || null;
    return JSON.parse(data);
  }

  export { createCommentObj, getUpdatedObj, deleteCommentObj, saveToLocal, getFromLocal };
  