import contactImg from ".././media/contact.png"
import aboutImg from ".././media/info.png"
import homeImg from ".././media/home.png"
import portofolioImg from ".././media/portofolio.png"
import linkImg from ".././media/link.png"

function NavBar()
{
return (
<nav className="navbar">
<div className="navbuttons">
<a href="/"><img src={homeImg} className="navbutton" alt="Home"></img></a>
<a href="/info"><img src={aboutImg} className="navbutton" alt="About"></img></a>
<a href="/portofolio"><img src={portofolioImg} className="navbutton" alt="Projects"></img></a>
<a href="/contact"><img  src={contactImg} className="navbutton" alt="Contact"></img></a>
<a href="/link"><img  src={linkImg} className="navbutton" alt="Link"></img></a>
</div>
</nav>
);
}

export default NavBar;