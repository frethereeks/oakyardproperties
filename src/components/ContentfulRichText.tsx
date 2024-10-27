/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Link from 'next/link'
import ContentFulImage from './ContentFulImage'
import { Para1 } from './ui/Typography'
// import type { NodeRenderer,  } from '@contentful/rich-text-react-renderer'
// { Document, EntryHyperlink, Paragraph, } from '@contentful/rich-text-types'
// ContentfulCollection<Entry<EntrySkeletonType, undefined, string>>.items: Entry<EntrySkeletonType, undefined, string>[]



export default function ContentfulRichText({ content }: { content: any }) {
  return (
    <>{documentToReactComponents(content, {
      renderMark: {
        [MARKS.BOLD]: (text: any) => <strong className='font-bold'>{text}</strong>,
        [MARKS.ITALIC]: (text: any) => <em className='italic'>{text}</em>,
        [MARKS.CODE]: (text: any) => <pre><code className='p-0.5 bg-zinc-300'>{text}</code></pre>
      },
      renderNode: {
        [BLOCKS.PARAGRAPH]: (node: any, children: any) => {
          if (node.content.find((item: any) => item.data.marks?.find((mark: any) => mark.type === "code"))) {
            return <Para1 className='text-justify text-ellipsis'><pre><code>{children}</code></pre></Para1>
          }
          return <Para1 className='text-justify text-ellipsis'>{children}</Para1>
        },
        // [INLINES.ENTRY_HYPERLINK]: (node: { data: { target: { sys: { contentType: { sys: { id: string} } } ; fields: { slug: string; title: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined} } } } ) => {
        [INLINES.ENTRY_HYPERLINK]: (node: any) => {
          if (node.data.target.sys.contentType.sys.id === "description") {
            return <Link href={`/properties/${node.data.target.fields.slug}`}>
              {node.data.target.fields.title}
            </Link>
          }
        },
        // [INLINES.HYPERLINK]: (node: { content: { nodeType: "text" | unknown }[]; data: { uri: any } }) => {
        [INLINES.HYPERLINK]: (node: any) => {
          const text = node.content.find((item: any) => item.nodeType === "text")?.value
          return <Link href={`${node.data.uri}`} target="_blank" rel="noopener noreferrer">
            {text}
          </Link>
        },
        [BLOCKS.EMBEDDED_ENTRY]: (node: any) => {
          if (node.data.target.sys.contentType.sys.id === "videoEmbed") {
            return <iframe
              height={'400'}
              width={'100%'}
              src={`${node.data.target.fields.embedUrl}`}
              title={node.data.target.fields.title}
              allowFullScreen={true}
            >
            </iframe>
          }
        },
        [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
          return <ContentFulImage src={node.data.target.fields.file.url} alt={node.data.target.fields.title} />
        }
      },
    })}</>
  )
}
