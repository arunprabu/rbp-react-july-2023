import Button from "./Button";

export default {
  title: "Button",
  component: Button,
};

// Let's fix the following warning in storybook
// This story is not configured to handle controls. Learn how to add controls
const Template = (args) => <Button {...args} />;

// you must have atleast one story export 
// at least one named export you should have

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Click Me"
};
