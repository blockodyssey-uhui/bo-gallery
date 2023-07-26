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

const Title = ({ text }: { text: string }) => (
    <p
        style={{
            fontSize: "20px",
            fontWeight: "bold",
            marginBottom: "15px",
        }}>
        {text}
    </p>
);

export const Scroll: Story = {
    render: () => (
        <>
            <Title text="화면의 넓이가 줄어들면 가로 스크롤이 생깁니다." />
            <ScrollTable />
        </>
    ),
};

export const Responsive: Story = {
    render: () => (
        <>
            <Title text="화면의 넓이가 줄어들면 테이블이 변형됩니다." />
            <ResponsiveTable />
        </>
    ),
};

export const DeleteColumn: Story = {
    render: () => (
        <>
            <Title text="화면의 넓이가 줄어들면 컬럼이 삭제됩니다." />
            <DeleteColTable />
        </>
    ),
};
