import styles from './transactions.module.css'
import Image from 'next/image'
const Transactions = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Lastest Transactions</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Status</td>
                        <td>Date</td>
                        <td>Amount</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> 
                            <div className={styles.user}>
                             <Image src="/noavatar.png"
                             alt=''
                             width={40}
                             height={40}
                             className={styles.userImage}/>
                             Mateus Felipe
                             </div>
                        </td>
                        <span className={`${styles.status} ${styles.done}`}> Done   </span> 
                        <td>27/12/2023</td>
                        <td>R$1.000,00</td>
                    </tr>
                    <tr>
                        <td> 
                        <div className={styles.user}>
                             <Image src="/noavatar.png"
                             alt=''
                             width={40}
                             height={40}
                             className={styles.userImage}/>
                             Allan Queixudo
                             </div>
                        </td>
                        <span className={`${styles.status} ${styles.cancelled}`}>Cancelled</span>
                        <td>27/12/2023</td>
                        <td>-R$6.000,00</td>
                    </tr>
                    <tr>
                        <td> 
                        <div className={styles.user}>
                             <Image src="/noavatar.png"
                             alt=''
                             width={40}
                             height={40}
                             className={styles.userImage}/>
                             New Mentiroso
                             </div>
                        </td>
                        <span className={`${styles.status} ${styles.pending}`}>Pending</span>
                        <td>27/12/2023</td>
                        <td>R$20.000,00</td>
                    </tr>
                    <tr>
                        <td> 
                        <div className={styles.user}>
                             <Image src="/noavatar.png"
                             alt=''
                             width={40}
                             height={40}
                             className={styles.userImage}/>
                             Cara de Cavalo
                             </div>
                        </td>
                        <span className={`${styles.status} ${styles.pending}`}>Pending</span>
                        <td>27/12/2023</td>
                        <td>R$999.999,00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Transactions