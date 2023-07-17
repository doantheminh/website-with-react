import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form"
import { IPcategory } from '../interfaces/category';
import { getCategory } from '../api/product';

type Props = {}
const ProductAdd = ({ onAdd }: any) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const onHandleSubmit = (data: any) => {
        onAdd(data);
    }

    const [categories, setCategories] = useState<IPcategory[]>([]);
    useEffect(() => {
        async function fetchCategory() {
            const { data } = await getCategory();
            setCategories(data);
        }
        fetchCategory();
    }, []);

    return (
        <section className="bg-gray-100">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                    <div className="lg:col-span-2 lg:py-12">
                        <p className="max-w-xl text-lg">
                            At the same time, the fact that we are wholly owned and totally
                            independent from manufacturer and other group control gives you
                            confidence that we will only recommend what is right for you.
                        </p>

                        <div className="mt-8">
                            <a href="" className="text-2xl font-bold text-pink-600">
                                0151 475 4450
                            </a>

                            <address className="mt-2 not-italic">
                                282 Kevin Brook, Imogeneborough, CA 58517
                            </address>
                        </div>
                    </div>

                    <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                        <form action="" className="space-y-4">
                            <div>
                                <label className="sr-only" htmlFor="name">Name</label>
                                <input
                                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                                    placeholder="Tên sản phẩm"
                                    {...register("name")}
                                />
                                <p className="text-red-600 text-[15px]">
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="sr-only" htmlFor="email">Giá</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Giá "
                                        type="number"
                                        {...register("price")} />
                                    <p className="text-red-600 text-[15px]">
                                    </p>
                                </div>

                            </div>

                            <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                                {/* <select {...register("categoryId")}>
                                    {categories.map(category => (
                                        <option key={category._id} value={category._id}>{category.name}</option>
                                    ))}
                                </select> */}
                                <div>
                                    <label className="sr-only" htmlFor="email">Giá</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="lít "

                                        {...register("categoryId")} />
                                    <p className="text-red-600 text-[15px]">
                                    </p>
                                </div>
                            </div>


                            <div className="mt-4">
                                <button
                                    type="submit"
                                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                                >
                                    Thêm sản phẩm
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        // <div>

        //     <form onSubmit={handleSubmit(onHandleSubmit)}>
        //         <input type="text" {...register("name", { required: true })} />
        //         {errors.name && <span className='text-red-500'>Không để trống tên sản phẩm</span>}
        //         <input type="text" {...register("price")} />
        //         <input type="text" {...register("categoryId")} />
        //         <button className='bg-sky-500'>Submit</button>
        //     </form>
        // </div>
    )
}

export default ProductAdd;