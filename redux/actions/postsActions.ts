import { ADD_COMMENT, ADD_POST, FETCH_POSTS, TOGGLE_REVEAL } from "../types";
import firebase from "../../config/config";
import { IPost } from "../../interfaces/posts";
import { v4 as uuidv4 } from "uuid";
const db = firebase.firestore();

export function fetchPosts() {
  const newState: IPost[] = [];
  return (dispatch: any) =>
    db
      .collection("posts")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          newState.push({
            id: doc.id,
            userId: doc.data().userid,
            fakeQuestion: doc.data().fakeQuestion,
            realQuestion: doc.data().realQuestion,
            isRevealed: false,
            comments: doc.data().comments,
          });
        });
      })
      .then((_) =>
        dispatch({
          type: FETCH_POSTS,
          payload: newState,
        })
      );
}

export function addPost(postData: any) {
  return (dispatch: any) =>
    db
      .collection("posts")
      .add({
        userId: "123",
        realQuestion: postData.realQuestion,
        fakeQuestion: postData.fakeQuestion,
        isRevealed: false,
        comments: [],
      })
      .then((docRef) =>
        dispatch({ type: ADD_POST, payload: { ...postData, id: docRef.id } })
      )
      .catch((err) => console.log(err));
}

export function addComment(commentData: any) {
  //   return (dispatch: any) =>
  //     setTimeout(
  //       () =>
  //         dispatch({
  //           type: ADD_COMMENT,
  //           payload: commentData,
  //         }),
  //       1000
  //     );

  return (dispatch: any) =>
    db
      .collection("posts")
      .doc(commentData.postId)
      .update({
        comments: firebase.firestore.FieldValue.arrayUnion({
          ...commentData,
          username: "ahd",
          id: uuidv4(),
        }),
      })
      .then(() => {
        db.collection("posts")
          .doc(commentData.postId)
          .get()
          .then((doc) =>
            dispatch({
              type: ADD_COMMENT,
              payload: {
                ...doc.data(),
                postId: commentData.postId,
              },
            })
          )
          .catch((er) => console.log(er));
      })
      .catch((err) => console.log(err));
}

export function toggleReveal(commentData: any) {
  return (dispatch: any) =>
    setTimeout(
      () => dispatch({ type: TOGGLE_REVEAL, payload: commentData }),
      1000
    );
}
