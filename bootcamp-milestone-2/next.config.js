/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    ...nextConfig,
    images: {
      domains: ['talkstar-photos.s3.amazonaws.com', 'st.adda247.com']
    },
}
