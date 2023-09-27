import styles from './comingPage.module.css'
import Image from 'next/image'

export default function ComingMain(){
    return (
        <main>
            <div className={styles.comingContent}>
                <div className={styles.contentLeftSide}>
                    <h1>
                        Simples e intuitivo.
                    </h1>
                    <p>
                        Para fazer seus meets sem burocracia.
                    </p>
                    <button className={styles.meetBtn}>
                        Crie um meet
                    </button>
                    <p>Ou digite o código de uma sala:</p>
                    <input className={styles.meetIpt}></input>
                    <button className={styles.meetIptSend}>
                        <svg fill="none" width={20} height={20} stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                        </svg>
                    </button>
                </div>
                
                <div className={styles.contentRightSide}>
                    <Image 
                        className={styles.meetVectorBg}
                        src="/meeting.svg"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
            
        </main>
    )
}