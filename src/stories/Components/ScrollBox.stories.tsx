import Header from "@/components/Layout/Header";
import ScrollBox from "@/components/ScrollBox";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ScrollBox> = {
    title: "Component/ScrollBox",
    component: ScrollBox,
};

export default meta;

type Story = StoryObj<typeof ScrollBox>;

export const Primary: Story = {
    render: () => (
        <div style={{ height: "200vh" }}>
            <ScrollBox />
        </div>
    ),
};
