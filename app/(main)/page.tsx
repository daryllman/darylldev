'use client'

import { AuroraBackground } from '@/components/ui/aurora-background'
import Link from 'next/link'
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button'

export default function Home() {
    return (
        <AuroraBackground>
            <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
                <h1 className="text-6xl md:text-8xl font-bold mb-6 text-black">
                    Daryll Wong
                </h1>
                <p className="text-2xl md:text-3xl mb-12 text-black font-light max-w-3xl">
                    Software Engineer crafting meaningful digital experiences.
                </p>
                <Link
                    href="http://daryllwong.notion.site"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <InteractiveHoverButton>
                        View Portfolio
                    </InteractiveHoverButton>
                </Link>
            </div>
        </AuroraBackground>
    )
}
