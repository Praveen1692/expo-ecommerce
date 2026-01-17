import { Inngest } from "inngest"

import { connectToDb } from "./db.js"

import { User } from "../models/user.model.js"

export const inngest = new Inngest({
    id: "expo-ecommerce",
    name: "Expo Ecommerce",

});

const syncUser = inngest.createFunction({
    name: "Sync User",
    id: "sync-user",

},
    {
        event: "clerk/user.created",

    },
    async ({ event }) => {
        await connectToDb();
        const { id, email_addresses, first_name, last_name, image_url } = event.data.data;
        console.log("Event Data", event.data);
        console.log("Event data data ", event.data.data);

        const newUser = {
            clerkId: id,
            name: `${first_name || ""} ${last_name || ""}`,
            email: email_addresses[0]?.email_address,
            imageUrl: image_url,
            addresses: [],
            wishlist: []
        }

        const user = await User.create(newUser);
        console.log("User Created", user);

    }

);

const deleteUserFromDB = inngest.createFunction({
    name: "Delete User",
    id: "delete-user",
},
    {
        event: "clerk/user.deleted",
    },
    async ({ event }) => {
        await connectToDb();
        const { id } = event.data;
        console.log("Event Data", event.data);
        const user = await User.findOneAndDelete({ clerkId: id });
        console.log("User Deleted", user);
    }
)



export const functions = [syncUser, deleteUserFromDB];
