import Header from "@/components/Layout/Header";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Header> = {
    title: "Layout/Header",
    component: Header,
};

export default meta;

type Story = StoryObj<typeof Header>;

export const ScrollHeader: Story = {
    render: () => (
        <div style={{ height: "200vh" }}>
            <p>스크롤을 내리면 헤더가 내려와요</p>
            <Header />
        </div>
    ),
};
