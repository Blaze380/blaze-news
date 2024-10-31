"use client"
import React, { useState } from "react";
import {
    Pagination as Paging,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "./ui/pagination";
import { ReactElement } from "react";
import {Skeleton} from './ui/skeleton'
type PaginationProps={
    totalRows:number;
    nOfRowPerPage:number;
}

export default function Pagination (): ReactElement {
    const [pagDetails,setPagDetails]=useState<PaginationProps & {pages:number}>({
        totalRows:100,
        nOfRowPerPage:10,
        pages:10,
    });

    return (
        <div className="pl-4 pr-4 pt-10 pb-10">
            <Paging>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href="#" size={undefined} />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#" size={undefined}>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#" size={undefined}>2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#" size={undefined}>3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#" size={undefined}>{pagDetails.pages}</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href="#" size={undefined} />
                    </PaginationItem>
                </PaginationContent>
            </Paging>
            <Skeleton >asdasd</Skeleton>
        </div>

    );
};
