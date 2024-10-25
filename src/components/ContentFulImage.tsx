"use client"

// import Image, { ImageProps } from 'next/image'
import Image from 'next/image'
import React from 'react'

type TNextImageProps = {
    src: string
    width?: number
    quality?: number | undefined
}

const nextImageLoader = ({ src, width, quality }: TNextImageProps) => {
    // "use server"
    return `${src}?w=${width}&q=${quality || 75}`
}

export default function ContentFulImage(props: { src: string, alt: string, className?: string }) {

    return (
        <>
            <Image loader={nextImageLoader} {...props} alt={props.alt!} fill />
        </>
    )
}
