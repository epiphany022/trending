import Card from "./card";

export default function Moonshot() {
    return (<Card
        bgImage={bgImage}
        hoverBgImage={hoverBgImage}
    >
        <article className="flex flex-col gap-4">
            <h5 className="text-white">Moonshot 2023 Summer Hackathon</h5>
            <dl className="flex gap-4">
                <dd className="mr-0 text-white text-xxs border border-gray-500 rounded-intro py-1 px-2">All Tracks</dd>
                <dd className="mr-0 text-white text-xxs border border-gray-500 rounded-intro py-1 px-2">Solidity</dd>
                <dd className="mr-0 text-white text-xxs border border-gray-500 rounded-intro py-1 px-2">ZK</dd>
            </dl>
        </article>
        <footer className="mt-12 text-white flex flex-col gap-4">
            <div className="flex w-full place-content-between border-b border-solid border-gray-500 pb-px">
                <span className="text-gray-400 text-xs">Signup</span>
                <span className="text-sm font-light">4/15 - 6/15</span>
            </div>
            <div className="flex w-full place-content-between border-b border-solid border-gray-500 pb-px">
                <span className="text-gray-400 text-xs">Event</span>
                <span className="text-sm font-light">6/15 - 7/1</span>
            </div>
            <div className="flex w-full place-content-between border-b border-solid border-gray-500 pb-px">
                <span className="text-gray-400 text-xs">Grant size</span>
                <span className="text-sm font-light">200K</span>
            </div>
        </footer>
    </Card>)
}

const bgImage = (<svg
    width="416"
    height="278"
    viewBox="0 0 416 278"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
>
    <path
        d="M31.9997 0L384.001 -1.38868e-06C401.674 -6.2174e-07 416.001 14.3268 416.001 31.9999L416.001 78.1226C416.001 84.5537 414.032 90.8306 410.358 96.1092L409.39 97.5011C402.176 107.866 402.456 121.697 410.083 131.762C413.923 136.829 416.001 143.012 416.001 149.37L416.001 246.001C416.001 263.674 401.674 278.001 384.001 278.001L31.9995 278C14.3264 278 -0.000438855 263.673 -0.00040756 246L-0.0002202 149.369C-0.000189402 143.011 2.07803 136.828 5.91781 131.761C13.545 121.696 13.8249 107.865 6.61132 97.5L5.64263 96.1081C1.96902 90.8295 -0.000186828 84.5527 -0.000217063 78.1216L-0.00036762 32.0001C-0.000427877 14.3269 14.3265 0 31.9997 0Z"
        fill="#131313"
    />
</svg>);

const hoverBgImage = (<svg
    width="416"
    height="278"
    viewBox="0 0 416 278"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
>
    <linearGradient
        id="moonshotGradient"
        x1="0%"
        y1="100%"
        x2="0%"
        y2="0%"
    >
        <stop
            offset="0%"
            style={{
                stopColor: "#719BFF",
                stopOpacity: 1
            }}
        />
        <stop
            offset="100%"
            style={{
                stopColor: "#DA8AFF",
                stopOpacity: 1
            }}
        />
    </linearGradient>
    <path
        d="M31.9997 0L384.001 -1.38868e-06C401.674 -6.2174e-07 416.001 14.3268 416.001 31.9999L416.001 78.1226C416.001 84.5537 414.032 90.8306 410.358 96.1092L409.39 97.5011C402.176 107.866 402.456 121.697 410.083 131.762C413.923 136.829 416.001 143.012 416.001 149.37L416.001 246.001C416.001 263.674 401.674 278.001 384.001 278.001L31.9995 278C14.3264 278 -0.000438855 263.673 -0.00040756 246L-0.0002202 149.369C-0.000189402 143.011 2.07803 136.828 5.91781 131.761C13.545 121.696 13.8249 107.865 6.61132 97.5L5.64263 96.1081C1.96902 90.8295 -0.000186828 84.5527 -0.000217063 78.1216L-0.00036762 32.0001C-0.000427877 14.3269 14.3265 0 31.9997 0Z"
        fill="url(#moonshotGradient)"
    />
</svg>);