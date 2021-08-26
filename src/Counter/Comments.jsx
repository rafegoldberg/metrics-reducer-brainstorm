import React, { useContext } from "react";
import { ContextState } from "../Context";

const Comment = ({ email, ...c }) => (
  <li className="Comments-item">
    <small>
      <code>{email}</code> left a comment on post <code>{c.postId}</code>:
      <p>{c.body}</p>
    </small>
  </li>
);

const Comments = () => {
  const { state } = useContext(ContextState);
  const { comments } = state?.data || {};
  if (!comments) return null;
  return (
    <ul className="Comments">
      {comments.map((c) => (
        <Comment {...c} />
      ))}
    </ul>
  );
};

export default Comments;
