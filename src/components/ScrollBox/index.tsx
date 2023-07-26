'use client';

import React, { useEffect, useState } from 'react';

import cn from 'classnames';

import style from './ScrollBox.module.scss';

const ScrollBox = () => {
    const [scrollState, setScrollState] = useState('DOWN');
    const [tab, setTab] = useState(0);
    const [content, setContent] = useState('');

    const handleTab = (tab: number) => {
        setTab(tab);
    };

    useEffect(() => {
        if (tab === 0) {
            setContent(
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            );
        }
        if (tab === 1) {
            setContent(
                '국가는 청원에 대하여 심사할 의무를 진다. 국토와 자원은 국가의 보호를 받으며, 국가는 그 균형있는 개발과 이용을 위하여 필요한 계획을 수립한다. 정당은 법률이 정하는 바에 의하여 국가의 보호를 받으며, 국가는 법률이 정하는 바에 의하여 정당운영에 필요한 자금을 보조할 수 있다.대통령은 법률에서 구체적으로 범위를 정하여 위임받은 사항과 법률을 집행하기 위하여 필요한 사항에 관하여 대통령령을 발할 수 있다. 원장은 국회의 동의를 얻어 대통령이 임명하고, 그 임기는 4년으로 하며, 1차에 한하여 중임할 수 있다.'
            );
        }
    }, [tab]);

    useEffect(() => {
        const handleScroll = () => {
            const { scrollY } = window;
            setScrollState(() => (scrollY > 10 ? 'UP' : 'DOWN'));
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={cn(style.container, { [style.container__fold]: scrollState === 'DOWN' })}>
            <div className={style.title}>
                <ul className={style.tab}>
                    <li className={cn(style.tabMenu, { [style.tabMenu__active]: tab === 0 })}>
                        <button onClick={() => handleTab(0)}>Tab1</button>
                    </li>
                    <li className={cn(style.tabMenu, { [style.tabMenu__active]: tab === 1 })}>
                        <button onClick={() => handleTab(1)}>Tab2</button>
                    </li>
                </ul>
                <button className={cn(style.arrow, { [style.arrow__open]: scrollState === 'UP' })}>↓</button>
            </div>
            <div className={cn(style.content, { [style.content__open]: scrollState === 'UP' })}>{content}</div>
        </div>
    );
};

export default ScrollBox;
