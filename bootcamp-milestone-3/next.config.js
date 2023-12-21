/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    ...nextConfig,
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: 'talkstar-photos.s3.amazonaws.com',
          pathname: '**',
        },
        {
          protocol: "https",
          hostname: 'st.adda247.com',
          pathname: '**',
        }
      ]
    },
}
