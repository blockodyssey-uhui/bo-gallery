import React from 'react';

import styles from './ResponsiveTable.module.scss';

const ResponsiveTable = () => {
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Block Height</th>
                    <th>Timestamp</th>
                    <th>Total TXs</th>
                    <th>Size</th>
                    <th>Block Hash</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>101091</td>
                    <td>yy.mm.dd hh.mm.ss</td>
                    <td>4</td>
                    <td>232421</td>
                    <td>0x39...2v3eb</td>
                </tr>
                <tr>
                    <td>101091</td>
                    <td>yy.mm.dd hh.mm.ss</td>
                    <td>4</td>
                    <td>232421</td>
                    <td>0x39...2v3eb</td>
                </tr>
                <tr>
                    <td>101091</td>
                    <td>yy.mm.dd hh.mm.ss</td>
                    <td>4</td>
                    <td>232421</td>
                    <td>0x39...2v3eb</td>
                </tr>
                <tr>
                    <td>101091</td>
                    <td>yy.mm.dd hh.mm.ss</td>
                    <td>4</td>
                    <td>232421</td>
                    <td>0x39...2v3eb</td>
                </tr>
            </tbody>
        </table>
    );
};

export default ResponsiveTable;
