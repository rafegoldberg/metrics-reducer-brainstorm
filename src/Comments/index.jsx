import React, { useContext } from "react";
import { ContextState } from "../Context";

import "./style.scss";

const Comment = ({ email, ...c }) => (
  <li className="Comments-item">
    <small>
      <a href={`mailto:${email}`}>{email}</a> left a comment on post{" "}
      <small>
        <code>{c.postId}</code>
      </small>
      :<p>{c.body}</p>
    </small>
  </li>
);

const Comments = () => {
  const { state } = useContext(ContextState);
  const { comments } = state?.data || {};
  if (!comments) return null;
  return (
    <React.Fragment>
      <b>Comments</b>
      <ul className="Comments">
        {comments.map((c) => (
          <Comment {...c} />
        ))}
      </ul>
    </React.Fragment>
  );
};

export default Comments;
