/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "i.ytimg.com",
				port: "",
			},
			{
				protocol: "https",
				hostname: "yt3.ggpht.com",
				port: "",
			},
			{
				protocol: "https",
				hostname: "yt3.googleusercontent.com",
				port: "",
			},
		],
	},
};

module.exports = nextConfig;
