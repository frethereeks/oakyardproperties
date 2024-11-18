type TEmailTemplateProps = {
    title?: string
    firstname: string
    lastname: string
    email: string
    phone: string,
    message: string
    property?: string
    slug?: string
}

export const emailTemplate = ({ title = "Message to", firstname, lastname, email, phone = "", message, property = "Oakyard Properties Ltd", slug }: TEmailTemplateProps) => {
    return `
        <section style="max-width: 40rem; width: 100%; margin: 0 auto; box-sizing: border-box; padding: 1rem 0; font-family: Arial, Helvetica, sans-serif;">
        <div className="flex gap-1">
            <div style="background: #122b54; position: relative; font-size: 2rem; font-weight: bold; color: white; text-align: center; padding: 2rem 1rem; text-align: center; background-image: linear-gradient(#122b5420, #122b5420), url('https://oakyardproperties.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FDC240124_6.a11c2324.jpg&w=1200&q=75');">
                <img src="" alt=".." style="position: absolute; width: 100%; height: 100%; left: 0; top: 0; object-fit: cover; opacity: 0;">
                <div style="position: relative; width: 8rem; height: 40px; margin: 0 auto 1rem; padding: 0.25rem 1.5rem; background-color: #fff;">
                    <a href="https://oakyardproperties.com" target="_blank" rel="noopener noreferrer" style="position: relative; display: block; height: 100%;">
                        <img src="https://oakyardproperties.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Foakyard_logo.c4f94a6f.png&w=1200&q=75" alt=".." style="position: absolute; height: 100%; width: 100%; left: 0; top: 0; object-fit: contain;">
                    </a>
                </div>
                <div style="position: relative; font-size: 1.2rem; opacity: .9;">${title}</div>
                <div style="position: relative;">${property}</div>
            </div>
            <div style="padding: 1rem;" className="flex flex-col flex-1">
                <p style="color: rgb(100,116,139); font-size: 1rem; line-height: 1.8; padding-bottom: .51rem; text-align: justify;">${message}</p>
                <div style="align-items: center; width: 100%; gap: 0.5rem;">
                    <div style="display: flex; align-items: center; gap: 0.5rem; flex: 1;">
                        <div style="height: 100%; width: 4px; flex-shrink: 0; background-color: #122b54;">
                        </div>
                        <div style="display: grid; padding: 0.5rem">
                            <p style="color: rgb(100,116,139); margin: 0; padding: 0; font-size: 1rem; font-weight: 600; line-height: 1;">${firstname} ${lastname}</p>
                            <p style="color: rgb(100,116,139); margin: 0; padding: 0; font-size: .8rem; line-height: 1;">${email}</p>
                            <p style="color: rgb(100,116,139); margin: 0; padding: 0; font-size: .8rem; line-height: 1;">${phone}</p>
                        </div>
                    </div>
                    <a href='https://oakyardproperties.com/properties/${slug}' target='_blank' rel='noopener noreferrer'
                        style="background: #f66; padding: .35rem 1.5rem; width: max-content; display: ${slug ? "block" : "none"}; color: white; font-size: 0.65rem; text-decoration: none; line-height: 1.6;"
                        className="font-bold text-slate-600 text-lg">View Property</a>
                </div>
            </div>
            <p style="max-width: 500px; margin: 0 auto; color: #64748b; font-size: .65rem; padding: 1rem; text-align:center; line-height: 1.25rem;"
                className="text-xs text-slate-700 text-center py-2">You received this message because you are a designated custodian of
                the <a href='https://oakyardproperties.com' target='_blank' rel='noopener noreferrer'
                    style="color: inherit; text-decoration: underline;" className="text-inherit">Oakyard Properties
                    Website</a>.</p>
            <p style="text-align: center; background-color: #64748b; color: #fff; font-size: .65rem; padding: 1rem; text-align:center; line-height: 1.25rem;">To unsubscribe, inbox <a href='mailto: info@oakyardproperties.com'
                    style="color: inherit; text-decoration: underline;" className="text-inherit">info@oakyardproperties.com</a> if you wish to stop receiving this message.</p>
        </div>
    </section>
    `
}