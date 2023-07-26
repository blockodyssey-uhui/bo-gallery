import React from "react";

import Image from "next/image";

import style from "./Content.module.scss";

const Content = () => {
    return (
        <div className={style.container}>
            <Image src="/images/S9.png" alt="자산" height={250} width={300} />
            <div className={style.description}>
                <p>SWING S9 E-SCOOTER</p>
                <p>599999대</p>
            </div>
        </div>
    );
};

export default Content;
