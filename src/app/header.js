"use client"

import styles from './header.module.css'
import Image from 'next/image'
import React from 'react';

export default function Header({ children }) {
    const modalRef = React.createRef();

    function modalVisible(){
        let modal = modalRef.current;
        let modalVisible = modal.classList.contains(`${styles.modalVisible}`);


        if (modalVisible){
            modal.classList.remove(`${styles.modalVisible}`)
        }
        else{
            modal.classList.add(`${styles.modalVisible}`)
        }
    }

    function modalNotVisible(){
        let modal = modalRef.current;
        let modalVisible = modal.classList.contains(`${styles.modalVisible}`);

        if (modalVisible){
            modal.classList.remove(`${styles.modalVisible}`)
        }
    }

    return(
        <header className={styles.header}>
            <div className={styles.headerSymbol}>
                <svg width={32} height={32} fill="#fff" stroke="#fff" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"></path></svg>
                <p
                    className={styles.meetName}
                > <strong>M0DeST</strong> Meet</p>
            </div>
            <div className={styles.headerActions}>
                <div 
                    className={styles.userProfile}
                    onClick={modalVisible}
                >
                    <Image 
                        src="/profile.svg"
                        width={32}
                        height={32}
                        alt=''
                    />
                </div>
                <div
                    ref={modalRef}
                    className={styles.profileModal}
                >
                    <div
                        className={styles.profileModalWrapper}
                        onClick={modalNotVisible}
                    >

                    </div>
                    <ul
                        className={styles.profileModalBox}
                    >
                        <li>
                            <Image
                                src="/profilePic.svg"
                                width={32}
                                height={32}
                                alt=''
                            ></Image>
                            Alterar a foto de perfil
                        </li>     
                    </ul>
                </div>
            </div>
        </header>
    )
}