import React, { useContext } from "react";
import StateContext from "../Context";

const Comment = ({ email }) => (
  <li>
    Comment from <code>{email}</code>
  </li>
);

const Comments = () => {
  const { state } = useContext(StateContext);
  return <ul>{state}</ul>;
};

export default Comments;
