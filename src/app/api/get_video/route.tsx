import axios from "axios";

const YOUTUBE_API_KEY = "YOUR_YOUTUBE_API_KEY"; // replace with your YouTube API key

export async function POST(req: Request, res: Response) {
	const videoId = "bGShHOOoC-U"; // replace with the video id you want to fetch
	const url = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${YOUTUBE_API_KEY}&part=snippet,contentDetails,statistics,status`;

	try {
		const response = await axios.get(url);
		console.log(response.data);
		return response.data;
	} catch (error) {
		console.error(error);
	}
}
// export async function POST(req: Request, res: Response) {
// 	const body = await req.json();
// 	const resp = await fetch("https://www.youtube.com/watch?v=bGShHOOoC-U");
// 	const html = await resp.text();

// 	console.log("html", html);
// 	return html;
// }
