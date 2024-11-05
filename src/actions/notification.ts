"use server"

import webpush from "web-push"

{
    "subject": "mailto: <adefredy1@gmail.com>",
    "publicKey": process.env.NEXT_VAPID_PUBLIC_KEY,
    "privateKey": process.env.NEXT_VAPID_PRIVATE_KEY
}

type TSendNotificationProps = {
    message: string
    user_id: string
    icon: string
    name: string
}

export const sendNotification = async ({ message, icon, name, user_id }: TSendNotificationProps) => {

}

