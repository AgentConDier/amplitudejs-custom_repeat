Amplitude.init({'songs':[{
    "url":"http://darnok2221.no-ip.biz/archive/dYpGXp0t8ZfctS834dn1.mp3",
  },{
    "url":"http://darnok2221.no-ip.biz/archive/SVq0BAye02Jo9XptkRoA.mp3",
  }
],'callbacks':{
  'song_change': function(){
    if (repeat) Amplitude.playNow(repeatedSong);
  }
}});
window.onload = function() {
  document.getElementById('song-played-progress').addEventListener('click', function( e ){
    var offset = this.getBoundingClientRect();
    var x = e.pageX - offset.left;
    Amplitude.setSongPlayedPercentage( ( parseFloat( x ) / parseFloat( this.offsetWidth) ) * 100 );
  });
}
