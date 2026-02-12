import { marked } from "marked";
import { BlogPost } from "@/types/blog";

import "./blog-post.css";

export default async function BlogPostComponent({ blogId, blogPosts }: { blogId: string, blogPosts: BlogPost[] }) {
    const blogPost = blogPosts.find((post) => post['id'] === blogId);
    let error: null | string = null;
    let markdownContent = '';

    if (blogPost) {
        await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/posts/${blogPost.file}`)
            .then((response) => response.text())
            .then((text) => {
                markdownContent = text;
                error = null
            })
            .catch(e =>
                error = e.message);
    } else {
    }

    // Convert markdownContent to HTML using `marked` and sanitize it
    const unsafeHtmlContent = await marked(markdownContent);

    return (
        <div id="blog" className="pt-40 p-10 lg:pl-96 lg:pr-96 md:pl-28 md:pr-28">
            <title>Launch Blog Post</title>
            <meta
                name="description"
                content="Nutrify is an iOS application designed to make learning about whole foods fun and in turn, reduce the intake of ultra-processed foods. It provides personalized nutrition recommendations, tracks your daily food intake, and offers a community to share your progress with others. It is the perfect tool for anyone looking to improve their health and wellbeing. Nutrify is available on the App Store.  Whole food scanner, nutrition and calorie tracker, visual healthy food diary."
            />
            <p>{blogPost.date}</p>
            {/* Render sanitized HTML content */}
            <div dangerouslySetInnerHTML={{ __html: unsafeHtmlContent }} />
            {error ? <p>{error}</p> : null}
        </div>
    );
}
