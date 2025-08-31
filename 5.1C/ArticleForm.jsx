import React, { useState } from "react";
import { Form, Button, Segment, Header } from "semantic-ui-react";

function ArticleForm() {
  const [form, setForm] = useState({
    title: "",
    abstract: "",
    content: "",
    tags: "",
  });

  const handleChange = (e, { name, value }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    alert("Article posted (not yet saved to DB)!");
  };

  return (
    <Segment>
      <Header as="h4">What do you want to ask or share</Header>
      <p>
        This section is designed based on the type of the post. It could be
        developed by conditional rendering. <b>For post an article</b>, the
        following section would be appeared.
      </p>

      <Form onSubmit={handleSubmit}>
        <Form.Input
          label="Title"
          placeholder="Enter a descriptive title"
          name="title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <Form.TextArea
          label="Abstract"
          placeholder="Enter a 1-paragraph abstract"
          name="abstract"
          value={form.abstract}
          onChange={handleChange}
        />
        <Form.TextArea
          label="Article Text"
          placeholder="Enter a 1-paragraph abstract"
          name="content"
          value={form.content}
          onChange={handleChange}
        />
        <Form.Input
          label="Tags"
          placeholder="Please add up to 3 tags to describe what your article is about e.g., Java"
          name="tags"
          value={form.tags}
          onChange={handleChange}
        />
        <Button type="submit" color="grey">
          Post
        </Button>
      </Form>
    </Segment>
  );
}

export default ArticleForm;
