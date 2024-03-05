import Card from "./card";

export default function Basic() {
    return (<Card
        bgImage={bgImage}
        hoverBgImage={hoverBgImage}
    >
        <header className="line line-basic"></header>
        <article className="pt-7 flex flex-col gap-4">
            <h5 className="text-white">Web 3.0 Programming Basics</h5>
            <dl className="flex">
                <dd className="mr-0 text-white text-xxs border border-gray-500 rounded-intro py-1 px-2">Beginner</dd>
            </dl>
            <span className="text-gray-400 text-xs">Basic concepts in programming of Solidity. Topics include: variables, functions, flow control, error handling, data structure.</span>
        </article>
        <footer className="mt-10 text-white text-xs flex gap-7">
            <span>36 Hour</span>
            <span>5 Course</span>
        </footer>
    </Card>)
}

const bgImage = (<svg width="416" height="278" viewBox="0 0 416 278" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.57233e-07 238.001L9.35541e-07 39.9999C1.02238e-06 17.9085 17.9086 -6.26008e-05 40 -6.45321e-05L229.45 -8.10943e-05C238.544 -8.18894e-05 247.367 3.09901 254.464 8.7862L283.573 32.1138C290.67 37.801 299.493 40.9001 308.587 40.9001L376 40.9001C398.091 40.9001 416 58.8086 416 80.9L416 238C416 260.092 398.091 278 376 278L40 278C17.9086 278 -1.56562e-06 260.092 1.57233e-07 238.001Z" fill="#131313" />
</svg>);

const hoverBgImage = (<svg 
    width="416" 
    height="278" 
    viewBox="0 0 416 278" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
>
    <linearGradient
        id="basicGradient"
        x1="0%"
        y1="100%"
        x2="0%"
        y2="0%"
    >
        <stop
            offset="0%"
            style={{
                stopColor: "#D9E313",
                stopOpacity: 1
            }}
        />
        <stop
            offset="100%"
            style={{
                stopColor: "#3CBC34",
                stopOpacity: 1
            }}
        />
    </linearGradient>
    <path 
        d="M1.57233e-07 238.001L9.35541e-07 39.9999C1.02238e-06 17.9085 17.9086 -6.26008e-05 40 -6.45321e-05L229.45 -8.10943e-05C238.544 -8.18894e-05 247.367 3.09901 254.464 8.7862L283.573 32.1138C290.67 37.801 299.493 40.9001 308.587 40.9001L376 40.9001C398.091 40.9001 416 58.8086 416 80.9L416 238C416 260.092 398.091 278 376 278L40 278C17.9086 278 -1.56562e-06 260.092 1.57233e-07 238.001Z" 
        fill="url(#basicGradient)"
    />
</svg>);