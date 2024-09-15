/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
               protocol: "https",
               hostname: "*",
            //    hostname: "www.themealdb.com",
               port: "",
               pathname: "/**",
            },
         ],
      },
};

export default nextConfig;
