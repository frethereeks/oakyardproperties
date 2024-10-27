import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Oakyard Properties Limited',
        short_name: 'Oakyard',
        description: 'A Progressive Web App built with Next.js',
        start_url: '/',
        display: 'standalone',
        background_color: '#f8f7f4',
        theme_color: '#aa1d3f',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}