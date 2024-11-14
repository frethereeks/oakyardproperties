"use client"
import React, { FormEvent, useRef, useState } from 'react'
import { IoAddCircleOutline } from 'react-icons/io5'
import { ParaSmall } from '@/components/ui/Typography'
import toast from 'react-hot-toast'
import PhoneInput from 'react-phone-number-input'
import flags from 'react-phone-number-input/flags';
import 'react-phone-number-input/style.css'
import { handleContact } from '@/actions'

type TContactFormProps = {
    showButton: boolean,
    // formRef: React.MutableRefObject<HTMLFormElement | null>
}

export default function ContactForm({ showButton = false }: TContactFormProps) {
    const [loading, setLoading] = useState<boolean>(false)
    const [phone, setPhone] = useState<string | undefined>('')
    const formRef = useRef<HTMLFormElement | null>(null)

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setLoading(true)
        try {
            const formData = new FormData(formRef.current!)
            const data = await handleContact(formData)
            if (data?.error) toast.error(data?.message, { id: "123", duration: 4000 })
            else {
                toast.success(data.message!, { id: "123", duration: 4000 })
                formRef.current?.reset()
                setPhone("")
            }
        } catch (error) {
            console.log('error', error)
            toast.error(`An error occured while trying to process your request`, { id: "123", duration: 4000 })
        }
        finally {
            setLoading(false)
        }
        // toast.success(`Form submission will be fixed in a few...`, { id: "123", duration: 4000 })
    }

    return (
        <>
            <form ref={formRef} onSubmit={handleSubmit} data-aos-duration="1000" data-aos="fade-down" data-aos-delay="1800" className="grid lg:grid-cols-2 gap-4 py-4">
                <div className="flex flex-col text-sitetext">
                    <ParaSmall className='pl-1 opacity-70'>First Name</ParaSmall>
                    <input type="text" name='firstname' placeholder='Angela' required className="border border-sitetext/70 focus:border-secondary hover:border-secondary outline-none rounded-md p-2 placeholder:opacity-70 font-sm text-sitetext bg-transparent" />
                </div>
                <div className="flex flex-col text-sitetext">
                    <ParaSmall className='pl-1 opacity-70'>Last Name</ParaSmall>
                    <input type="text" name='lastname' placeholder='Darius' required className="border border-sitetext/70 focus:border-secondary hover:border-secondary outline-none rounded-md p-2 placeholder:opacity-70 font-sm text-sitetext bg-transparent" />
                </div>
                <div className="flex flex-col text-sitetext">
                    <ParaSmall className='pl-1 opacity-70'>Email</ParaSmall>
                    <input type="email" name='email' placeholder='Angelarius@email.com' required className="border border-sitetext/70 focus:border-secondary hover:border-secondary outline-none rounded-md p-2 placeholder:opacity-70 font-sm text-sitetext bg-transparent" />
                </div>
                <div className="flex flex-col text-sitetext">
                    <ParaSmall className='pl-1 opacity-70'>Phone Number</ParaSmall>
                    <div className="border border-sitetext/70 focus:border-secondary hover:border-secondary outline-none rounded-md p-2 placeholder:opacity-70 font-sm text-sitetext bg-transparent overflow-hidden">
                        <PhoneInput
                            onChange={(value) => setPhone(value)}
                            placeholder={"Enter Phone Number"}
                            international
                            withCountryCallingCode={true}
                            key={234}
                            defaultCountry='NG'
                            style={{ outline: "none", ring: "none", width: '108%' }}
                            countryCallingCodeEditable={false}
                            value={phone}
                            name="phone"
                            flags={flags}
                            limitMaxLength={true}
                            smartCaret={false}
                            className='w-full hover:border-primary/90 outline-none placeholder-opacity-70 text-sitetext/80 bg-transparent rounded-md px-0 flex-1'
                        />
                    </div>
                    {/* <input type="text" placeholder='+234808250625' className="border border-sitetext/70 focus:border-secondary hover:border-secondary outline-none rounded-md p-2 placeholder:opacity-70 font-sm text-sitetext bg-transparent" /> */}
                </div>
                <div className="lg:col-span-2 flex flex-col gap-4">
                    <div className="flex flex-col text-sitetext">
                        <ParaSmall className='pl-1 opacity-70'>Message</ParaSmall>
                        <textarea required name="message" id="message" cols={30} rows={6} placeholder='Tell us what is on your mind...' className='border border-sitetext/70 focus:border-secondary hover:border-secondary outline-none rounded-md p-2 placeholder:opacity-70 font-sm text-sitetext bg-transparent resize-none'>
                        </textarea>
                    </div>
                    {
                        showButton ?
                            <button type='submit' disabled={loading} className="p-1.5 lg:p-2 px-4 w-max flex items-center gap-3 md:gap-1.5 text-white bg-primary hover:bg-white hover:text-primary border hover: border-primary">
                                <div className={`${loading ? 'animate-spin' : 'animate-none'}`}>
                                    <IoAddCircleOutline size={25} />
                                </div>
                            <span className="font-medium pr-1">Send Message</span>
                        </button>: ""
                    }
                </div>
            </form>
        </>
    )
}
