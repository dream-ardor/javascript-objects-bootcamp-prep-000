var playlist = { TS : "End Game"};

function updatePlaylist(object,key,value) {
   return Object.assign({}, object, { [key]: value})
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  return playlist
}