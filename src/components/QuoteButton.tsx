"use client"
import React, { useState } from 'react'
import { ButtonSmall } from './ui/Buttons'
import QuoteForm from './QuoteForm'
import 'react-phone-number-input/style.css'

type TQuoteFormProps = {
    property: TPropertyItem[] | undefined
}

export default function QuoteButton({ property }: TQuoteFormProps) {
    const [showModal, setShowModal] = useState<boolean>(false)

    return (
        <>
            <div>
                <div onClick={() => setShowModal(!showModal)}>
                    <ButtonSmall className='py-1.5 px-4 md:px-6 w-full md:w-max md:rounded-lg text-white bg-dark hover:bg-primary font-medium' >Make Enquiry</ButtonSmall>
                </div>
                <QuoteForm showModal={showModal} setShowModal={() => setShowModal(!showModal)} property={property} />
            </div>
        </>
    )
}
