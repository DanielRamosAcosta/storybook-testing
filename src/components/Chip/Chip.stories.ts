import type { Meta, StoryObj } from "@storybook/react";
import { Chip, Color } from "./Chip.tsx";

const meta = {
  title: "Layout/Chip",
  component: Chip,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const purple: Story = {
  args: {
    label: "Purple",
    color: Color.PURPLE,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/GIyivL3AeBjiTc8zTtXzx5/Frontend-EOI?type=design&node-id=1-2217&mode=design&t=ZZG9mjhYElLEM0Fq-11",
    },
  },
};

export const green: Story = {
  args: {
    label: "Green",
    color: Color.GREEN,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/GIyivL3AeBjiTc8zTtXzx5/Frontend-EOI?type=design&node-id=1-2217&mode=design&t=ZZG9mjhYElLEM0Fq-11",
    },
  },
};

export const orange: Story = {
  args: {
    label: "Orange",
    color: Color.ORANGE,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/GIyivL3AeBjiTc8zTtXzx5/Frontend-EOI?type=design&node-id=1-2217&mode=design&t=ZZG9mjhYElLEM0Fq-11",
    },
  },
};

export const blue: Story = {
  args: {
    label: "Orange",
    color: Color.BLUE,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/GIyivL3AeBjiTc8zTtXzx5/Frontend-EOI?type=design&node-id=1-2217&mode=design&t=ZZG9mjhYElLEM0Fq-11",
    },
  },
};
