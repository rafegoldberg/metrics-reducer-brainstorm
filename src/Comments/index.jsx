import React, { useContext } from "react";
import { ContextState } from "../Context";

import "./style.scss";

const Comment = ({ email, ...c }) => (
  <li className="Comments-item">
    <small>
      <b>
        <a href={`mailto:${email}`}>{email}</a> left a comment on post{" "}
        <small>
          <code>{c.postId}</code>
        </small>
        :
      </b>
      <p>{c.body}</p>
    </small>
  </li>
);

const Comments = () => {
  const { state } = useContext(ContextState);
  const { comments } = state?.data || {};
  if (!comments) return null;
  return (
    <React.Fragment>
      <b className="CommentsTitle">Comments:</b>
      <ul className="Comments">
        {comments.map((c) => (
          <Comment key={`comment-${c.id}`} {...c} />
        ))}
      </ul>
    </React.Fragment>
  );
};

export default Comments;
