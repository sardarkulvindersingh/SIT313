import React, { useState } from "react";
import { Form, Button, Segment, Header } from "semantic-ui-react";

function QuestionForm() {
  const [form, setForm] = useState({ title: "", details: "", tags: "" });

  const handleChange = (e, { name, value }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    alert("Question posted (not yet saved to DB)!");
  };

  return (
    <Segment>
      <Header as="h4">What do you want to ask or share</Header>
      <p>
        This section is designed based on the type of the post. It could be
        developed by conditional rendering. <b>For post a question</b>, the
        following section would be appeared.
      </p>

      <Form onSubmit={handleSubmit}>
        <Form.Input
          label="Title"
          placeholder="Start your question with how, what, why, etc."
          name="title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <Form.TextArea
          label="Describe your problem"
          name="details"
          value={form.details}
          onChange={handleChange}
        />
        <Form.Input
          label="Tags"
          placeholder="Please add up to 3 tags to describe what your question is about e.g., Java"
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

export default QuestionForm;
