"use client"
import './Nav.css'
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function AuthButton() {
    const { data: session } = useSession();
    if (session) {
        return (
          <>
          <nav className="nav">
          <div className="nav__container">
            <p className="nav__logo">{session.user.name}</p> <br />
            <button className="Log_buton" onClick={() => signOut()}>Sign out Discord</button>
            </div>

            </nav> 
            <br />
      
          </>
        );
      }
      return (
        <>
        <nav className="nav">
          <div className="nav__container">
          <p className="nav__logo">Not signed in </p>
          <button className="Log_buton" onClick={() => signIn()}>Sign in Discord</button>
          </div>
          </nav> 
        </>
      );
}

export default function Nav() {
    return(
        <div>
            <AuthButton />
        </div>
    );
}