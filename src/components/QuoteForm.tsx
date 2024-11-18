"use client"
import React, { FormEvent, useEffect, useRef, useState } from 'react'
import { Modal } from "antd"
import { RiDoorOpenLine } from 'react-icons/ri'
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Header4, ParaSmall } from '@/components/ui/Typography'
import toast from 'react-hot-toast'
import PhoneInput from 'react-phone-number-input'
import flags from 'react-phone-number-input/flags';
import 'react-phone-number-input/style.css'
import { handleEnquiry } from '@/actions'

type TQuoteFormProps = {
    showModal: boolean
    property: TPropertyFields[] | undefined
    setShowModal: React.Dispatch<React.SetStateAction<boolean | undefined>>
}

export default function QuoteForm({ showModal, setShowModal, property }: TQuoteFormProps) {
    const [loading, setLoading] = useState<boolean>(false)
    const [phone, setPhone] = useState<string | undefined>('')
    const [item, setItem] = useState<string>("")
    const [slug, setSlug] = useState<string>("")
    const formRef = useRef<HTMLFormElement | null>(null)

    useEffect(() => {
        const item = property?.slice(0,1)[0].slug ?? ["orchid-vista"]
        const currentSlug = item[0]
        setSlug(currentSlug)
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        const currentSlug = property?.find(el => el.title === item)?.slug || "orchid-vista"
        setSlug(currentSlug)
    }, [property, item])
    
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setLoading(true)
        try {
            const formData = new FormData(formRef.current!)
            const data = await handleEnquiry(formData)
            if (data?.error) toast.error(data?.message, { id: "123", duration: 4000 })
            else {
                toast.success(data.message!, { id: "123", duration: 4000 })
                formRef.current?.reset()
                setShowModal(prev => !prev)
                setPhone("")
            }
        } catch (error) {
            console.log('error', error)
            toast.error(`An error occured while trying to process your request`, { id: "123", duration: 4000 })
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <>
            <Modal open={showModal} onCancel={() => setShowModal(prev => !prev)} cancelText="." okText="." cancelButtonProps={{ className: 'hidden bg-grey/60 hover:bg-grey text-dark py-2 px-4 rounded-md font-medium text-sm sm:text-base md:font-semibold cursor-pointer py-1.5 max md:min-w-[45%] mr-auto' }} okButtonProps={{ className: 'hidden cursor-pointer py-2 px-4 rounded-md font-semibold bg-primary text-white text-sm w-max md:min-w-[45%] mr-auto whitespace-nowrap shad hover:bg-primary/90' }}>
                <div className="px-4 bg-white">
                    <form ref={formRef} onSubmit={handleSubmit} className="grid lg:grid-cols-2 gap-4 py-4">
                        <input type="hidden" name="slug" value={`${slug}`} />
                        <Header4 dotted className='text-primary text-center lg:col-span-2 font-bold pb-4'>Property Enquiry Form</Header4>
                        <div className="flex flex-col text-sitetext">
                            <ParaSmall className='pl-1 opacity-70'>First Name</ParaSmall>
                            <input type="text" placeholder='Angela' name='firstname' required className="border border-sitetext/70 focus:border-secondary hover:border-secondary outline-none rounded-md p-2 placeholder:opacity-70 font-sm text-sitetext bg-transparent" />
                        </div>
                        <div className="flex flex-col text-sitetext">
                            <ParaSmall className='pl-1 opacity-70'>Last Name</ParaSmall>
                            <input type="text" placeholder='Darius' name='lastname' required className="border border-sitetext/70 focus:border-secondary hover:border-secondary outline-none rounded-md p-2 placeholder:opacity-70 font-sm text-sitetext bg-transparent" />
                        </div>
                        <div className="lg:col-span-2 flex flex-col gap-4 text-sitetext">
                            <div className="flex flex-col gap-4">
                                <ParaSmall className='pl-1 opacity-70'>Property</ParaSmall>
                                <select onChange={e => setItem(e.target.value)} name="property" id="" className="border border-sitetext/70 focus:border-secondary hover:border-secondary outline-none overflow-hidden rounded-md p-2 placeholder:opacity-70 font-sm text-sitetext bg-transparent bg-white">
                                    {
                                        property?.map(el => {
                                            // setSlug(el.slug)
                                            return <option key={el.title} value={el.title} className="p-2 bg-white text-sitetext text-sm md:text-base lg:text-lg">{el.title}</option>
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-col text-sitetext">
                            <ParaSmall className='pl-1 opacity-70'>Email</ParaSmall>
                            <input type="email" placeholder='Angelarius@email.com' name='email' required className="border border-sitetext/70 focus:border-secondary hover:border-secondary outline-none rounded-md p-2 placeholder:opacity-70 font-sm text-sitetext bg-transparent" />
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
                                <textarea name="message" id="message" cols={30} rows={6} placeholder='Tell us what is on your mind...' className='border border-sitetext/70 focus:border-secondary hover:border-secondary outline-none rounded-md p-2 placeholder:opacity-70 font-sm text-sitetext bg-transparent resize-none'>
                                </textarea>
                            </div>
                            <button type='submit' disabled={loading} className="p-1.5 lg:p-2 px-4 w-max flex items-center gap-3 md:gap-1.5 text-white bg-primary hover:bg-white hover:text-primary border hover: border-primary">
                                {
                                    loading ? <div className={`${loading ? 'animate-spin' : 'animate-none'}`}>
                                        <AiOutlineLoading3Quarters size={25} />
                                    </div> :
                                        <RiDoorOpenLine size={25} />
                                }
                                <span className="font-medium pr-1">Send Message</span>
                            </button>
                        </div>
                    </form>
                </div>
            </Modal>
        </>
    )
}
