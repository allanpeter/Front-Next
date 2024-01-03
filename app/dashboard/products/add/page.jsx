import Styles from '@/app/ui/dashboard/products/addProducts/addProducts.module.css'


const addProductsPage = () => {
    return (
        <div className={Styles.container}>
            <form action="" className={Styles.container}>
                <input type="text" placeholder='title' name='title' require />
                <select name="cat" id="cat">
                    <option value="gerneral"> Choose a Category</option>
                    <option value="kitchen">Kitchen</option>
                    <option value="Phone">Phone</option>
                    <option value="Computer">Computer</option>
                </select>
                <input type="number" placeholder='price' name='price' />
            </form>
        </div>
    )
}
export default addProductsPage