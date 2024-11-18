"use server"

import { emailTemplate } from "@/components/emailTemplate";
import { contentfulClient } from "@/lib";
import nodeMailer from 'nodemailer'

export const handleContact = async (data: FormData) => {
    try {
        const firstname = data.get("firstname")?.valueOf()?.toString() || "";
        const lastname = data.get("lastname")?.valueOf()?.toString() || "";
        const phone = data.get("phone")?.valueOf()?.toString() || "";
        const email = data.get("email")?.valueOf()?.toString() || "";
        const message = data.get("message")?.valueOf()?.toString() || "";

        // await prisma.contact.create({
        //     data: {
        //         firstname, lastname, phone, message, email
        //     }
        // })

        const transport = nodeMailer.createTransport({
            // host: 'smtp.gmail.com',
            host: process.env.MAIL_HOST,
            port: 465,
            secure: true,
            auth: {
                user: process.env.MAIL_USERNAME,
                pass: process.env.MAIL_PASSWORD
            }
        })

        transport.sendMail({
            from: `Oakyard Properties Ltd <${process.env.MAIL_USERNAME}>`,
            to: process.env.MAIL_RECEIVER,
            bcc: `Oakyard Properties Ltd <${process.env.MAIL_BCC}>`,
            replyTo: email?.toString(),
            subject: `Oakyard :: Contact Message`,
            html: emailTemplate({ firstname, lastname, email, phone, message })
        }, (err) => {
            if (err) {
                console.log(`Something went wrong. We could not send the mail...Please, try again`);
            }
        })
        return { error: false, message: `Thank you for reaching our to us ${firstname} ${lastname}. Expect our reply soonest.` };
    } catch (error) {
        console.log('error', error)
        return { error: true, message: `Something went wrong. We could not send the mail...Please, try again` };
    }
}

export const handleEnquiry = async (data: FormData) => {
    try {
        const firstname = data.get("firstname")?.valueOf()?.toString() || "";
        const lastname = data.get("lastname")?.valueOf()?.toString() || "";
        const phone = data.get("phone")?.valueOf()?.toString() || "";
        const property = data.get("property")?.valueOf()?.toString() || "";
        const slug = data.get("slug")?.valueOf()?.toString() || "";
        const email = data.get("email")?.valueOf()?.toString() || "";
        const message = data.get("message")?.valueOf()?.toString() || "";

        // await prisma.enquiry.create({
        //     data: {
        //         firstname, lastname, phone, message, email, property
        //     }
        // })

        const transport = nodeMailer.createTransport({
            host: process.env.MAIL_HOST,
            port: 465,
            secure: true,
            auth: {
                user: process.env.MAIL_USERNAME,
                pass: process.env.MAIL_PASSWORD
            }
        })

        transport.sendMail({
            from: `Oakyard Properties Ltd <${process.env.MAIL_USERNAME}>`,
            to: process.env.MAIL_RECEIVER,
            bcc: `Oakyard Properties Ltd <${process.env.MAIL_BCC}>`,
            replyTo: email?.toString(),
            subject: `OakyardProperties :: Property Enquiry!`,
            html: emailTemplate({ title: "Enquiry On", firstname, lastname, email, phone, message, property, slug })
        }, (err, info) => {
            if (err) {
                console.log(`Something went wrong. We could not send the mail...Please, try again`);
            }
            console.log({info})
        })
        return { error: false, message: `Thank you for reaching our to us ${firstname} ${lastname}. Expect our reply soonest.` };
    } catch (error) {
        console.log('error', error)
        return { error: true, message: `Something went wrong. We could not send the mail...Please, try again` };
    }
}

export const fetchProperties = async (): Promise<TContentfulProperty | undefined> => {
    const res = await contentfulClient.getEntries({
        "content_type": "property"
    })
    return res as unknown as TContentfulProperty;
}

export const fetchProperty = async ({ slug }: { slug: string }) => {
    const res = await contentfulClient.getEntries({
        "content_type": "property",
        "fields.slug": slug
    })
    return res as unknown as TContentfulProperty;
}


// import prisma from "@/lib/prisma"
// import { SessionOption } from "@/lib/sessionOption"
// import { getIronSession } from "iron-session"
// import { cookies } from "next/headers"
// import bcryptjs from 'bcryptjs'
// import { redirect } from "next/navigation"
// import { Visiblity } from "@prisma/client"

// export const getSession = async () => {
//     const session = await verifySession()
//     return session;
// }

// export const verifySession = async () => {
//     const session = await getIronSession<SessionData>(cookies(), SessionOption)
//     if (!session.isLoggedIn) {
//         session.destroy()
//         redirect("/login")
//     }
//     return session;
// }
// export const verifyAdmin = async () => {
//     const session = await getSession()
//     if (!session.isAdmin) {
//         return false
//     }
//     return true;
// }



// export const createBlog = async (data: FormData) => {
//     const session = await getSession()
//     if (!session.isAdmin) {
//         return { error: true, message: "Unauthorized Access! Only admins can create a blog post." }
//     }
//     else {
//         try {
//             const title = data.get("title")?.valueOf() as string
//             const slug = data.get("slug")?.valueOf() as string
//             const category = data.get("category")?.valueOf() as string
//             const text = data.get("text")?.valueOf() as string
//             const visibility = data.get("visibility")?.valueOf() as string
//             const images = data.get("images")?.valueOf() as string

//             await prisma.blog.create({
//                 data: { title, slug, category, text, visibility: Visiblity[visibility as keyof typeof Visiblity], images, ownerId: session.id }
//             })
//             return { error: false, message: `Success! New Post has been created successfully.` }
//         } catch (error) {
//             console.log({ error })
//             return { error: true, message: `Oops. Something went wrong. Please, try again later` }

//         }
//     }
// }

// export const createComment = async (data: FormData) => {
//     const session = await getSession()
//     try {
//         const text = data.get("text")?.valueOf() as string
//         const blogId = data.get("blogId")?.valueOf() as string
//         const comment = await prisma.comment.create({
//             data: { text, blogId, userId: session.id },
//             select: { id: true, blogId: true, createdAt: true, User: { select: { id: true, firstname: true, middlename: true, lastname: true, image: true } } }
//         })
//         return { error: false, message: `New comment added successfully`, comment }
//     } catch (error) {
//         console.log({ error })
//         return { error: true, message: `Oops. Something went wrong. Please, try again later` }
//     }
// }

// export const createReply = async (data: FormData) => {
//     const session = await getSession()
//     try {
//         const text = data.get("text")?.valueOf() as string
//         const commentId = data.get("commentId")?.valueOf() as string
//         const reply = await prisma.reply.create({
//             data: { text, commentId, userId: session.id },
//             select: { id: true, commentId: true, createdAt: true, User: { select: { id: true, firstname: true, middlename: true, lastname: true, image: true } } }
//         })
//         return { error: false, message: `New reply added successfully`, reply }
//     } catch (error) {
//         console.log({ error })
//         return { error: true, message: `Oops. Something went wrong. Please, try again later` }
//     }
// }

// export const createUser = async (data: FormData) => {
//     try {
//         const firstname = data.get("firstname")?.valueOf() as string
//         const middlename = data.get("middlename")?.valueOf() as string
//         const lastname = data.get("lastname")?.valueOf() as string
//         const email = data.get("email")?.valueOf() as string
//         const password = data.get("password")?.valueOf() as string
//         const phone = data.get("phone")?.valueOf() as string
//         const image = data.get("image")?.valueOf() as string
//         const salt = await bcryptjs.genSalt(10), hashPassword = await bcryptjs.hash(password, salt)
//         await prisma.user.create({
//             data: { firstname, lastname, middlename, email: email.toLowerCase(), password: hashPassword, phone, image }
//         })
//         return { error: false, message: `Welcome to Chedres ${firstname} ${lastname}. Please, verify your mail to complete your registration` }
//     } catch (error) {
//         console.log({ error })
//         return { error: true, message: `Oops. Something went wrong. Please, try again later` }
//     }
// }

// export const loginUser = async (data: FormData) => {
//     try {
//         const session = await getSession()
//         const email = data.get("email")?.valueOf() as string
//         const password = data.get("password")?.valueOf() as string
//         const user = await prisma.user.findFirst({
//             where: { email: email.toLowerCase() }
//         })
//         if (!user) {
//             return { error: true, message: `User not found. We have no user with such details` }
//         }
//         else {
//             const passwordMatched = await bcryptjs.compare(password, user.password)
//             if (!passwordMatched) {
//                 return { error: true, message: `Invalid credentials supplied. Please, check and try again` }
//             }
//             else {
//                 session.firstname = user.firstname
//                 session.email = user.email
//                 session.image = user.image || ""
//                 session.isAdmin = user.isAdmin
//                 session.status = user.status
//                 await session.save()
//                 redirect("/dashboard")
//                 return { error: false, message: `Welcome back ${user?.firstname} ${user?.lastname}. Please, wait while we redirect you` }
//             }
//         }
//     } catch (error) {
//         console.log({ error })
//         return { error: true, message: `Oops. Something went wrong. Please, try again later` }
//     }
// }

// export const logOut = async () => {
//     const session = await getSession()
//     try {
//         session.destroy()
//         return { error: false, message: `Logout successful` }
//     } catch (error) {
//         return { error: true, message: `Something went wrong and we could not log you out. Please, try again` }

//     }
// }


// // Editing
// export const editBlog = async (data: FormData) => {
//     const session = await getSession()
//     if (!session.isAdmin) {
//         return { error: true, message: "Unauthorized Access! Only admins can edit a blog post." }
//     }
//     else {
//         try {
//             const title = data.get("title")?.valueOf() as string
//             const slug = data.get("slug")?.valueOf() as string
//             const category = data.get("category")?.valueOf() as string
//             const text = data.get("text")?.valueOf() as string
//             const visibility = data.get("visibility")?.valueOf() as string
//             const images = data.get("images")?.valueOf() as string

//             await prisma.blog.update({
//                 where: { id: session.id },
//                 data: { title, slug, category, text, visibility: Visiblity[visibility as keyof typeof Visiblity], images, }
//             })
//             return { error: false, message: `Success! New Post has been created successfully.` }
//         } catch (error) {
//             console.log({ error })
//             return { error: true, message: `Oops. Something went wrong. Please, try again later` }

//         }
//     }
// }

// export const editComment = async (data: FormData) => {
//     const session = await getSession()
//     try {
//         const text = data.get("text")?.valueOf() as string
//         const commentId = data.get("commentId")?.valueOf() as string
//         const comment = await prisma.comment.update({
//             where: { id: commentId, userId: session.id },
//             data: { text },
//             select: { id: true, text: true, createdAt: true, updatedAt: true }
//         })
//         return { error: false, message: `Comment edited successfully`, comment }
//     } catch (error) {
//         console.log({ error })
//         return { error: true, message: `Oops. Something went wrong. Please, try again later` }
//     }
// }

// export const editReply = async (data: FormData) => {
//     const session = await getSession()
//     try {
//         const text = data.get("text")?.valueOf() as string
//         const replyId = data.get("replyId")?.valueOf() as string
//         const reply = await prisma.reply.update({
//             where: { id: replyId, userId: session.id },
//             data: { text },
//             select: { id: true, text: true, createdAt: true, updatedAt: true }
//         })
//         return { error: false, message: `Reply edited successfully`, reply }
//     } catch (error) {
//         console.log({ error })
//         return { error: true, message: `Oops. Something went wrong. Please, try again later` }
//     }
// }

// export const editProfile = async (data: FormData) => {
//     const session = await getSession()
//     const firstname = data.get("firstname")?.valueOf() as string
//     const middlename = data.get("middlename")?.valueOf() as string
//     const lastname = data.get("lastname")?.valueOf() as string
//     const email = data.get("email")?.valueOf() as string
//     const phone = data.get("phone")?.valueOf() as string
//     const image = data.get("image")?.valueOf() as string
//     try {
//         const sameEmailOrPhoneExists = await prisma.user.findFirst({
//             where: { email: email.toLowerCase(), OR: [{ phone: phone }], NOT: [{ id: session.id }] },
//         })
//         if (sameEmailOrPhoneExists) {
//             return { error: true, message: `There is another with either of the mail or phone number you supplied. Please, try another` }
//         }
//         await prisma.user.update({
//             where: { id: session.id },
//             data: { firstname, lastname, middlename, email: email.toLowerCase(), phone, image }
//         })
//         return { error: false, message: `Profile has been successfully updated` }
//     } catch (error) {
//         console.log({ error })
//         return { error: true, message: `Oops. Something went wrong. Please, try again later` }
//     }
// }

// // Deleting
// export const deleteBlog = async (id: string) => {
//     const session = await getSession()
//     if (!session.isAdmin) {
//         return { error: true, message: "Unauthorized Access! Only admins can delete a blog post." }
//     }
//     else {
//         try {
//             await prisma.blog.delete({
//                 where: { id }
//             })
//             return { error: false, message: `Post and all its comments/replies have been successfully deleted` }
//         } catch (error) {
//             return { error: true, message: `Something went wrong and we could not complete your request. Please, try again` }

//         }
//     }
// }

// export const deleteComment = async (id: string) => {
//     const session = await getSession()
//     const comment = await prisma.comment.findFirst({
//         where: { id },
//         select: { userId: true, id: true }
//     })
//     if (comment?.userId !== session.id || !session.isAdmin) {
//         return { error: true, message: "Unauthorized Access! You can only delete a comment you posted." }
//     }
//     else {
//         try {
//             await prisma.comment.delete({
//                 where: { id }
//             })
//             return { error: false, message: `Comment and all its replies have been successfully deleted` }
//         } catch (error) {
//             return { error: true, message: `Something went wrong and we could not complete your request. Please, try again` }

//         }
//     }
// }

// export const deleteReply = async (id: string) => {
//     const session = await getSession()
//     const reply = await prisma.reply.findFirst({
//         where: { id },
//         select: { userId: true, id: true }
//     })
//     if (reply?.userId !== session.id || !session.isAdmin) {
//         return { error: true, message: "Unauthorized Access! You can only delete a reply you posted." }
//     }
//     else {
//         try {
//             await prisma.reply.delete({
//                 where: { id }
//             })
//             return { error: false, message: `Comment and all its replies have been successfully deleted` }
//         } catch (error) {
//             return { error: true, message: `Something went wrong and we could not complete your request. Please, try again` }

//         }
//     }
// }

// export const deleteUser = async (id: string) => {
//     const session = await getSession()
//     const user = await prisma.user.findFirst({
//         where: { id },
//         select: { id: true }
//     })
//     if (user?.id !== session.id || !session.isAdmin) {
//         return { error: true, message: "Unauthorized Access! You can only delete your own account." }
//     }
//     else {
//         try {
//             await prisma.user.delete({
//                 where: { id }
//             })
//             if (session.id === id) {
//                 await logOut()
//                 redirect("/")
//             }
//             return { error: false, message: `Account has been successfully deleted!` }
//         } catch (error) {
//             return { error: true, message: `Something went wrong and we could not complete your request. Please, try again` }

//         }
//     }
// }



