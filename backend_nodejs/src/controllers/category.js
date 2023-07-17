import Category from "../models/category";
import Product from "../models/product";
export const getAll = async (req, res) => {
    try {
        const category = await Category.find();
        console.log(category);
        if (category.length === 0) {
            return res.status(200).json({
                message: "Không có dữ liệu",
            });
        }
        return res.json(category);
    } catch (error) {
        return res.status(404).json({
            message: error.message,
        });
    }
};
export const get = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
d
        if (category.length === 0) {
            return res.status(200).json({
                message: "Không có dữ liệu",
            });
        }
        //lấy sản phẩm có trong danh mục với id của danh mục đó.
        const products = await Product.find({ categoryId: req.params.id })
        // `...category.toObject` lấy tất các obj có trong danh mục
        return res.json({ ...category.toObject, products });
    } catch (error) {
        return res.status(404).json({
            message: error.message,
        });
    }
};
export const create = async (req, res) => {
    try {
        const category = await Category.create(req.body);
        if (category.length === 0) {
            return res.status(200).json({
                message: "Không thêm được danh mục",
            });
        }
        return res.json(category);
    } catch (error) {
        return res.status(404).json({
            message: error.message,
        });
    }
};
export const update = async (req, res) => {
    try {
        const category = await Category.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
        });
        if (category.length === 0) {
            return res.status(200).json({
                message: "Cập nhật danh mục không thành công",
            });
        }
        return res.json(category);
    } catch (error) {
        return res.status(404).json({
            message: error.message,
        });
    }
};
export const remove = async (req, res) => {
    try {
        const category = await Category.findOneAndDelete({ _id: req.params.id });
        return res.json({
            message: "Xóa danh mục thành công",
            category,
        });
    } catch (error) {
        return res.status(404).json({
            message: error.message,
        });
    }
};
