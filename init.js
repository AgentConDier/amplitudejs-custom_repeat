window.onload = function() {
  
  // this function responds to clicks on the progress bar by setting the song played time accordingly
  // taken from the amplitude.js examples
  document.getElementById('song-played-progress').addEventListener('click', function( e ){
    var offset = this.getBoundingClientRect();
    var x = e.pageX - offset.left;
    Amplitude.setSongPlayedPercentage( ( parseFloat( x ) / parseFloat( this.offsetWidth) ) * 100 );
  });
}
