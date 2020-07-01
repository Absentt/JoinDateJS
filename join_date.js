function dateFormat (epoch) {
  var joinDate = new Date(epoch*1);

  return joinDate.toDateString();

}

dateFormat(BukkitPlayer.getFirstPlayed());