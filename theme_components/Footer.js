function Footer() {
   return (
    <div id="channelslist" class="side-nav qt-content-primary qt-right-sidebar">
    <a href="javascript:void(0)" class="qt-btn qt-btn-secondary button-playlistswitch-close qt-close-sidebar-right" data-activates="channelslist"><i class="icon dripicons-cross"></i></a>
    <div id="qtplayercontainer" data-playervolume="true" data-accentcolor="#dd0e34" data-accentcolordark="#ff0442" data-textcolor="#ffffff" data-soundmanagerurl="./components/soundmanager/swf/" class="qt-playercontainer qt-playervolume qt-clearfix qt-content-primary">
        <div class="qt-playercontainer-content qt-vertical-padding-m">
            <div class="qt-playercontainer-header">
                <h5 class="qt-text-shadow small">En vivo</h5>
                <h3 id="qtradiotitle" class="qt-text-shadow">s</h3>
            </div>
            <div class="qt-playercontainer-musicplayer" id="qtmusicplayer">
                <div class="qt-musicplayer">
                    <div class="ui360 ui360-vis qt-ui360">
                        <a id="playerlink" href="https://radioenhd.com:7086/;"></a>
                    </div>
                </div>
            </div>
            <div class="qt-playercontainer-data qt-container qt-text-shadow small">
                <h6 class="qt-inline-textdeco">
                    <span>Con:</span>
                </h6>
                <div class="qt-t qt-current-track">
                    <h5 id="qtFeedPlayerTrack">s</h5>
                </div>
            </div>
        </div>
        <div id="playerimage" class="qt-header-bg" data-bgimage="https://cdn2.ntmx.me/<?=$first_p['p_foto']?>">
            <img src="https://cdn2.ntmx.me/<?=$first_p['p_foto']?>" alt="<?=$first_p['p_name']?>" width="690" height="302" />
        </div>
    </div>

</div>
   )
}

export default Footer;