/* 
  What are Stories?
  Storybook stories represent the key states of each of your components.
*/

import Footer from "../components/Footer/Footer";

// default exports
export default {
  title: "Example/Footer",
  component: Footer,
};

const FooterTemplate = (args) => {
  return <Footer {...args}></Footer>;
};


// first state of the Footer comp
export const FooterLeft = FooterTemplate.bind({});
FooterLeft.args = {
  copyrightYear: "2023", // prop of a comp
  companyName: 'Cognizant', // prop of a comp
  alignment: "left", // prop of a comp
};

// second state of the Footer comp
export const FooterCenter = FooterTemplate.bind({});
FooterCenter.args = {
  copyrightYear: "2023", // prop of a comp
  companyName: "Cognizant", // prop of a comp
  alignment: "center", // prop of a comp
};

// third state of the Footer comp
export const FooterRight = FooterTemplate.bind({});
FooterRight.args = {
  copyrightYear: "2023", // prop of a comp
  companyName: "Cognizant", // prop of a comp
  alignment: "right", // prop of a comp
};
