import Moment from "moment";

const Sitem = (props) => {
    let conair = props.current  ? "qt-btn-primary" : "qt-btn-secondary";
    if(props.current){
        var thetime = 'Estás escuchando:';
    } else {
        Moment.locale('es');
        let preformat = props.time
        preformat = Moment(preformat, 'HH:mm:ss').format('h:mm A');
        var thetime = preformat
    }
    return (
        <>
						<div className="qt-part-archive-item qt-part-item-post-hero">
							<div className="qt-item-header">
								<div className="qt-header-mid qt-vc">
									<a href="#"  className={`qt-btn qt-btn-l c-onair hide-on-med-and-down ${conair}`} tabIndex="-1" style={{position: 'absolute'}}>{thetime}</a>
										<div className="qt-vi">
										<h2 className="qt-title">
											<a href="#" className="qt-text-shadow">{props.title}</a>
										</h2>
										<div className="ct-cond">Con {props.who}</div>
										<div className="qt-the-content qt-spacer-s small">
											<p className="qt-spacer-s qt-text-shadow hide-on-med-and-down">{props.desc}</p>
											<p><a href="#" className="button-playlistswitch qt-btn qt-btn-secondary" tabIndex="-1" data-activates="channelslist"><i className="icon dripicons-media-play"></i></a></p>
										</div>
									</div>
								</div>
								<div className="qt-header-bg" style={{backgroundImage: 'url(https://cdn2.ntmx.me/'+props.img+')',backgroundSize: 'cover',
    backgroundPosition: 'top center'}}>
									<img src={'https://cdn2.ntmx.me/'+props.img}  width="1170" height="512" />
								</div>
							</div>
						</div>
        </>
    )
}

export default Sitem