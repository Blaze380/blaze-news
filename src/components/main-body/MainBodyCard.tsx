import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { CalendarDays } from "lucide-react";
import { ReactElement } from "react"

type CardProps = {
    newId: string;
    imgUrl: string;
    title: string;
    description: string;
    date: string
    category: string;
    altText: string
}
export default function MainBodyCard (props: CardProps): ReactElement {
    return (
        <Card className="w-64 h-96 max-sm:flex max-sm:items-center max-sm:w-full max-sm:h-48">
            <CardHeader className="relative p-0 max-sm:flex max-sm:items-center max-sm:justify-center">
                <p className="text-white bg-main absolute bottom-2 left-2 pl-1 pr-1">{props.category}</p>
                {/*eslint-disable-next-line @next/next/no-img-element */}
                <img className="w-full h-44 max-sm:h-full max-sm:w-60" src={props.imgUrl ? props.imgUrl : '/img.png'} alt={props.altText} />
            </CardHeader>
            <div className="max-sm:flex max-sm:items-center max-sm:w-[50%] max-sm:flex-col">
                <CardContent className="w-full p-2 h-40 ">
                    <CardTitle className="line-clamp-2 text-base text-justify">{props.title}</CardTitle>
                    <p className=" text-left w-full line-clamp-4   ">{props.description}</p>

                </CardContent>
                <CardFooter className="h-10 flex w-full  items-center ">
                    <CardDescription className="flex w-full h-full justify-start  space-x-2 items-center">
                        <CalendarDays />
                        <span>{props.date}</span>
                    </CardDescription>
                </CardFooter>
            </div>
        </Card>

    )
};
