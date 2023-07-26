"use client";

import React, { useEffect, useState } from "react";

import cn from "classnames";
import Link from "next/link";

import styles from "./Header.module.scss";
import { BiSearch } from "react-icons/bi";

const navList = [
    "책방",
    "원쁠딜",
    "리빙",
    "레시피",
    "장보기",
    "패션뷰티",
    "선물샵",
    "도착보장",
    "쇼핑라이브",
    "쇼핑",
    "홈",
    "뉴스",
    "연예",
    "숏폼",
    "경제",
    "스포츠",
    "우리동네",
    "지식+",
    "웹툰",
    "자동차",
    "추천 구독",
    "경제2",
    "스포츠2",
    "우리동네2",
    "지식+2",
    "웹툰2",
    "자동차2",
    "추천 구독2",
];

const Header = () => {
    const [scrollState, setScrollState] = useState("UP");

    useEffect(() => {
        const handleScroll = () => {
            const { scrollY } = window;
            setScrollState(() => (scrollY > 100 ? "DOWN" : "UP"));
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={cn(styles.container, { [styles.container__open]: scrollState === "DOWN" })}>
            <section className={styles.search}>
                <input placeholder="검색어를 입력해주세요." type="text" />
                <button>
                    <BiSearch size={40} color="#07bb7b" />
                </button>
            </section>
            <div className={styles.navWrap}>
                <nav className={styles.nav}>
                    <ul>
                        {navList.map((el) => (
                            <Link key={el} href="/" className={styles.navLink}>
                                {el}
                            </Link>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
