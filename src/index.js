import React from "react";
import ReactDOM from "react-dom";
import { faker } from "@faker-js/faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import Message from "./Message";
import AddDocument from "./AddDocument";
import InformationPanel from "./InformationPanel";
import ContentContainer from "./ContentContainer";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Ultimate"
          commentText="Wow nice post!"
          timeAgo="Yesterday at 3:56pm"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Timileyin"
          commentText="You can do better man"
          timeAgo="Thursday at 6:26am"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="John"
          commentText="Nice blog post!"
          timeAgo="Today at 9:32am"
        />
      </ApprovalCard>

      <Message
        headText="Changes in service"
        bodyText="We just updated our privacy policy here to better service our customers"
      />

      <ContentContainer>
        <AddDocument />
      </ContentContainer>

      <ContentContainer>
        <InformationPanel />
      </ContentContainer>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
