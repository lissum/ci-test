export default function getHealthStatus( playerData ) {
  if( playerData.health > 50 ) {
    return "healthy";
  }
  else if( playerData.health > 15 ) {
    return "wounded";
  }
  else{
    return "critical";
  }
}
