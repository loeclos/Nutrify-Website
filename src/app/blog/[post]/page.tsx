import { BlogPost } from "@/types/blog";
import BlogPostComponent from "./blog-component";

const blogPosts: BlogPost[] = [
    {
        id: '0',
        title: "Introducing Nutrify 2.0: Multi-Food Mode, 552 New Foods and Share Food",
        date: "December 09, 2025",
        file: "blog-post-5.md",
    },
    {
        id: '1',
        title: "Nutrify Goes to School: Teaching kids about whole food nutrition in a fun, interactive way",
        date: "November 07, 2024",
        file: "blog-post-4.md",
    },
    {
        id: '2',
        title: "Introducing Nutrify 1.2.3: Whole Food Streaks, Homescreen Widgets, Quick Summaries and 41 New Foods",
        date: "November 04, 2024",
        file: "blog-post-3.md",
    },
    {
        id: '3',
        title: "Introducing Nutrify 1.2: Calorie and Macronutrient Goals, Breakdowns and 57 New Foods",
        date: "May 29, 2024",
        file: "blog-post-2.md",
    },
    {
        id: '4',
        title: "Read the launch blog post",
        date: "February 12, 2024",
        file: "blog-post-1.md",
    },
];

export default async function Page({
    params,
}: {
    params: Promise<{ post: string }>
}) {
    const blogId = (await params).post
    return (
        <BlogPostComponent blogId={blogId} blogPosts={blogPosts} />
    )
}
