import Carousel from "@/components/Carousel/Carousel";
import type { Meta, StoryObj } from "@storybook/react";
import Image from "next/image";

const meta: Meta<typeof Carousel> = {
    title: "Component/Carousel",
    component: Carousel,
};

export default meta;

type Story = StoryObj<typeof Carousel>;

export const Primary: Story = {
    render: () => (
        <div style={{ height: "400px" }}>
            <Carousel />
        </div>
    ),
};
