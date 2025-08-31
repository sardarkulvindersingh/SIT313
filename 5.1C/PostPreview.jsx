import React from "react";
import { Card } from "semantic-ui-react";

function PostPreview({ postType, data }) {
  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>{data.title || "Untitled"}</Card.Header>
        <Card.Meta>{postType === "question" ? "Question" : "Article"}</Card.Meta>
        <Card.Description>
          {postType === "question" ? (
            <>
              <p>{data.details || "No details provided."}</p>
              <strong>Tags:</strong> {data.tags || "No tags"}
            </>
          ) : (
            <>
              <p>{data.content || "No content provided."}</p>
              <strong>Category:</strong> {data.category || "Uncategorized"}
            </>
          )}
        </Card.Description>
      </Card.Content>
    </Card>
  );
}

export default PostPreview;
