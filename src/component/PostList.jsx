import React, { useRef } from "react";
import PostItem from "./PostItem.jsx";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: "center" }}>Посты не найдены!!</h1>;
  }

  // Храним все ref'ы в объекте по id
  const nodeRefs = useRef({});

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => {
          // Если ref для поста ещё не создан — создаём
          if (!nodeRefs.current[post.id]) {
            nodeRefs.current[post.id] = React.createRef();
          }

          return (
            <CSSTransition
              key={post.id}
              timeout={500}
              classNames="post"
              nodeRef={nodeRefs.current[post.id]}
            >
              <PostItem
                ref={nodeRefs.current[post.id]}
                remove={remove}
                number={index + 1}
                post={post}
              />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
