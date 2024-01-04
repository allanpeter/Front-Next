import Styles from '../../../ui/dashboard/products/addProducts/addProducts.module.css'


const addProductsPage = () => {
    return (
        <div className={Styles.container}>
            <form action="" className={Styles.form}>
                <input type="text" placeholder='title' name='title' require />
                <select name="cat" id="cat">
                    <option value="gerneral"> Choose a Category</option>
                    <option value="kitchen">Kitchen</option>
                    <option value="Phone">Phone</option>
                    <option value="Computer">Computer</option>
                </select>
                <input type="number" placeholder='price' name='price' />
                <input type="number" placeholder='stock' name='stock' />
                <input type="number" placeholder='installments' name='installments' />
                <textarea name="desc" id="desc" rows="16" placeholder='Description'></textarea>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
export default addProductsPage