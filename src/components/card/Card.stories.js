import { Card } from "./Card";

export default {
  title: "App/Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  cardQuestion: "Question",
  cardAnswer: "Answer",
  isBookmarked: true,
};
