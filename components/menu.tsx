
import Link from "next/link";
import "./menu.css"

export default function Menu (){

    return(
        <nav className="menu">
            <div className="menu-left"> 
                <Link href="/">Home</Link> 
                <Link href="/stories">Stories</Link>

            </div>
            <div className="menu-right">
                <Link href="/login" className="login-btn">
                Login
                </Link> 

            </div>

            
        </nav>
    );
}