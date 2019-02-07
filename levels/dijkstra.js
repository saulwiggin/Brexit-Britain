var w = 150, h = 80;
ROT.RNG.setSeed(12345);
var display = new ROT.Display({width:w, height:h, fontSize:6});
SHOW(display.getContainer());

/* generate map and store its data */
var data = {};
var map = new ROT.Map.Uniform(w, h);
map.create(function(x, y, value) {
    data[x+","+y] = value;
    display.DEBUG(x, y, value);
});

/* input callback informs about map structure */
var passableCallback = function(x, y) {
    return (data[x+","+y] === 0);
}

/* prepare path to given coords */
var dijkstra = new ROT.Path.Dijkstra(98, 38, passableCallback);

/* compute from given coords #1 */
dijkstra.compute(8, 45, function(x, y) {
    display.draw(x, y, "", "", "#800");
});

/* compute from given coords #2 */
dijkstra.compute(130, 8, function(x, y) {
    display.draw(x, y, "", "", "#800");
});

/* highlight */
display.draw(8,  45, "", "", "#3f3");
display.draw(130, 8, "", "", "#3f3");
display.draw(98, 38, "", "", "#f33");
