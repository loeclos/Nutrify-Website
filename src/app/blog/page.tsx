
'use client'

import { useEffect } from 'react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link';
import { BlogPost } from '@/types/blog';

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

const BlogCard = ({ post }: { post: BlogPost }) => {
    useEffect(() => {
        const all = document.querySelectorAll('.spotlight-card')

        const handleMouseMove = (ev: MouseEvent) => {
            all.forEach(e => {
                const blob = e.querySelector('.blob') as HTMLElement
                const fblob = e.querySelector('.fake-blob') as HTMLElement

                if (!blob || !fblob) return

                const rec = fblob.getBoundingClientRect()

                blob.style.opacity = '1'

                blob.animate(
                    [
                        {
                            transform: `translate(${ev.clientX - rec.left - rec.width / 2
                                }px, ${ev.clientY - rec.top - rec.height / 2}px)`
                        }
                    ],
                    {
                        duration: 300,
                        fill: 'forwards'
                    }
                )
            })
        }

        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    return (
        <div className='h-full w-full'>
            <div className='h-full spotlight-card group bg-border relative overflow-hidden rounded-xl p-px transition-all duration-300 ease-in-out'>
                <Card className='h-full group-hover:bg-card/90 w-full border-none transition-all duration-300 ease-in-out group-hover:backdrop-blur-[20px]'>
                    <CardHeader>
                        <CardTitle>{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {post.date}
                    </CardContent>
                </Card>
                <div className='blob absolute top-0 left-0 size-20 rounded-full bg-sky-600/60 opacity-0 blur-2xl transition-all duration-300 ease-in-out dark:bg-sky-400/60' />
                <div className='fake-blob absolute top-0 left-0 size-20 rounded-full' />
            </div>
        </div>
    )
}

export default function Page() {
    return (
        <div className='w-full h-full py-10 flex flex-col justify-center items-center'>
            <h1 className='font-serif text-5xl py-5'>/blog</h1>
            <div className='md:max-w-2/3 w-full max-h-1/2 h-full px-2 grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {blogPosts.map(post => (
                    <Link key={post['id']} href={`${process.env.NEXT_PUBLIC_SITE_URL}/blog/${post['id']}`}>
                        <BlogCard post={post} key={post.title} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

