import React from 'react';

import styles from './DeleteColTable.module.scss';

const DeleteColTable = () => {
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Block Height</th>
                    <th>Timestamp</th>
                    <th className={styles.delete}>Total TXs</th>
                    <th className={styles.delete}>Size</th>
                    <th>Block Hash</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>101091</td>
                    <td>yy.mm.dd hh.mm.ss</td>
                    <td className={styles.delete}>4</td>
                    <td className={styles.delete}>232421</td>
                    <td>0x39...2v3eb</td>
                </tr>
                <tr>
                    <td>101091</td>
                    <td>yy.mm.dd hh.mm.ss</td>
                    <td className={styles.delete}>4</td>
                    <td className={styles.delete}>232421</td>
                    <td>0x39...2v3eb</td>
                </tr>
                <tr>
                    <td>101091</td>
                    <td>yy.mm.dd hh.mm.ss</td>
                    <td className={styles.delete}>4</td>
                    <td className={styles.delete}>232421</td>
                    <td>0x39...2v3eb</td>
                </tr>
                <tr>
                    <td>101091</td>
                    <td>yy.mm.dd hh.mm.ss</td>
                    <td className={styles.delete}>4</td>
                    <td className={styles.delete}>232421</td>
                    <td>0x39...2v3eb</td>
                </tr>
            </tbody>
        </table>
    );
};

export default DeleteColTable;
