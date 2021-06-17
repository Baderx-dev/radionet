import { Link, animateScroll as scroll } from "react-scroll";

function Nav(){
    return (
        <>
        <div className="nav-fix">
  		<div className="qt-menubar-top  qt-content-primary hide-on-large-and-down">
			<ul>
				<li><a href="https://netnoticias.mx/" target="_blank"><i className="dripicons-chevron-right"></i>Netnoticias.mx</a></li>
				<li><a href="http://revistanet.mx/" target="_blank"><i className="dripicons-chevron-right"></i>RevistaNet</a></li>
				<li><a href="https://netnoticias.mx/net-tv/" target="_blank"><i className="dripicons-chevron-right"></i>NetTV</a></li>
				<li className="right"><a href="https://www.facebook.com/radionet1490am/" target="_blank"><i className="qticon-facebook qt-socialicon"></i></a></li>
				<li className="right"><a href="https://twitter.com/netnoticiasmx" target="_blank"><i className="qticon-twitter qt-socialicon"></i></a></li>
				<li className="right"><a href="https://www.youtube.com/channel/UCL9oj3aUS8YwmmDP4Y09OIw" target="_blank"><i className="qticon-youtube qt-socialicon"></i></a></li>
			</ul>
		</div>
		<nav className="qt-menubar nav-wrapper qt-content-primary ">
			<ul className="qt-desktopmenu hide-on-xl-and-down">
				<li className="qt-logo-link"><img src="/logrnet_color.png" /></li>
				<li><Link className="linkto" activeClass="qt-active"  to="home" offset={-150} spy={true} smooth={true} duration={500}>Inicio</Link></li>
				<li><Link className="linkto" activeClass="qt-active"  to="programacion" spy={true} smooth={true} duration={500}>Programación</Link></li>
				<li><a href="https://www.facebook.com/pg/radionet1490am/videos/" target="_blank">En vivo</a></li>
				
				<li className="right"><a href="player.php" className="qt-popupwindow" data-name="Music Player" data-width="320" data-height="500"><i className="icon dripicons-duplicate"></i> Escuchar en Popup</a></li>
				<li className="right"><a href="#!" className="button-playlistswitch" data-activates="channelslist"><i className="icon dripicons-media-play"></i> Escuchar ahora</a></li>
			</ul>
			<ul className="qt-desktopmenu hide-on-xl-only ">
				<li><a href="#" data-activates="qt-mobile-menu" className="button-collapse qt-menu-switch qt-btn qt-btn-primary qt-btn-m"><i className="dripicons-menu"></i></a></li>
				<li className="qt-logo-link" style={{width: '250px', textAlign: 'center'}}><img src="/logrnet_color.png" style={{height:  '56px', margin:'0 auto'}} /></li>
			</ul>
		</nav>
		<div id="qt-mobile-menu" className="side-nav qt-content-primary">
			<ul className=" qt-side-nav">
				<li><a href="https://netnoticias.mx/" target="_blank"><i className="dripicons-chevron-right"></i>Netnoticias.mx</a></li>
				<li><a href="http://revistanet.mx/" target="_blank"><i className="dripicons-chevron-right"></i>RevistaNet</a></li>
				<li><a href="https://netnoticias.mx/net-tv/" target="_blank"><i className="dripicons-chevron-right"></i>NetTV</a></li>
			</ul>
		</div>
	  </div>	  
		<ul className="qt-mobile-toolbar qt-content-primary-dark qt-content-aside hide-on-large-only">
			<li><a href="page-popup.html" className="qt-popupwindow" data-name="Music Player" data-width="320" data-height="500"><i className="icon dripicons-duplicate"></i></a></li>
			<li><a href="#" className="button-playlistswitch" data-activates="channelslist"><i className="icon dripicons-media-play"></i></a></li>
		</ul>
        </>
    )
}

export default Nav