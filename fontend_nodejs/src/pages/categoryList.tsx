import { useEffect, useState } from "react";
import { getCategory } from "../api/product";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { IPcategory } from "../interfaces/category";

export const Category = () => {
    const [categories, setCategories] = useState<IPcategory[]>([]);
    useEffect(() => {
        async function fetchCategory() {
            const { data } = await getCategory();
            setCategories(data);

        }
        fetchCategory();
    }, []);
    const navigate = useNavigate()


    // const onSumbit = async (id: any) => {
    //     try {
    //         const response = await axios.delete(`http://localhost:8080/api/Categories/${id}`);
    //         console.log(response);

    //         alert("Bạn đã xóa thành công");
    //     } catch (error) {
    //         console.log(error);

    //     }
    // }
    // navigate("/admin");
    return <>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-[80px]">
            <Link to="add">
                <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-[60px] ml-[15px] mt-[10px]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg></Link>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">

                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {/* <th scope="col" className="px-6 py-3">
                            <span className="">Ảnh</span>
                        </th> */}
                        <th scope="col" className="px-6 py-3">
                            Tên sản phẩm
                        </th>
                        {/* <th scope="col" className="px-6 py-3">
                            Số lượng
                        </th> */}

                        {/* <th scope="col" className="px-6 py-3">
                            Giá khuyến mãi
                        </th> */}
                        <th scope="col" className="px-6 py-3">
                            Thao tác
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map(categories => (
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            {/* <td className="w-32 p-4">
                                <img src={product.images?.[0].base_url} alt="Apple Watch" />
                            </td> */}
                            <Link to="" className="leading-[100px]">
                                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white ">
                                    {categories.name}
                                </td>
                            </Link>
                            {/* <td className="px-6 py-4">
                                <div className="flex items-center space-x-3">
                                    <button className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                        <span className="sr-only">Quantity button</span>
                                        <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                                    </button>
                                    <div>
                                        <input type="number" id="first_product" className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required />
                                    </div>
                                    <button className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                        <span className="sr-only">Quantity button</span>
                                        <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                                    </button>
                                </div>
                            </td> */}
                            {/* <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                {product.original_price} VND
                            </td> */}

                            <td className="px-6 py-4">
                                {/* <button className="font-medium text-red-600 dark:text-red-500 hover:underline" onClick={() => onSumbit(categories._id)}>Xóa</button> */}


                            </td>
                        </tr>
                    ))}


                </tbody>
            </table>
        </div>
    </>
}
export default Category