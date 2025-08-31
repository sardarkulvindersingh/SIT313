import React, { useState } from "react";
import { Container, Header, Segment } from "semantic-ui-react";
import PostTypeSelector from "./PostTypeSelector";
import QuestionForm from "./QuestionForm";
import ArticleForm from "./ArticleForm";

function NewPostPage() {
  const [postType, setPostType] = useState(""); 

  return (
    <Container style={{ marginTop: "2em" }}>
      <Header as="h2" textAlign="left" color="grey">
        New Post
      </Header>

      {/* Select Post Type */}
      <Segment>
        <PostTypeSelector postType={postType} setPostType={setPostType} />
      </Segment>

      {/* Conditional Rendering */}
      {postType === "question" && <QuestionForm />}
      {postType === "article" && <ArticleForm />}
    </Container>
  );
}

export default NewPostPage;
