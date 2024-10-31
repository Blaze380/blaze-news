import Link from "next/link";
import { ReactElement } from "react";

type TabProps={
    imageSrc:string;
    title:string;
    time:string;
    newsId:string
}

export default function LeftTabElement (props:TabProps): ReactElement {
    return (
        <div className="flex justify-evenly items-center space-x-2 border-2 border-green-600 w-full h-16   max-md:flex-col max-md:w-40 max-md:h-48 max-nm:flex-row max-nm:w-full max-nm:h-20">
            {/* Image */}
            <div className="max-md:w-full max-nm:w-24">
                {/*  eslint-disable-next-line @next/next/no-img-element */}
                <img className="w-24 max-md:w-full  h-16 max-md:h-28 max-nm:h-16 max-nm:w-24"  src={props.imageSrc} alt="Recent post" />
            </div>
            {/* Title  */}
            <div className="flex flex-col space-x-1 w-full">
                <Link href={''} className="font-bold line-clamp-1 max-md:line-clamp-2 max-nm:line-clamp-1 max-md:text-lg  hover:text-main transition-colors duration-300">{props.title}</Link>
                <hr className=""/>
                <p className="max-md:h-7"><span className="font-bold">*</span>{props.time}</p>
            </div>
        </div>
    );
}