import cloudinary from "../config/cloudinary.js"
import { Product } from "../models/product.model.js";

export async function createProduct(req, res) {
    try {

        const { name, description, price, stock, category } = req.body;
        const { image } = req.file;


        if (!name || !description || !price || !stock || !category || !image) {
            return res.status(400).json({ message: "All fields are required", status: 400, data: {} });
        }

        if (!image) {
            return res.status(400).json({ message: "Image is required", status: 400, data: {} });
        }


        const uploadImages = Promise.all(req.files.map((file) => {
            return cloudinary.uploader.upload(file.path, {
                folder: "products",
                resource_type: "image"
            })
        }))



        const images = await uploadImages;

        console.log("images", images);


        const imageUrl = images.map((image) => {
            return image.secure_url
        })

        console.log("image url", imageUrl);

        const product = await Product.create({
            name,
            description,
            price,
            stock,
            category,
            images: imageUrl
        });

        console.log("product", product);

        return res.status(201).json({ message: "Product created successfully", status: 201, data: product });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message, status: 500, data: {} });

    }

}
export async function getAllProducts(req, res) {

    try {
        const products = await Product.find().sort({ createdAt: -1 });
        console.log("Show All Products", products);
        return res.status(200).json({ message: "Products fetched successfully", status: 200, data: products });
    } catch (error) {
        return res.status(500).json({ message: error.message, status: 500, data: {} });

    }

}


export async function updateProduct(req, res) {


    try {
        const { id } = req.params;
        const { name, description, price, stock, category } = req.body;

        if (!name || !description || !price || !stock || !category) {
            return res.status(400).json({ message: "All fields are required", status: 400, data: {} });
        }

        const product = await Product.findByIdAndUpdate(id, {
            name,
            description,
            price,
            stock,
            category
        }, { new: true });

        console.log("Product updated successfully", product);

        return res.status(200).json({ message: "Product updated successfully", status: 200, data: product });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message, status: 500, data: {} });

    }

}


