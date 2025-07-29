import React from "react";
import MyButton from "./UI/button/MyButton.jsx";
import { useNavigate } from "react-router-dom";

const PostItem = React.forwardRef((props, ref) => {
  const navigate = useNavigate();

  return (
    <div className="post" ref={ref}>
      <div className="post__content">
        <strong>
          {props.post.id}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => navigate(`/posts/${props.post.id}`)}>
          Открыть
        </MyButton>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
      </div>
    </div>
  );
});

export default PostItem;
