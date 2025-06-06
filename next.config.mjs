/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "encrypted-tbn0.gstatic.com",
            "assets.justinmind.com",
            "codewithmosh.com",
            "img.freepik.com",
            "res.cloudinary.com"
        ]
    },
    env: {
        CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
    },
};

export default nextConfig;
