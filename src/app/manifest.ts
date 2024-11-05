import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Oakyard Properties Limited',
        short_name: 'Oakyard',
        description: 'Oakyard properties LTD is a full-service, privately held commercial and residential real estate company.',
        start_url: '/',
        shortcuts: [
            {
                name: "Oakyard Properties",
                short_name: "Properties",
                description: "Oakyard properties LTD is a full-service, privately held commercial and residential real estate company.",
                url: "/properties",
                icons: [
                    {
                        src: '/favicon-196.png',
                        sizes: '196x196',
                        type: 'image/png',
                    },
                ]
            }
        ],
        display: 'standalone',
        background_color: '#f8f7f4',
        theme_color: '#aa1d3f',
        icons: [
            {
                src: '/favicon-196.png',
                sizes: '196x196',
                type: 'image/png',
            },
            {
                src: '/favicon-196.png',
                sizes: 'any',
                type: 'image/png',
            },
        ],
    }
}