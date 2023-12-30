import Search from '@/app/ui/dashboard/search/search'
import styles from '@/app/ui/dashboard/users/users.module.css'

const UsersPage = () => {
    return (
      <div className={styles.container}>
        <div className={styles.top}>
          <Search placeholder="Search for a user..."/>
          <Link href='/dashbord/users/add'>
           <button className={styles.addButton}>Add New</button>
       </Link> 
       </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Creat</td>
              <td>Role</td>
              <td>Status</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> <div className={styles.user}>
                
                              </div></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
  
  export default UsersPage