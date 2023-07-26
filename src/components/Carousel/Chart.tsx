"use client";

import React, { useRef, useEffect, useState } from "react";

import * as echarts from "echarts";

import styles from "./Chart.module.scss";

import type { EChartsOption } from "echarts";
import useCheckBreakpoint from "@/hooks/useCheckBreakpoint";

const Chart = () => {
    const breakpoint = useCheckBreakpoint();

    const chartRef = useRef(null);
    const [options, setOptions] = useState<EChartsOption>({
        legend: [
            {
                orient: "horizontal",
                right: "auto",
                left: "auto",
                bottom: 0,
                icon: "circle",
            },
        ],
        series: [
            {
                type: "pie",
                data: [
                    {
                        value: 335,
                        name: "Direct Visit",
                    },
                    {
                        value: 234,
                        name: "Union Ad",
                    },
                    {
                        value: 1548,
                        name: "Search Engine",
                    },
                ],
            },
        ],
    });

    useEffect(() => {
        let observer: ResizeObserver;
        const currentChartRef = chartRef.current;

        if (currentChartRef) {
            const chart = echarts.init(currentChartRef);

            chart.setOption(options);

            observer = new ResizeObserver(() => {
                chart.resize();
            });

            observer.observe(currentChartRef);
        }

        return () => {
            if (currentChartRef) observer.unobserve(currentChartRef);
        };
    }, [options, chartRef]);

    useEffect(() => {
        if (breakpoint === "pc") {
            setOptions((prv) => ({
                ...prv,
                legend: [
                    {
                        orient: "vertical",
                        right: "90px",
                        bottom: "35%",
                        icon: "circle",
                    },
                ],
                series: [
                    {
                        type: "pie",
                        center: ["38%", "50%"],
                    },
                ],
            }));
        } else {
            setOptions((prv) => ({
                ...prv,
                legend: [
                    {
                        orient: "horizontal",
                        bottom: 0,
                        right: "center",
                        width: "300px",
                        icon: "circle",
                    },
                ],
                series: [
                    {
                        type: "pie",
                        center: ["50%", "50%"],
                    },
                ],
            }));
        }
    }, [breakpoint]);

    return <div ref={chartRef} className={styles.chart} />;
};

export default Chart;
