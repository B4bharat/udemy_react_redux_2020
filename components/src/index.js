import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className='ui container comments'>
      <CommentDetail
        author='Ayush'
        avatar={faker.image.avatar()}
        timeAgo='Today at 4:45PM'
        text='Learnt a lot'
      />
      <CommentDetail
        author='Aniket'
        avatar={faker.image.avatar()}
        timeAgo='Today at 2:00AM'
        text='You are awesome!!'
      />
      <CommentDetail
        author='Valey'
        avatar={faker.image.avatar()}
        timeAgo='Today at 1:45PM'
        text='You are a life saver!'
      />
      <CommentDetail
        author='Parvez'
        avatar={faker.image.avatar()}
        timeAgo='Yesterday at 5:00PM'
        text='I will leave a critical comment since everyone else is so flowery'
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
