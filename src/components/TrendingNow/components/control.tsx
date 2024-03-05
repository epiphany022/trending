import { MouseEventHandler, useMemo } from "react";
import cn from "classnames";

interface ControlProps {
    visible?: boolean;
    direction: "prev" | "next";
    onClick: MouseEventHandler<HTMLDivElement> | undefined;
}

export default function Control({ visible, direction, onClick }: ControlProps) {

    const { isPrev, icon, className } = useMemo(() => {
        const isPrev = direction === "prev";
        return {
            isPrev,
            icon: isPrev ? Prev: Next,
            className: isPrev ?  "left-0 control-prev": "right-0 control-next"
        }
    }, [direction]);

    return (<div className={cn("absolute control z-20 top-0 flex items-center justify-center cursor-pointer", {
        "hidden": !visible
    }, className)}>
        <div 
            className={cn("w-12 h-12 rounded-full border border-white flex items-center justify-center",{
                "rotate-180": isPrev
            })}
            onClick={e => {
                e.preventDefault();
                e.stopPropagation();
                onClick?.(e);
            }}    
        >
            { icon }
        </div>
    </div>)
}

const Prev = (<svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 17L1 9L12 1" stroke="white" strokeWidth="2" strokeLinejoin="bevel"/>
</svg>);

const Next = (<svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L12 9L1 17" stroke="white" strokeWidth="2" strokeLinejoin="bevel"/>
</svg>);