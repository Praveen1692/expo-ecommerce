
import { User } from "../models/user.model.js";



export async function addAddress(req, res) {
    try {
        const { userId } = req.params;

        if (!userId) {
            return res.status(400).json({ message: "User id is required", status: 400, data: {} })
        }


        const userr = await User.findById(userId);

        if (!userr) {
            return res.status(404).json({ message: "User not found", status: 404, data: {} })
        }

        const { addressLine1, addressLine2, city, state, pincode, country } = req.body;

        if (!addressLine1 || !addressLine2 || !city || !state || !pincode || !country) {
            return res.status(400).json({ message: "All fields are required", status: 400, data: {} })
        }

        const address = {
            addressLine1,
            addressLine2,
            city,
            state,
            pincode,
            country
        }

        userr.address.push(address);
        await userr.save();

        return res.status(200).json({ message: "Address added successfully", status: 200, data: {} })

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error", status: 500, data: {} })



    }

}