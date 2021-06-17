import Header from '../theme_components/Header'
import Nav from '../theme_components/Nav'
import Footer from '../theme_components/Footer'

import HomeNoticias from '../componentes/home_noticias'
import HomeRadionet from '../componentes/home_radionet'

export default function Home({notas}) {
  return (
    <>
      <Header title="Radionet1490" ruta="portada"/>
         <div className="qt-parentcontainer">
           <Nav/>
            <div className="main-ct" id="main"> 
             <HomeNoticias nt={notas} />
             <HomeRadionet nt={notas.programacion} />
             </div>
         </div>

     
         <Footer />
      </>
  )
}

export const getStaticProps = async () => {
	const res = await fetch("https://api.ntmx.me/rnet/home");
	const notas = await res.json();
  
	return {
	  props: {
		notas,
	  },
	};
  };
