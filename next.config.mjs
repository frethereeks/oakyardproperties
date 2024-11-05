/** @type {import('next').NextConfig} */
import withPWAInit from "@ducanh2912/next-pwa";

const nextConfig = {
    
};

const withPWA = withPWAInit({
    dest: "public",
    register: true
});

const config = withPWA({
    ...nextConfig
});

export default config;




