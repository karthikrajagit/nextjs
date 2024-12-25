import User from "../models/user.model";
import { connect } from "../mongodb/mongoose";

export const createOrUpdateUser = async (
    id,
    first_name,
    last_name,
    image_url,
    email_addresses,
    username
) => {

    try {
        await connect();

        const user = await User.findOneAndUpdate(
            { clerkId: id },
            {
               $set: {
                username: username,
                email: email_addresses[0].email,
                firstname: first_name,
                lastname: last_name,
                avatar: image_url,
               }
            },
            {new: true, upsert: true}
        )
        return user;
    } catch (error) {
        console.log('User creation or updation error',error);
    }
}

export const deleteUser = async (id) => {
    try {
        await connect();
        await User.findOneAndDelete({clerkId: id});
    } catch (error) {
        console.log("Error in deleting user",error);
    }
}

