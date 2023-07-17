import instance from "./instance";
const user = JSON.parse(localStorage.getItem('user')!) || {}
export const getProducts = () => {
    return instance.get('/products');
}
const data = JSON.parse(localStorage.getItem('data')!) || {}
export const getCategory = () => {
    return instance.get('/categorys');
}
export const addProduct = (product: any) => {
    return instance.post('/products', product, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
}
export const deleteProduct = (id: any) => {
    return instance.post('/products', id, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
}