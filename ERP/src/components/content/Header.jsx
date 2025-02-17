import { Menu } from "../ui/Menu";
import React, { useState } from "react";

import { Logo } from '../ui/Logo';



export function Header(){

    const [menuOpen, setMenuOpen ] = useState()

    return (
        <>
            <div className="navbar justify-between px-4">
               <Logo/>
               
                <div className="navbar-end">
                    <svg
                        onClick={() => setMenuOpen(!menuOpen)} 
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
            	    {menuOpen && <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
                </div>
               
            </div>
            </>
    )
}