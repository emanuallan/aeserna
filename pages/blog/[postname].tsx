import * as matter from "gray-matter";
import path from "path";
import fs from "fs";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../../components/CodeBlock";
import styles from "./[postname].module.css";

export async function getStaticPaths() {
	const directory = path.join(process.cwd(), "public/posts");
	const postPath = fs.readdirSync(directory).map((url_param) => ({
		params: { postname: url_param.replace(".md", "") },
	}));
	console.log("path: ", postPath);

	return {
		paths: postPath,
		fallback: false,
	};
}

interface staticProps {
	params: {
		postname: string;
	};
}
export async function getStaticProps({ params: { postname } }: staticProps) {
	const TextUnformatted = fs.readFileSync(path.join(process.cwd(), `public/posts/${postname}.md`)).toString();

	const textMetaData = matter(TextUnformatted);
	return {
		props: {
			content: textMetaData.content,
			data: textMetaData.data,
		},
	};
}

interface PostProps {
	content: string;
	data: {
		title: string;
		subtitle: string;
		date: string;
	};
}

export default function Post({ content, data }: PostProps) {
	return (
		<>
			<Head>
				<title>{data.title}</title>
				<meta title="description" content={data.subtitle} />
			</Head>

			<div className="text-whippy">
				<div className="mb-10 lg:mb-16">
					<h1 className="text-5xl mb-2">{data.title}</h1>
					<h2 className="opacity-75 text-2xl">{data.subtitle}</h2>
					<p className="opacity-75">{data.date}</p>
				</div>
				<div className="mx-0 md:mx-16 xl:mx-32">
					<ReactMarkdown
						source={content}
						escapeHtml={false}
						className={styles.blog_content}
						renderers={{ code: CodeBlock }}
					/>
				</div>
			</div>
		</>
	);
}
