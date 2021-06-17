import Head from 'next/head'

function Header(props) {
  switch(props.ruta){
    case 'portada':
      return (
        <Head>
          <title>{props.title}</title>
          <link rel="icon" href="/favicon.ico" />
          <link href='fonts/dripicons/webfont.css' rel='stylesheet' type='text/css' />
      <link href='fonts/qticons/qticons.css' rel='stylesheet' type='text/css' />
      <link href='components/slick/slick.css' rel='stylesheet' type='text/css' />
      <link href='components/swipebox/src/css/swipebox.min.css' rel='stylesheet' type='text/css' />
      <link rel="stylesheet" type="text/css" href="components/countdown/css/jquery.classycountdown.css" />
      <link rel="stylesheet" type="text/css" href="components/soundmanager/templates/qtradio-player/css/flashblock.css" />
      <link rel="stylesheet" type="text/css" href="components/soundmanager/templates/qtradio-player/css/qt-360player-volume.css" />
      <link rel="stylesheet" href="css/qt-main.css" />
      <link rel="shortcut icon" href="/favicon_62x62.png?2" />
      <link rel="stylesheet" href="css/qt-typography.css" />
  
  
        </Head>
  
      )
    break;
    default:
      return (
        <Head>
          <title>{props.title}</title>
          <link rel="icon" href="/favicon.ico" />
          <link href='/fonts/dripicons/webfont.css' rel='stylesheet' type='text/css' />
      <link href='/fonts/qticons/qticons.css' rel='stylesheet' type='text/css' />
      <link href='/components/slick/slick.css' rel='stylesheet' type='text/css' />
      <link href='/components/swipebox/src/css/swipebox.min.css' rel='stylesheet' type='text/css' />
      <link rel="stylesheet" type="text/css" href="/components/countdown/css/jquery.classycountdown.css" />
      <link rel="stylesheet" type="text/css" href="/components/soundmanager/templates/qtradio-player/css/flashblock.css" />
      <link rel="stylesheet" type="text/css" href="/components/soundmanager/templates/qtradio-player/css/qt-360player-volume.css" />
      <link rel="stylesheet" href="css/qt-main.css" />
      <link rel="shortcut icon" href="/favicon_62x62.png?2" />
      <link rel="stylesheet" href="/css/qt-typography.css" />
  
  
        </Head>
  
      )
    break;
  }
    
  }
  
  export default Header