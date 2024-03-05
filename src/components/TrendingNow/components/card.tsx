import { ReactNode } from "react";

interface CardProps<T> {
    bgImage: T;
    hoverBgImage: T;
    children: T;
}

export default function Card({ bgImage, hoverBgImage, children }: CardProps<ReactNode>) {
    return (<div className='relative w-416px h-278px'>
        <div className='relative w-full h-full z-10 transition-transform hover:translate-4'>
            <div className='absolute w-full h-full'>
                { bgImage }
            </div>
            <section className='absolute w-full h-full overflow-hidden'>
                <div className='py-9 px-10 relative'>
                    { children }
                </div>
            </section>
        </div>
        <div className='absolute w-full h-full z-0 top-0'>
            { hoverBgImage }
        </div>
    </div>)
}