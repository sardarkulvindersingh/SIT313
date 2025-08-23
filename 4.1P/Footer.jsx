import React from "react";
import { Grid, List, Segment, Icon } from "semantic-ui-react";

function Footer() {
  return (
    <Segment vertical style={{ padding: "3em 0em", backgroundColor: "#636262ef", color: "white" }}>
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={4}>
            <h4>Explore</h4>
            <List link inverted>
              <List.Item>Home</List.Item>
              <List.Item>Questions</List.Item>
              <List.Item>Articles</List.Item>
              <List.Item>Tutorials</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={4}>
            <h4>Support</h4>
            <List link inverted>
              <List.Item>FAQs</List.Item>
              <List.Item>Help</List.Item>
              <List.Item>Contact Us</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={4}>
            <h4>Stay Connected</h4>
            <Icon name="facebook" size="large" />
            <Icon name="twitter" size="large" />
            <Icon name="instagram" size="large" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        DEV@Deakin 2022 | Privacy Policy | Terms | Code of Conduct
      </div>
    </Segment>
  );
}

export default Footer;
