import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard>
        <CommentDetail
          author='Ayush'
          avatar={faker.image.avatar()}
          timeAgo='Today at 4:45PM'
          text='Learnt a lot'
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author='Aniket'
          avatar={faker.image.avatar()}
          timeAgo='Today at 2:00AM'
          text='You are awesome!!'
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author='Valey'
          avatar={faker.image.avatar()}
          timeAgo='Today at 1:45PM'
          text='You are a life saver!'
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author='Parvez'
          avatar={faker.image.avatar()}
          timeAgo='Yesterday at 5:00PM'
          text='I will leave a critical comment since everyone else is so flowery'
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
