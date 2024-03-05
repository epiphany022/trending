import Card from "./card"

export default function Intro() {

    return (<Card
        bgImage={bgImage}
        hoverBgImage={hoverBgImage}
    >
        <header className="line line-intro"></header>
        <article className="pt-7 flex flex-col gap-4">
            <h5 className="text-white">Introduction to programming</h5>
            <dl className="flex">
                <dd className="mr-0 text-white text-xxs border border-gray-500 rounded-intro py-1 px-2">Beginner</dd>
            </dl>
            <span className="text-gray-400 text-xs">This course covers the most basic concepts in programming using Solidity as an example.</span>
        </article>
        <footer className="mt-12 text-white text-xs flex gap-7">
            <span>36 Hour</span>
            <span>5 Course</span>
        </footer>
    </Card>)
}

const bgImage = (<svg
    width="416"
    height="279"
    viewBox="0 0 416 279"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
>
    <path
        d="M32 0.000757482L384 6.31236e-05C401.673 2.82614e-05 416 14.3269 416 32.0001L416 163.027C416 168.42 414.637 173.726 412.037 178.451L410.141 181.897C404.656 191.869 404.879 204.003 410.727 213.767L411.451 214.975C414.428 219.944 416 225.628 416 231.42L416 246.366C416 264.039 401.673 278.366 384 278.366L32.0001 278.366C14.327 278.366 0.000171546 264.039 0.000141802 246.366L0.000111939 231.42C8.16747e-05 225.628 1.57219 219.944 4.54876 214.975L5.27291 213.766C11.1214 204.003 11.3445 191.869 5.85879 181.897L3.96288 178.451C1.36321 173.726 8.41792e-05 168.42 8.44154e-05 163.027L9.01517e-05 32.0008C9.09255e-05 14.3277 14.3269 0.000792344 32 0.000757482Z"
        fill="#131313"
    />
</svg>);

const hoverBgImage = (<svg
    width="416"
    height="279"
    viewBox="0 0 416 279"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
>
    <linearGradient
        id="introGradient"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="0%"
    >
        <stop
            offset="0%"
            style={{
                stopColor: "#0891D5",
                stopOpacity: 1
            }}
        />
        <stop
            offset="100%"
            style={{
                stopColor: "#38C1A5",
                stopOpacity: 1
            }}
        />
    </linearGradient>
    <path
        d="M32 0.000757482L384 6.31236e-05C401.673 2.82614e-05 416 14.3269 416 32.0001L416 163.027C416 168.42 414.637 173.726 412.037 178.451L410.141 181.897C404.656 191.869 404.879 204.003 410.727 213.767L411.451 214.975C414.428 219.944 416 225.628 416 231.42L416 246.366C416 264.039 401.673 278.366 384 278.366L32.0001 278.366C14.327 278.366 0.000171546 264.039 0.000141802 246.366L0.000111939 231.42C8.16747e-05 225.628 1.57219 219.944 4.54876 214.975L5.27291 213.766C11.1214 204.003 11.3445 191.869 5.85879 181.897L3.96288 178.451C1.36321 173.726 8.41792e-05 168.42 8.44154e-05 163.027L9.01517e-05 32.0008C9.09255e-05 14.3277 14.3269 0.000792344 32 0.000757482Z"
        fill="url(#introGradient)"
    />
</svg>);
