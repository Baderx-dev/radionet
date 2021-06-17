import Slider from "react-slick";
import Sitem from "./rnet_slide";


const NextControls = (nt) => {
  if(nt.next) { 
    return (
        <>
        {nt.next.map((prnext) => (
            <div  className="qt-slick-opacity-fx qt-item"> 
           <Sitem className="qt-slick-opacity-fx qt-item" key={prnext.p_name} current={false} time={prnext.hora} title={prnext.p_name} who={prnext.p_detail} desc={prnext.p_desc} img={prnext.p_foto} />
            </div>
           ))}
        </>
    )
  } else {
      return null;
  }
} 
const Radionet = ({nt}) => {
    const SliderSettings = {
        initialSlide: nt.current,
        slidesToScroll: 1,
                    pauseOnHover: true,
                    infinite: true,
                    autoplay: false,
                    autoplaySpeed: 10000,
                    centerPadding: 0,
                    slide: ".qt-item",
                    dots: true,
                    variableWidth: true,
                    arrows: true,
                    centerMode: true,
                    slidesToShow: 1,
                    adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    swipe: true,
                    touchMove: true,
                    infinite: true,
                    centerMode: true,
                    dots: false,
                }
            },
            
        ]
        
      };
   
    return (
        <div id="programacion">
            <div className="qt-slickslider-container">
            <Slider className="qt-slickslider qt-slickslider-single qt-text-shadow qt-black-bg" {...SliderSettings}>
              

           
                
                
                
               {nt.all.map((prprev) => (
                <div  className="qt-slick-opacity-fx qt-item"> 
               <Sitem className="qt-slick-opacity-fx qt-item" key={prprev.p_name} current={false} time={prprev.hora} title={prprev.p_name} who={prprev.p_detail} desc={prprev.p_desc} img={prprev.p_foto} />
                </div>
               ))}
           
            </Slider>
            </div>
        </div>
    )
}

export default Radionet