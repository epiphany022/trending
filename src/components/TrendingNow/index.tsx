"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Basic, Bitcoin, Control, Intro, Moonshot } from "./components";

export default function TrendingNow() {
    const [rect, setRect] = useState<DOMRect>();
    const carousel = useRef<HTMLDivElement>(null);
    const container = useRef<HTMLDivElement>(null);
    const [step, setStep] = useState<number>(0);

    useEffect(() => {
        getCarouselRect();
        window.addEventListener('resize', getCarouselRect, false);

        return () => {
            window.removeEventListener('resize', getCarouselRect, false);
        }
    }, []);

    useEffect(() => {
        if (carousel.current && container.current && rect) {
            carousel.current.style.transform = `translateX(-${step * 464}px)`
        }
    }, [step]);

    const isNextVisible = useMemo(() => {
        return (rect && container.current)
            ? rect.width - (step * 464) - container.current.offsetWidth - (64 * 2) >= 120
            : false
    }, [step, rect]);

    const getCarouselRect = () => {
        const attrs = carousel.current?.getBoundingClientRect();
        if (attrs) {
            setStep(0);
            setRect(attrs);
        }
    };

    return (<div ref={container} className="relative m-8 p-8 overflow-hidden">
        <Control
            visible={step > 0}
            direction="prev"
            onClick={e => {
                if (rect) {
                    setStep(value => {
                        return value - 1 === 0
                            ? 0
                            : value - 1
                    })
                }
            }}
        />
        <div ref={carousel} className="flex gap-12 transition-transform w-1808px">
            <Intro />
            <Moonshot />
            <Basic />
            <Bitcoin />
        </div>
        <Control
            visible={isNextVisible}
            direction="next"
            onClick={e => {
                if (rect) {
                    setStep(value => {
                        return value * 416 > rect.width
                            ? value
                            : value + 1
                    })
                }
            }}
        />
    </div>)
}