import Product from "../models/product";
import { addProduct } from "../schemas/product";

export const getAll = async (req, res) => {
    const { _limit = 10, _sort = "createAt", _order = "asc", _page = 1 } = req.query;

    const options = {
        limit: _limit,
        page: _page,
        sort: {
            [_sort]: _order === "desc" ? -1 : 1,
        },
    };
    try {
        const data = await Product.find();
        if (data.length === 0) {
            return res.status(200).json({
                message: "Không có dữ liệu",
            });
        }
        return res.json(data);
    } catch (error) {
        return res.status(404).json({
            message: error.message,
        });
    }
};

export const get = async (req, res) => {
    try {
        //populate truy vấn đến 1 mảng khác dựa vào id danh mục
        const data = await Product.findById(req.params.id).populate("categoryId");
        if (data.length === 0) {
            return res.status(200).json({
                message: "Không có dữ liệu",
            });
        }
        return res.json(data);
    } catch (error) {
        return res.status(404).json({
            message: error.message,
        });
    }
};

export const create = async (req, res) => {
    try {
        const { error } = addProduct.validate(req.body);
        if (error) {
            return res.status(400).json({
                message: error.details.map((err) => err.message)
            })
        }
        const data = await Product.create(req.body);
        if (data.length === 0) {
            return res.status(200).json({
                message: "Không thêm được sản phẩm",
            });
        }
        return res.json(data);
    } catch (error) {
        return res.status(404).json({
            message: error.message,
        });
    }
};
export const update = async (req, res) => {
    try {
        const data = await Product.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
        });
        if (data.length === 0) {
            return res.status(200).json({
                message: "Cập nhật sản phẩm không thành công",
            });
        }
        return res.json(data);
    } catch (error) {
        return res.status(404).json({
            message: error.message,
        });
    }
};
export const remove = async (req, res) => {
    try {
        const data = await Product.findOneAndDelete({ _id: req.params.id });
        return res.json({
            message: "Xóa sản phẩm thành công",
            data,
        });
    } catch (error) {
        return res.status(404).json({
            message: error.message,
        });
    }
};
