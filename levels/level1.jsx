var lvl1 = {
  low_lighting: false,
  map: {},
  title: 'Brexit Britain - A place where everything has gone to shit.',
  description: 'attempted rape',
  money: 0,
  enemies: [],
  stats: {},


  _generateMap: function(){
    var map = ROT.map.Arena();
  }

  this._generateLighting: function(low_lighting){
    if(low_lighting == true){
      var circlelight = ROT.FOV.PreciseShadowCasting._getCircle();
    }

  }
}
