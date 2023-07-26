import Grid from "@/components/Layout/Grid";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Grid> = {
    title: "Layout/Grid",
    component: Grid,
};

export default meta;

type Story = StoryObj<typeof Grid>;

export const Primary: Story = {
    render: () => <Grid />,
};
