import User from "../models/user.model";
import { connect } from "../mongodb/mongoose";

export const CreateOrUpdateUser = async (
    id,
    username,
    emailaddresses,
    first_name,
    last_name,
    image_url
) => {

    try {
        await connect();

        const user = await User.findOneAndUpdate(
            { clerkId: id },
            {
               $set: {
                username: username,
                email: emailaddresses[0].email,
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

