import React from "react";
import { Input, Button, Segment } from "semantic-ui-react";

function Newsletter() {
  return (
    <Segment textAlign="left">
      <h3>SIGN UP FOR OUR DAILY INSIDER</h3>
      <Input
        action={<Button color="red">Subscribe</Button>}
        placeholder="Enter your email"
      />
    </Segment>
  );
}

export default Newsletter;
