import React from 'react';
import Avatar from 'assets/icons/avatar';
import { DevInfoType } from 'types/common';

import styles from './devInfoCard.module.scss';

export const DevInfoCard: React.FC<{ devInfoData: DevInfoType[] }> = ({ devInfoData }) => (
    <div className={styles.wrapper}>
        {devInfoData.map((data: DevInfoType) => (
            <div className={styles.card}>
                <div className={styles.banner}>
                    <div className={styles.svg}>
                        <Avatar />
                    </div>
                </div>

                <div className={styles.info}>
                    <h2>{data.Name}</h2>
                    <h4>{data.role}</h4>
                    <div className={styles.actions}>
                        <div className={styles.follow_info}>
                            <h3>
                                <a>
                                    <small>Experience (yr)</small>
                                    <span>{data.experience}+</span>
                                </a>
                            </h3>
                            <h3>
                                <a>
                                    <small>Projects</small>
                                    <span>{data.projects}+</span>
                                </a>
                            </h3>
                        </div>
                    </div>
                    <button type="button" className={styles.contact_button}>
                        Contact Us
                    </button>
                </div>
            </div>
        ))}
    </div>
);
