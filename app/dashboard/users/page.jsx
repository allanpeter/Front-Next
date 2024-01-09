import { fetchUsers } from '../../../lib/data'
import Pagination from '../../ui/dashboard/pagination/pagination'
import Search from '../../ui/dashboard/search/search'
import styles from '../../ui/dashboard/users/users.module.css'
import Image from 'next/image'
import Link from 'next/link'

const UsersPage = async () => {

  const users = await fetchUsers();
  console.log(users)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        <Link href='./users/add'>
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Creat At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => 
          <tr>
            <td> <div className={styles.user}>
              <Image src="/noavatar.png"
                alt=""
                width={40}
                height={40}
                className={styles.userImage} />
              {user.email}
            </div>
            </td>
            <td>{user.email}</td>
            <td>999999</td>
            <td>Admin</td>
            <td>active</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/users/test">
                  <button className={` ${styles.button} ${styles.view}`}>View</button>
                </Link>
                <button className={` ${styles.button} ${styles.delete}`}>Delete</button>
              </div>
            </td>
          </tr>
                )}
        </tbody>
      </table>
      <Pagination/>
    </div>
  )
}

export default UsersPage