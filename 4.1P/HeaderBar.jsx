import { Menu, Input, Button } from "semantic-ui-react";

function HeaderBar() {
  return (
    <Menu pointing secondary>
      <Menu.Item header>DEV@Deakin</Menu.Item>
      <Menu.Item><Input icon="search" placeholder="Search..." />
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item><Button>Post</Button>
        </Menu.Item>
        <Menu.Item><Button primary >Login </Button>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}

export default HeaderBar;
