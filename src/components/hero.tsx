'use client';

import * as motion from 'motion/react-client';
import { useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils'; // optional: if you use shadcn/ui or similar
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"



const programs = [
    {
        subtitle: 'Introducing Nutrify 2.0: Multi-Food Mode, 552 New Foods and Share Food',
        color: 'bg-zinc-100',
        date: '09 Dec 2025',
    },
    {
        subtitle: ' Nutrify Goes to School: Teaching kids about whole food nutrition in a fun, interactive way',
        color: 'bg-zinc-100',
        date: '07 Nov 2024',
    },
    {
        subtitle: 'Introducing Nutrify 1.2.3: Whole Food Streaks, Homescreen Widgets, Quick Summaries and 41 New Foods',
        color: 'bg-zinc-100',
        date: '04 Nov 2024',
    },
    {
        subtitle: "Introducing Nutrify 1.2: Calorie and Macronutrient Goals, Breakdowns and 57 New Foods",
        color: 'bg-zinc-100',
        date: '29 May 2024',
    },
    {
        subtitle: 'Read the launch blog post',
        color: 'bg-zinc-100',
        date: '12 Feb 2024',
    },
];

const slideImages = [
    '/images/food-1.jpg',
    '/images/food-1.jpg',
    '/images/food-1.jpg',
    '/images/food-1.jpg'
]

export default function Hero() {
    const introImageRef = useRef(null);
    // Track scroll for the image section
    const { scrollYProgress } = useScroll({
        target: introImageRef,
        offset: ['start end', 'center center'], // triggers while scrolling through it
    });

    // Convert 0 → 1 into "0%" → "100%"
    const widthProgress = useTransform(scrollYProgress, [0, 1], ['80%', '95%']);
    const cornerRadiusProgress = useTransform(
        scrollYProgress,
        [0, 1],
        ['1rem', '1.5rem']
    );

    const transition = {
        duration: 1.4,
        ease: [0, 0.71, 0.2, 1.01],
    };
    return (
        <div className="w-full h-[80%]">
            <motion.div className="w-full h-full flex flex-col flex-col-3 gap-8 items-center justify-center box text-black">
                <div className="flex-1" />
                <motion.div
                    className="py-10 flex-1"
                    initial={{ y: 50, filter: 'blur(8px)', scale: 0.9 }}
                    animate={{ y: -20, filter: 'none', scale: 1 }}
                    transition={transition}>
                    <motion.div>
                        <motion.h1 className="text-7xl md:text-8xl font-playfair">
                            nutrify
                        </motion.h1>
                    </motion.div>
                    <motion.div>
                        <motion.p className="text-xs p-2 font-poppins">
                            verb (
                            <motion.span className="italic">
                                transitive
                            </motion.span>
                            )
                            <br />
                            <motion.span className="italic">
                                nu·tri·fy /ˈnuːtrəˌfaɪ/{' '}
                            </motion.span>
                            <br />
                            1. To supply with nutrients; to make nourishing.
                            <br />
                        </motion.p>
                    </motion.div>
                </motion.div>
                <motion.div
                    className="py-15 px-10"
                    initial={{ y: 50, filter: 'blur(5px)', opacity: 0 }}
                    animate={{ y: -5, filter: 'none', opacity: 1 }}
                    transition={transition}>
                    <motion.p className="font-poppins text-sm">
                        Whole food scanner, nutrition and calorie tracker,
                        visual healthy food diary.
                    </motion.p>
                </motion.div>
            </motion.div>
            <div
                ref={introImageRef}
                className="w-full xl:max-w-4xl xl:mx-auto flex justify-center items-center mt-10">
                <motion.div
                    className="overflow-hidden"
                    style={{
                        width: widthProgress,
                        height: '20%',
                        borderRadius: cornerRadiusProgress,
                    }} // <-- animated width
                >

                    <Carousel
                        plugins={[
                            Autoplay({
                                delay: 2000,
                            }),
                        ]}
                        className="w-full"
                    >
                        <CarouselContent className='rounded-2xl'>
                            {slideImages.map((src, index) => (
                                <CarouselItem key={index}>
                                    <motion.img src={src} className="w-full rounded-xl" />
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        {/* Buttons under slides */}
                        <div className="flex justify-center gap-4 mt-4">
                            <CarouselPrevious className="static translate-y-0" />
                            <CarouselNext className="static translate-y-0" />
                        </div>
                    </Carousel>

                </motion.div>
            </div>
            <div className="min-h-screen py-16 px-8">
                <div className="flex justify-center items-center py-10">
                    <h2 className="text-5xl font-thin font-playfair tracking-tight">
                        updates
                    </h2>
                </div>
                <div className="max-w-6xl mx-auto space-y-8">
                    <div className="space-y-6 font-poppins">
                        {programs.map((program, index) => (
                            <motion.div
                                key={program['date']}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                animate={{ x: 0 }}
                                whileHover={{ x: 10 }}
                                transition={{ type: 'spring', stiffness: 100 }}
                                className="group">
                                <motion.div

                                    className={cn(
                                        'rounded-3xl p-10 flex items-center justify-between cursor-pointer transition-all duration-300',
                                        program.color,
                                        'border border-transparent hover:border-gray-200 hover:shadow-lg hover:bg-[#1c1c1c] hover:text-white'
                                    )}>
                                    <div className="grid grid-rows-2 gap-2">
                                        <h2 className="text-3xl font-bold font-playfair tracking-tight">
                                            {program.date}
                                        </h2>
                                        <p>{program.subtitle}</p>
                                    </div>
                                    <div className="flex items-center gap-16">
                                        <ArrowRight
                                            size={40}
                                            className="text-gray-700 hover:text-gray-300 transition-colors duration-200"
                                        />
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>

                    {/* All Programs Link */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="pt-8">
                        <motion.a
                            href="#"
                            className="inline-flex items-center gap-3 text-lg font-medium text-gray-700 hover:text-black transition-colors"
                            whileHover={{ x: 8 }}>
                            All Programs (11)
                            <ArrowRight size={24} />
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
