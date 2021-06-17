import Slider from "react-slick";

const Noticias = ({nt}) => {
	if (!nt.response) {
		return (
			<div>Error al cargar la información.</div>
		);
    }

	let principal_cabeza = nt.pr.cabeza;
	let principal_sumario = nt.pr.sumario;
	let principal_slug = nt.pr.slug;
	let principal_img = nt.pr.img.images[0].img;
	let posts = nt.notas;
	let reco = nt.recomendado.notas;

	const SliderSettings = {
		dots: false,
		infinite: false,
		centerPadding: 0,
		slide: ".qt-item",
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					swipe: true,
					touchMove: true,
					infinite: false,
				}
			},
			
		]
		
	  };


    return(
		<>
		<div id="home">
            <div className="qt-container qt-spacer-m qt-section" style={{paddingTop: 2+'em'}}>
				<div className="qt-part-archive-item qt-part-item-post-hero">
					<div className="qt-item-header">
						<div className="qt-header-mid qt-vc">
							<div className="qt-vi">
						<h2 className="qt-title">
							<a href={'/'+principal_slug+'/'}  className="qt-text-shadow">{principal_cabeza}</a>
						</h2>
								<div className="qt-the-content qt-spacer-s small hide-on-med-and-down ">
									<p className="qt-spacer-s qt-text-shadow">{principal_sumario}</p>
								</div>
							</div>
						</div>
						<div className="qt-header-bg"  style={{backgroundImage:'url("'+principal_img+'")', backgroundPosition:'50% 30%'}}>
							<img src={principal_img} alt="Featured image" width="1170" height="512" />
						</div>
					</div>
				</div>
			</div>

<div className="qt-container qt-spacer-m">
  <div className="qt-slickslider-container qt-slickslider-externalarrows">
	<div className="row">
	  <Slider className="qt-slickslider qt-slickslider-multiple qt-text-shadow slick-initialized slick-slider" {...SliderSettings}>
		{posts.map((post) => (
			<div className="qt-item" key={post.slug}>
				<div className="qt-part-archive-item qt-vertical">
					<div className="qt-item-header">
						<div className="qt-header-top">
							
						
						</div>
						<div className="qt-header-mid qt-vc" style={{paddingBottom: '20px'}}>
							<div className="qt-vi">
								<h3 className="qt-title">
									<a href={'/'+post.slug+'/'}  className="qt-text-shadow">
										{post.cabeza}
									</a>
								</h3>
							</div>
						</div>
						<div className="qt-header-bg" style={{backgroundImage: 'url('+post.img.images[0].img.replace("_hd", "preview_")+')',backgroundSize: 'cover',
    backgroundPosition: 'top center'}}>
							<img src={post.img.images[0].img.replace("_hd", "preview_")} alt="<?=$nt[$i]->cabeza?>" width="690" height="302" />
						</div>
					</div>
				</div>
			</div>	
		))}
			
		</Slider>
	</div>
</div>
</div>


        <div className="qt-container qt-spacer-m qt-section" id="nettv">
				<h3 className="qt-caption-med"><span style={{backgroundColor: '#243B7C!important'}}>Te recomendamos</span></h3>
				<hr className="qt-spacer-s" />
				<div className="qt-part-archive-item qt-part-item-post-hero">
					<div className="qt-item-header">
						<div className="qt-header-mid qt-vc">
							<div className="qt-vi">
								
								<h2 className="qt-title">
							<a href={'/'+nt.recomendado.pr.slug+'/'}  className="qt-text-shadow">{nt.recomendado.pr.cabeza}</a>
						</h2>
								<div className="qt-the-content qt-spacer-s small hide-on-med-and-down ">
									<p className="qt-spacer-s qt-text-shadow">{nt.recomendado.pr.sumario}</p>
									<p><a href={'/'+nt.recomendado.pr.slug+'/'} target="_blank" className="qt-btn qt-btn-l qt-btn-primary "><i className="dripicons-media-play"></i></a></p>
								</div>
							</div>
						</div>
						<div className="qt-header-bg" style={{backgroundImage: 'url('+nt.recomendado.pr.img.images[0].img.replace("_hd", "preview_")+')',backgroundSize: 'cover',
    backgroundPosition: 'top center'}}>
							<a href={'/'+nt.recomendado.pr.slug+'/'} target="_blank" className="qt-text-shadow"><img src={nt.recomendado.pr.img.images[0].img.replace("_hd", "preview_")} alt="Featured image" width="1170" height="512" /></a>
						</div>
					</div>
				</div>
		</div>

<div className="qt-container qt-spacer-m qt-section">
				<div className="row">
				{reco.map((rc) => (
                      <div className="col s12 m6 l3" key={rc.slug}>
							<div className="qt-part-archive-item qt-part-archive-item-small-text">
							<div className="qt-item-header">
								<div className="qt-header-bottom">
									<a href="https://netnoticias.mx<?=$ntv[$i]->nlink?>" target="_blank" className="qt-btn qt-btn-primary qt-readmore"><i className="dripicons-media-play"></i></a>
								</div>
								<div className="qt-header-bg" style={{backgroundImage: 'url('+rc.img.images[0].img.replace("_hd", "preview_")+')',backgroundSize: 'cover',
    backgroundPosition: 'top center'}}>
									<img src={rc.img.images[0].img.replace("_hd", "preview_")} alt="Featured image" width="690" height="302" />
								</div>
							</div>
							<h4 className="qt-title">
								<a href="https://netnoticias.mx<?=$ntv[$i]->nlink?>" target="_blank" className="qt-spacer-s qt-ellipsis-2 qt-t">
									{rc.cabeza}
								</a>
							</h4>
						</div>
					</div>		
					))}
					
							
						</div>
					</div>
			</div>
</>
    )
}

 

export default Noticias