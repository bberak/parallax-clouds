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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvQm9yaXMvRGV2L0ZyYW1lckpTL3BhcmFsbGF4LWNsb3Vkcy5mcmFtZXIvbW9kdWxlcy9teU1vZHVsZS5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9Cb3Jpcy9EZXYvRnJhbWVySlMvcGFyYWxsYXgtY2xvdWRzLmZyYW1lci9tb2R1bGVzL3Blcmxpbk5vaXNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDSUEsT0FBTyxDQUFDLEtBQVIsR0FBZ0I7O0FBRWhCLE9BQU8sQ0FBQyxVQUFSLEdBQXFCLFNBQUE7U0FDcEIsS0FBQSxDQUFNLHVCQUFOO0FBRG9COztBQUdyQixPQUFPLENBQUMsT0FBUixHQUFrQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUDs7OztBQ1RsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIjIEFkZCB0aGUgZm9sbG93aW5nIGxpbmUgdG8geW91ciBwcm9qZWN0IGluIEZyYW1lciBTdHVkaW8uIFxuIyBteU1vZHVsZSA9IHJlcXVpcmUgXCJteU1vZHVsZVwiXG4jIFJlZmVyZW5jZSB0aGUgY29udGVudHMgYnkgbmFtZSwgbGlrZSBteU1vZHVsZS5teUZ1bmN0aW9uKCkgb3IgbXlNb2R1bGUubXlWYXJcblxuZXhwb3J0cy5teVZhciA9IFwibXlWYXJpYWJsZVwiXG5cbmV4cG9ydHMubXlGdW5jdGlvbiA9IC0+XG5cdHByaW50IFwibXlGdW5jdGlvbiBpcyBydW5uaW5nXCJcblxuZXhwb3J0cy5teUFycmF5ID0gWzEsIDIsIDNdIiwiLy8gc3JjOiBodHRwOi8vd3d3Lmh0bWw1Z2FtZWRldmVsb3BtZW50Lm9yZy9odG1sNS1nYW1lLXR1dG9yaWFscy8yMDEyLTAxLXByb2NlZHVyYWwtdGV4dHVyZXMtaW4taHRtbDUtY2FudmFzXG4vLyBUaGlzIGlzIGEgcG9ydCBvZiBLZW4gUGVybGluJ3MgSmF2YSBjb2RlLiBUaGVcbi8vIG9yaWdpbmFsIEphdmEgY29kZSBpcyBhdCBodHRwOi8vY3Mubnl1LmVkdS8lN0VwZXJsaW4vbm9pc2UvLlxuLy8gTm90ZSB0aGF0IGluIHRoaXMgdmVyc2lvbiwgYSBudW1iZXIgZnJvbSAwIHRvIDEgaXMgcmV0dXJuZWQuXG5cblBlcmxpbk5vaXNlID0gbmV3IGZ1bmN0aW9uKCkge1xuICB0aGlzLm5vaXNlID0gZnVuY3Rpb24oeCwgeSwgeikge1xuICAgICB2YXIgcCA9IG5ldyBBcnJheSg1MTIpXG4gICAgIHZhciBwZXJtdXRhdGlvbiA9IFsgMTUxLDE2MCwxMzcsOTEsOTAsMTUsXG4gICAgIDEzMSwxMywyMDEsOTUsOTYsNTMsMTk0LDIzMyw3LDIyNSwxNDAsMzYsMTAzLDMwLDY5LDE0Miw4LDk5LDM3LDI0MCwyMSwxMCwyMyxcbiAgICAgMTkwLCA2LDE0OCwyNDcsMTIwLDIzNCw3NSwwLDI2LDE5Nyw2Miw5NCwyNTIsMjE5LDIwMywxMTcsMzUsMTEsMzIsNTcsMTc3LDMzLFxuICAgICA4OCwyMzcsMTQ5LDU2LDg3LDE3NCwyMCwxMjUsMTM2LDE3MSwxNjgsIDY4LDE3NSw3NCwxNjUsNzEsMTM0LDEzOSw0OCwyNywxNjYsXG4gICAgIDc3LDE0NiwxNTgsMjMxLDgzLDExMSwyMjksMTIyLDYwLDIxMSwxMzMsMjMwLDIyMCwxMDUsOTIsNDEsNTUsNDYsMjQ1LDQwLDI0NCxcbiAgICAgMTAyLDE0Myw1NCwgNjUsMjUsNjMsMTYxLCAxLDIxNiw4MCw3MywyMDksNzYsMTMyLDE4NywyMDgsIDg5LDE4LDE2OSwyMDAsMTk2LFxuICAgICAxMzUsMTMwLDExNiwxODgsMTU5LDg2LDE2NCwxMDAsMTA5LDE5OCwxNzMsMTg2LCAzLDY0LDUyLDIxNywyMjYsMjUwLDEyNCwxMjMsXG4gICAgIDUsMjAyLDM4LDE0NywxMTgsMTI2LDI1NSw4Miw4NSwyMTIsMjA3LDIwNiw1OSwyMjcsNDcsMTYsNTgsMTcsMTgyLDE4OSwyOCw0MixcbiAgICAgMjIzLDE4MywxNzAsMjEzLDExOSwyNDgsMTUyLCAyLDQ0LDE1NCwxNjMsIDcwLDIyMSwxNTMsMTAxLDE1NSwxNjcsIDQzLDE3Miw5LFxuICAgICAxMjksMjIsMzksMjUzLCAxOSw5OCwxMDgsMTEwLDc5LDExMywyMjQsMjMyLDE3OCwxODUsIDExMiwxMDQsMjE4LDI0Niw5NywyMjgsXG4gICAgIDI1MSwzNCwyNDIsMTkzLDIzOCwyMTAsMTQ0LDEyLDE5MSwxNzksMTYyLDI0MSwgODEsNTEsMTQ1LDIzNSwyNDksMTQsMjM5LDEwNyxcbiAgICAgNDksMTkyLDIxNCwgMzEsMTgxLDE5OSwxMDYsMTU3LDE4NCwgODQsMjA0LDE3NiwxMTUsMTIxLDUwLDQ1LDEyNywgNCwxNTAsMjU0LFxuICAgICAxMzgsMjM2LDIwNSw5MywyMjIsMTE0LDY3LDI5LDI0LDcyLDI0MywxNDEsMTI4LDE5NSw3OCw2NiwyMTUsNjEsMTU2LDE4MFxuICAgICBdO1xuICAgICBmb3IgKHZhciBpPTA7IGkgPCAyNTYgOyBpKyspIFxuICAgcFsyNTYraV0gPSBwW2ldID0gcGVybXV0YXRpb25baV07IFxuXG4gICAgICAgIHZhciBYID0gTWF0aC5mbG9vcih4KSAmIDI1NSwgICAgICAgICAgICAgICAgICAvLyBGSU5EIFVOSVQgQ1VCRSBUSEFUXG4gICAgICAgICAgICBZID0gTWF0aC5mbG9vcih5KSAmIDI1NSwgICAgICAgICAgICAgICAgICAvLyBDT05UQUlOUyBQT0lOVC5cbiAgICAgICAgICAgIFogPSBNYXRoLmZsb29yKHopICYgMjU1O1xuICAgICAgICB4IC09IE1hdGguZmxvb3IoeCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBGSU5EIFJFTEFUSVZFIFgsWSxaXG4gICAgICAgIHkgLT0gTWF0aC5mbG9vcih5KTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE9GIFBPSU5UIElOIENVQkUuXG4gICAgICAgIHogLT0gTWF0aC5mbG9vcih6KTtcbiAgICAgICAgdmFyICAgIHUgPSBmYWRlKHgpLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ09NUFVURSBGQURFIENVUlZFU1xuICAgICAgICAgICAgICAgdiA9IGZhZGUoeSksICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBGT1IgRUFDSCBPRiBYLFksWi5cbiAgICAgICAgICAgICAgIHcgPSBmYWRlKHopO1xuICAgICAgICB2YXIgQSA9IHBbWCAgXStZLCBBQSA9IHBbQV0rWiwgQUIgPSBwW0ErMV0rWiwgICAgICAvLyBIQVNIIENPT1JESU5BVEVTIE9GXG4gICAgICAgICAgICBCID0gcFtYKzFdK1ksIEJBID0gcFtCXStaLCBCQiA9IHBbQisxXStaOyAgICAgIC8vIFRIRSA4IENVQkUgQ09STkVSUyxcblxuICAgICAgICByZXR1cm4gc2NhbGUobGVycCh3LCBsZXJwKHYsIGxlcnAodSwgZ3JhZChwW0FBICBdLCB4ICAsIHkgICwgeiAgICksICAvLyBBTkQgQUREXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmFkKHBbQkEgIF0sIHgtMSwgeSAgLCB6ICAgKSksIC8vIEJMRU5ERURcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXJwKHUsIGdyYWQocFtBQiAgXSwgeCAgLCB5LTEsIHogICApLCAgLy8gUkVTVUxUU1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JhZChwW0JCICBdLCB4LTEsIHktMSwgeiAgICkpKSwvLyBGUk9NICA4XG4gICAgICAgICAgICAgICAgICAgICAgIGxlcnAodiwgbGVycCh1LCBncmFkKHBbQUErMV0sIHggICwgeSAgLCB6LTEgKSwgIC8vIENPUk5FUlNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyYWQocFtCQSsxXSwgeC0xLCB5ICAsIHotMSApKSwgLy8gT0YgQ1VCRVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlcnAodSwgZ3JhZChwW0FCKzFdLCB4ICAsIHktMSwgei0xICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmFkKHBbQkIrMV0sIHgtMSwgeS0xLCB6LTEgKSkpKSk7XG4gICAgIH1cbiAgICAgZnVuY3Rpb24gZmFkZSh0KSB7IHJldHVybiB0ICogdCAqIHQgKiAodCAqICh0ICogNiAtIDE1KSArIDEwKTsgfVxuICAgICBmdW5jdGlvbiBsZXJwKCB0LCBhLCBiKSB7IHJldHVybiBhICsgdCAqIChiIC0gYSk7IH1cbiAgICAgZnVuY3Rpb24gZ3JhZChoYXNoLCB4LCB5LCB6KSB7XG4gICAgICAgIHZhciBoID0gaGFzaCAmIDE1OyAgICAgICAgICAgICAgICAgICAgICAvLyBDT05WRVJUIExPIDQgQklUUyBPRiBIQVNIIENPREVcbiAgICAgICAgdmFyIHUgPSBoPDggPyB4IDogeSwgICAgICAgICAgICAgICAgIC8vIElOVE8gMTIgR1JBRElFTlQgRElSRUNUSU9OUy5cbiAgICAgICAgICAgICAgIHYgPSBoPDQgPyB5IDogaD09MTJ8fGg9PTE0ID8geCA6IHo7XG4gICAgICAgIHJldHVybiAoKGgmMSkgPT0gMCA/IHUgOiAtdSkgKyAoKGgmMikgPT0gMCA/IHYgOiAtdik7XG4gICAgIH0gXG4gICAgIGZ1bmN0aW9uIHNjYWxlKG4pIHsgcmV0dXJuICgxICsgbikvMjsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBlcmxpbk5vaXNlOyJdfQ==
