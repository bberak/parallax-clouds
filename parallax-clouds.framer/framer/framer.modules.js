require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];


},{}],"perlinNoise":[function(require,module,exports){
// src: http://www.html5gamedevelopment.org/html5-game-tutorials/2012-01-procedural-textures-in-html5-canvas
// This is a port of Ken Perlin's Java code. The
// original Java code is at http://cs.nyu.edu/%7Eperlin/noise/.
// Note that in this version, a number from 0 to 1 is returned.

PerlinNoise = new function() {
  this.noise = function(x, y, z) {
     var p = new Array(512)
     var permutation = [ 151,160,137,91,90,15,
     131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,
     190, 6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,
     88,237,149,56,87,174,20,125,136,171,168, 68,175,74,165,71,134,139,48,27,166,
     77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,
     102,143,54, 65,25,63,161, 1,216,80,73,209,76,132,187,208, 89,18,169,200,196,
     135,130,116,188,159,86,164,100,109,198,173,186, 3,64,52,217,226,250,124,123,
     5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,
     223,183,170,213,119,248,152, 2,44,154,163, 70,221,153,101,155,167, 43,172,9,
     129,22,39,253, 19,98,108,110,79,113,224,232,178,185, 112,104,218,246,97,228,
     251,34,242,193,238,210,144,12,191,179,162,241, 81,51,145,235,249,14,239,107,
     49,192,214, 31,181,199,106,157,184, 84,204,176,115,121,50,45,127, 4,150,254,
     138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180
     ];
     for (var i=0; i < 256 ; i++) 
   p[256+i] = p[i] = permutation[i]; 

        var X = Math.floor(x) & 255,                  // FIND UNIT CUBE THAT
            Y = Math.floor(y) & 255,                  // CONTAINS POINT.
            Z = Math.floor(z) & 255;
        x -= Math.floor(x);                                // FIND RELATIVE X,Y,Z
        y -= Math.floor(y);                                // OF POINT IN CUBE.
        z -= Math.floor(z);
        var    u = fade(x),                                // COMPUTE FADE CURVES
               v = fade(y),                                // FOR EACH OF X,Y,Z.
               w = fade(z);
        var A = p[X  ]+Y, AA = p[A]+Z, AB = p[A+1]+Z,      // HASH COORDINATES OF
            B = p[X+1]+Y, BA = p[B]+Z, BB = p[B+1]+Z;      // THE 8 CUBE CORNERS,

        return scale(lerp(w, lerp(v, lerp(u, grad(p[AA  ], x  , y  , z   ),  // AND ADD
                                       grad(p[BA  ], x-1, y  , z   )), // BLENDED
                               lerp(u, grad(p[AB  ], x  , y-1, z   ),  // RESULTS
                                       grad(p[BB  ], x-1, y-1, z   ))),// FROM  8
                       lerp(v, lerp(u, grad(p[AA+1], x  , y  , z-1 ),  // CORNERS
                                       grad(p[BA+1], x-1, y  , z-1 )), // OF CUBE
                               lerp(u, grad(p[AB+1], x  , y-1, z-1 ),
                                       grad(p[BB+1], x-1, y-1, z-1 )))));
     }
     function fade(t) { return t * t * t * (t * (t * 6 - 15) + 10); }
     function lerp( t, a, b) { return a + t * (b - a); }
     function grad(hash, x, y, z) {
        var h = hash & 15;                      // CONVERT LO 4 BITS OF HASH CODE
        var u = h<8 ? x : y,                 // INTO 12 GRADIENT DIRECTIONS.
               v = h<4 ? y : h==12||h==14 ? x : z;
        return ((h&1) == 0 ? u : -u) + ((h&2) == 0 ? v : -v);
     } 
     function scale(n) { return (1 + n)/2; }
}

module.exports = PerlinNoise;
},{}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvQm9yaXMvRGV2L0ZyYW1lckpTL3BhcmFsbGF4LWNsb3Vkcy9wYXJhbGxheC1jbG91ZHMuZnJhbWVyL21vZHVsZXMvbXlNb2R1bGUuY29mZmVlIiwiLi4vLi4vLi4vLi4vLi4vVXNlcnMvQm9yaXMvRGV2L0ZyYW1lckpTL3BhcmFsbGF4LWNsb3Vkcy9wYXJhbGxheC1jbG91ZHMuZnJhbWVyL21vZHVsZXMvcGVybGluTm9pc2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNJQSxPQUFPLENBQUMsS0FBUixHQUFnQjs7QUFFaEIsT0FBTyxDQUFDLFVBQVIsR0FBcUIsU0FBQTtTQUNwQixLQUFBLENBQU0sdUJBQU47QUFEb0I7O0FBR3JCLE9BQU8sQ0FBQyxPQUFSLEdBQWtCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQOzs7O0FDVGxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiMgQWRkIHRoZSBmb2xsb3dpbmcgbGluZSB0byB5b3VyIHByb2plY3QgaW4gRnJhbWVyIFN0dWRpby4gXG4jIG15TW9kdWxlID0gcmVxdWlyZSBcIm15TW9kdWxlXCJcbiMgUmVmZXJlbmNlIHRoZSBjb250ZW50cyBieSBuYW1lLCBsaWtlIG15TW9kdWxlLm15RnVuY3Rpb24oKSBvciBteU1vZHVsZS5teVZhclxuXG5leHBvcnRzLm15VmFyID0gXCJteVZhcmlhYmxlXCJcblxuZXhwb3J0cy5teUZ1bmN0aW9uID0gLT5cblx0cHJpbnQgXCJteUZ1bmN0aW9uIGlzIHJ1bm5pbmdcIlxuXG5leHBvcnRzLm15QXJyYXkgPSBbMSwgMiwgM10iLCIvLyBzcmM6IGh0dHA6Ly93d3cuaHRtbDVnYW1lZGV2ZWxvcG1lbnQub3JnL2h0bWw1LWdhbWUtdHV0b3JpYWxzLzIwMTItMDEtcHJvY2VkdXJhbC10ZXh0dXJlcy1pbi1odG1sNS1jYW52YXNcbi8vIFRoaXMgaXMgYSBwb3J0IG9mIEtlbiBQZXJsaW4ncyBKYXZhIGNvZGUuIFRoZVxuLy8gb3JpZ2luYWwgSmF2YSBjb2RlIGlzIGF0IGh0dHA6Ly9jcy5ueXUuZWR1LyU3RXBlcmxpbi9ub2lzZS8uXG4vLyBOb3RlIHRoYXQgaW4gdGhpcyB2ZXJzaW9uLCBhIG51bWJlciBmcm9tIDAgdG8gMSBpcyByZXR1cm5lZC5cblxuUGVybGluTm9pc2UgPSBuZXcgZnVuY3Rpb24oKSB7XG4gIHRoaXMubm9pc2UgPSBmdW5jdGlvbih4LCB5LCB6KSB7XG4gICAgIHZhciBwID0gbmV3IEFycmF5KDUxMilcbiAgICAgdmFyIHBlcm11dGF0aW9uID0gWyAxNTEsMTYwLDEzNyw5MSw5MCwxNSxcbiAgICAgMTMxLDEzLDIwMSw5NSw5Niw1MywxOTQsMjMzLDcsMjI1LDE0MCwzNiwxMDMsMzAsNjksMTQyLDgsOTksMzcsMjQwLDIxLDEwLDIzLFxuICAgICAxOTAsIDYsMTQ4LDI0NywxMjAsMjM0LDc1LDAsMjYsMTk3LDYyLDk0LDI1MiwyMTksMjAzLDExNywzNSwxMSwzMiw1NywxNzcsMzMsXG4gICAgIDg4LDIzNywxNDksNTYsODcsMTc0LDIwLDEyNSwxMzYsMTcxLDE2OCwgNjgsMTc1LDc0LDE2NSw3MSwxMzQsMTM5LDQ4LDI3LDE2NixcbiAgICAgNzcsMTQ2LDE1OCwyMzEsODMsMTExLDIyOSwxMjIsNjAsMjExLDEzMywyMzAsMjIwLDEwNSw5Miw0MSw1NSw0NiwyNDUsNDAsMjQ0LFxuICAgICAxMDIsMTQzLDU0LCA2NSwyNSw2MywxNjEsIDEsMjE2LDgwLDczLDIwOSw3NiwxMzIsMTg3LDIwOCwgODksMTgsMTY5LDIwMCwxOTYsXG4gICAgIDEzNSwxMzAsMTE2LDE4OCwxNTksODYsMTY0LDEwMCwxMDksMTk4LDE3MywxODYsIDMsNjQsNTIsMjE3LDIyNiwyNTAsMTI0LDEyMyxcbiAgICAgNSwyMDIsMzgsMTQ3LDExOCwxMjYsMjU1LDgyLDg1LDIxMiwyMDcsMjA2LDU5LDIyNyw0NywxNiw1OCwxNywxODIsMTg5LDI4LDQyLFxuICAgICAyMjMsMTgzLDE3MCwyMTMsMTE5LDI0OCwxNTIsIDIsNDQsMTU0LDE2MywgNzAsMjIxLDE1MywxMDEsMTU1LDE2NywgNDMsMTcyLDksXG4gICAgIDEyOSwyMiwzOSwyNTMsIDE5LDk4LDEwOCwxMTAsNzksMTEzLDIyNCwyMzIsMTc4LDE4NSwgMTEyLDEwNCwyMTgsMjQ2LDk3LDIyOCxcbiAgICAgMjUxLDM0LDI0MiwxOTMsMjM4LDIxMCwxNDQsMTIsMTkxLDE3OSwxNjIsMjQxLCA4MSw1MSwxNDUsMjM1LDI0OSwxNCwyMzksMTA3LFxuICAgICA0OSwxOTIsMjE0LCAzMSwxODEsMTk5LDEwNiwxNTcsMTg0LCA4NCwyMDQsMTc2LDExNSwxMjEsNTAsNDUsMTI3LCA0LDE1MCwyNTQsXG4gICAgIDEzOCwyMzYsMjA1LDkzLDIyMiwxMTQsNjcsMjksMjQsNzIsMjQzLDE0MSwxMjgsMTk1LDc4LDY2LDIxNSw2MSwxNTYsMTgwXG4gICAgIF07XG4gICAgIGZvciAodmFyIGk9MDsgaSA8IDI1NiA7IGkrKykgXG4gICBwWzI1NitpXSA9IHBbaV0gPSBwZXJtdXRhdGlvbltpXTsgXG5cbiAgICAgICAgdmFyIFggPSBNYXRoLmZsb29yKHgpICYgMjU1LCAgICAgICAgICAgICAgICAgIC8vIEZJTkQgVU5JVCBDVUJFIFRIQVRcbiAgICAgICAgICAgIFkgPSBNYXRoLmZsb29yKHkpICYgMjU1LCAgICAgICAgICAgICAgICAgIC8vIENPTlRBSU5TIFBPSU5ULlxuICAgICAgICAgICAgWiA9IE1hdGguZmxvb3IoeikgJiAyNTU7XG4gICAgICAgIHggLT0gTWF0aC5mbG9vcih4KTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZJTkQgUkVMQVRJVkUgWCxZLFpcbiAgICAgICAgeSAtPSBNYXRoLmZsb29yKHkpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gT0YgUE9JTlQgSU4gQ1VCRS5cbiAgICAgICAgeiAtPSBNYXRoLmZsb29yKHopO1xuICAgICAgICB2YXIgICAgdSA9IGZhZGUoeCksICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDT01QVVRFIEZBREUgQ1VSVkVTXG4gICAgICAgICAgICAgICB2ID0gZmFkZSh5KSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZPUiBFQUNIIE9GIFgsWSxaLlxuICAgICAgICAgICAgICAgdyA9IGZhZGUoeik7XG4gICAgICAgIHZhciBBID0gcFtYICBdK1ksIEFBID0gcFtBXStaLCBBQiA9IHBbQSsxXStaLCAgICAgIC8vIEhBU0ggQ09PUkRJTkFURVMgT0ZcbiAgICAgICAgICAgIEIgPSBwW1grMV0rWSwgQkEgPSBwW0JdK1osIEJCID0gcFtCKzFdK1o7ICAgICAgLy8gVEhFIDggQ1VCRSBDT1JORVJTLFxuXG4gICAgICAgIHJldHVybiBzY2FsZShsZXJwKHcsIGxlcnAodiwgbGVycCh1LCBncmFkKHBbQUEgIF0sIHggICwgeSAgLCB6ICAgKSwgIC8vIEFORCBBRERcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyYWQocFtCQSAgXSwgeC0xLCB5ICAsIHogICApKSwgLy8gQkxFTkRFRFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlcnAodSwgZ3JhZChwW0FCICBdLCB4ICAsIHktMSwgeiAgICksICAvLyBSRVNVTFRTXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmFkKHBbQkIgIF0sIHgtMSwgeS0xLCB6ICAgKSkpLC8vIEZST00gIDhcbiAgICAgICAgICAgICAgICAgICAgICAgbGVycCh2LCBsZXJwKHUsIGdyYWQocFtBQSsxXSwgeCAgLCB5ICAsIHotMSApLCAgLy8gQ09STkVSU1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JhZChwW0JBKzFdLCB4LTEsIHkgICwgei0xICkpLCAvLyBPRiBDVUJFXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVycCh1LCBncmFkKHBbQUIrMV0sIHggICwgeS0xLCB6LTEgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyYWQocFtCQisxXSwgeC0xLCB5LTEsIHotMSApKSkpKTtcbiAgICAgfVxuICAgICBmdW5jdGlvbiBmYWRlKHQpIHsgcmV0dXJuIHQgKiB0ICogdCAqICh0ICogKHQgKiA2IC0gMTUpICsgMTApOyB9XG4gICAgIGZ1bmN0aW9uIGxlcnAoIHQsIGEsIGIpIHsgcmV0dXJuIGEgKyB0ICogKGIgLSBhKTsgfVxuICAgICBmdW5jdGlvbiBncmFkKGhhc2gsIHgsIHksIHopIHtcbiAgICAgICAgdmFyIGggPSBoYXNoICYgMTU7ICAgICAgICAgICAgICAgICAgICAgIC8vIENPTlZFUlQgTE8gNCBCSVRTIE9GIEhBU0ggQ09ERVxuICAgICAgICB2YXIgdSA9IGg8OCA/IHggOiB5LCAgICAgICAgICAgICAgICAgLy8gSU5UTyAxMiBHUkFESUVOVCBESVJFQ1RJT05TLlxuICAgICAgICAgICAgICAgdiA9IGg8NCA/IHkgOiBoPT0xMnx8aD09MTQgPyB4IDogejtcbiAgICAgICAgcmV0dXJuICgoaCYxKSA9PSAwID8gdSA6IC11KSArICgoaCYyKSA9PSAwID8gdiA6IC12KTtcbiAgICAgfSBcbiAgICAgZnVuY3Rpb24gc2NhbGUobikgeyByZXR1cm4gKDEgKyBuKS8yOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGVybGluTm9pc2U7Il19
