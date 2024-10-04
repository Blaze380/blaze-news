"use client";
import { ICONS, socialNetwork } from "@/lib/utils";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@radix-ui/react-navigation-menu";
import Image from "next/image";
import React, { useEffect } from "react";
import { ReactElement } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { BiMenuAltRight } from "react-icons/bi";
import { useAnimate } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
// import { motion } from "framer-motion";
export default function Header (): ReactElement {
    const [navRef, animate] = useAnimate();
    const windowSizes = {
        tablet: 768,
    }
    // let isMounted: boolean = false;
    const [windowWidth, setWindowWidth] = useState<number>(0);
    let isSideBarClosed: boolean = true;
    function animateSideBar (): void {
        const rightPos: number | string = isSideBarClosed && windowWidth <= windowSizes.tablet ? 0 : "-18rem";
        isSideBarClosed = !isSideBarClosed;
        animate(navRef.current, {
            right: rightPos,
        })

    }
    if (windowWidth > windowSizes.tablet) {
        isSideBarClosed = true;
        animate(navRef.current, {
            right: "-18rem",
        }, { duration: .1 });
    }
    useEffect((): () => void => {

        const handleResize: () => void = (): void => setWindowWidth(window.innerWidth);
        window.onresize = (): void => handleResize();
        return (): void => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <header className="flex flex-col shadow-md w-full max-md:overflow-hidden  ">
            <div className="h-7 bg-black flex justify-between pl-6 pr-6 w-full items-center text-white">
                <div className="flex space-x-2 w-9/12">
                    <p>Maputo 35º C</p>
                    <p className="max-md:hidden block"> Sexta-feira, 21 de setembro 2024</p>
                </div>
                <div className="flex justify-evenly items-center w-2/12 ">
                    <a className="hover:text-main transition-colors duration-200" href={socialNetwork.github}><FaGithub size={20} /></a>
                    <a className="hover:text-main transition-colors duration-200" href={socialNetwork.linkedIn}><FaLinkedin size={20} /></a>
                </div>
            </div>
            <main className="flex justify-between pl-4 pr-4 items-center h-12 w-full  ">
                <div className="w-fit">
                    <Link href={"/"}><Image src={""} alt="BlazeNews Logo" /></Link>
                </div>
                {/* Side Menu */}
                {/* <div ref={navRef} className="flex justify-between max-md:justify-evenly max-md:flex-col-reverse items-center max-md:absolute max-md:top-7 max-md:h-full max-md:bg-slate-600 max-md:-right-72 max-md:w-60 "> */}
                <div ref={navRef} className={`flex items-center ${ windowWidth > windowSizes.tablet ? " justify-between" : "flex-col-reverse justify-evenly space-y-20 absolute top-7 h-full bg-slate-600 -right-72 w-60" }`}>
                    <NavigationMenu className="border-2 border-red-700 max-md:w-full">
                        {windowWidth <= windowSizes.tablet && (
                            <button className={` hover:text-main transition-colors duration-200 ${ windowWidth > windowSizes.tablet ? "hidden" : "block absolute top-3 left-3 " }`} onClick={animateSideBar}>
                                <IoSearch size={ICONS.size} />
                            </button>
                        )
                        }

                        <NavigationMenuList className="flex justify-between space-x-10 max-md:space-x-0 max-md:flex-col  max-md:items-center">
                            <NavigationMenuItem className="hover:text-main duration-200 transition-all">
                                <NavigationMenuLink href="/">Home</NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem className="hover:text-main duration-200 transition-all">
                                <NavigationMenuLink href="/">Newsletter</NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem className="hover:text-main duration-200 transition-all">
                                <NavigationMenuLink href="/">Contacto</NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    {
                        windowWidth <= windowSizes.tablet && (
                            <div className="flex justify-center items-center border-2 w-full  border-green-700">
                                <IoSearch size={ICONS.size} />
                            </div>
                        )}
                </div>
                {
                    windowWidth > windowSizes.tablet ? (
                        <div className="flex  justify-center items-center">
                            <button> <IoSearch size={ICONS.size} /></button>
                        </div>
                    ) : (
                        <div className="flex  justify-center items-center">
                            <button onClick={animateSideBar}><BiMenuAltRight size={ICONS.size} /></button>
                        </div>
                    )}

            </main>
        </header>
    )
};