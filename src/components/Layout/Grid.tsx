import React from "react";
import style from "./Grid.module.scss";
import cn from "classnames";

const Grid = () => {
    return (
        <div className={style.container}>
            <div className={style.item}>Box 1</div>
            <div className={cn(style.item, style.item2)}>Box 2</div>
            <div className={style.item}>Box 3</div>
            <div className={style.item}>Box 4</div>
            <div className={cn(style.item, style.item3)}>Box 5</div>
            <div className={style.item}>Box 6</div>
            <div className={style.item}>Box 7</div>
            <div className={style.item}>Box 8</div>
            <div className={style.item}>Box 9</div>
            <div className={style.item}>Box 10</div>
        </div>
    );
};

export default Grid;
