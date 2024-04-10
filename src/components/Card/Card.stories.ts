import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card.tsx";

const meta = {
  title: "Layout/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BaseCard: Story = {
  args: {
    title: "Data Fetching",
    description:
      "Make your React component async and await your data. Next.js supports both server and client data fetching.",
  },
};

export const WithImage: Story = {
  args: {
    title: "Built-in Optimizations",
    description:
      "Automatic Image, Font, and Script Optimizations for improved UX and Core Web Vitals.",
    image:
      "https://nextjs.org/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fnextjs%2Fspheres-light.png&w=640&q=100",
  },
};
