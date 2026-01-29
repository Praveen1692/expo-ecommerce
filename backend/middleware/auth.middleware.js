
import { User } from "../models/user.model.js";
export const protectRoute = async (req, res, next) => {
    try {

        const { userId } = req.auth;

        if (!userId) {
            return res.status(401).json({ message: "Unauthorized", status: 401, data: {} });
        }

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found", status: 404, data: {} });
        }
        req.user = user;

        next();









    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message, status: 500, data: {} });
    }

}


export const adminOnly = (req, res, next) => {
    try {
        const { role } = req.user;
        if (role != "admin") {
            return res.status(403).json({ message: "Forbidden ", status: 403, data: {} });
        }
        next();
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message, status: 500, data: {} });

    }
}