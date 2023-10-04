import User from "@/backEnd/model/user";
import { verifyPassword } from "@/backEnd/utils/auth";
import ConnectionDB from "@/backEnd/utils/connectDB";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
    if (req.method !== 'POST') return;
    try {
        await ConnectionDB();
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            status: 500,
            message: 'Error: Connecting to the database'
        });
    };

    const { name, lastName, password } = req.body;

    const sesstion = await getSession({ req });
    if (!sesstion) return res.status(401).json({ success: false, status: 401, message: 'You are not logged in' });
    const user = await User.findOne({ email: sesstion.user.email });
    if (!user) return res.status(404).json({ success: false, status: 404, message: 'User not defined' });
    const resultPass = await verifyPassword(password, user.password);
    if (!resultPass) return res.status(404).json({ success: false, status: 400, message: 'Password incorrect' });
    await User.updateOne({ email: sesstion.user.email }, { $set: { name, lastName } });
    return res.status(200).json({ success: true, status: 200, message: 'User updated' });

}