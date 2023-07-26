import Grid from "@/components/Layout/Grid";
import type { Meta, StoryObj } from "@storybook/react";

import DeleteColTable from "@/components/Table/DeleteColTable";
import ResponsiveTable from "@/components/Table/ResponsiveTable";
import ScrollTable from "@/components/Table/ScrollTable";

const meta: Meta<typeof Grid> = {
    title: "Component/Table",
    component: ScrollTable,
};

export default meta;

type Story = StoryObj<typeof ScrollTable>;

export const Scroll: Story = {
    render: () => <ScrollTable />,
};

export const Responsive: Story = {
    render: () => <ResponsiveTable />,
};

export const DeleteColumn: Story = {
    render: () => <DeleteColTable />,
};
