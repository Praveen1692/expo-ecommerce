export async function createProduct(req, res) {
    try {

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message, status: 500, data: {} });

    }

}