/* 
  What are Stories?
  Storybook stories represent the key states of each of your components.
*/

import Button from "../components/Button/Button";

// default exports
export default {
  title: 'Example/Button',
  component: Button
}

const ButtonTemplate = (args) => {
  return <Button {...args}></Button>;
}

// first state of the button comp
export const Primary = ButtonTemplate.bind({});
Primary.args = {
  label: "Click Me", // prop of a comp
  primary: true, // prop of a comp
  size: "small", // prop of a comp
};

// second state of the button comp
export const Secondary = ButtonTemplate.bind({});
Secondary.args = {
  label: "Click Me", // prop of a comp
  primary: false, // prop of a comp
  size: "small", // prop of a comp
};

// third state of the button comp
export const Large = ButtonTemplate.bind({});
Large.args = {
  label: "Click Me", // prop of a comp
  size: "large", // prop of a comp
  primary: true, // prop of a comp
};

// fourth state of the button comp
export const Small = ButtonTemplate.bind({});
Small.args = {
  label: "Click Me", // prop of a comp
  size: "small", // prop of a comp
  primary: true, // prop of a comp
};