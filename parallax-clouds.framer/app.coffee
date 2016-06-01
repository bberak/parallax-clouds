PerlinNoise = require "perlinNoise"

class Cloud extends Layer
	constructor: ({x, y, numParts, partWidth, partHeight, partVarianceWidth, partVarianceHeight, partVarianceX, partVarianceY, parent, styleFunction}) ->
		super
			midX: x 
			midY: y
			backgroundColor: "transparent"
			parent: parent
			width: 1
			height: 1

		for i in [0.. numParts]
			xOffset = partWidth * partVarianceX
			yOffSet = partHeight * partVarianceY
			widthOffset = partWidth * partVarianceWidth
			heightOffset = partHeight * partVarianceHeight
			part = new Layer
				parent: this
				midX: Utils.randomNumber(-xOffset, xOffset)
				midY: Utils.randomNumber(-yOffSet, yOffSet)
				width: partWidth + Utils.randomNumber(-widthOffset, widthOffset)
				height: partHeight + Utils.randomNumber(-heightOffset, heightOffset)
			if styleFunction
				styleFunction(part, i)
	
class CloudSystem extends Layer
	constructor: ({x, y, z, numClouds, scrollDamping, noiseFunction, parent, styleFunction}) ->
		super
			parent: bg
			midX: x 
			midY: y
			z: z
			backgroundColor: "transparent"
			height: 1
			width: 1
		
		@scrollDamping = scrollDamping	
		
		noiseStartX = Utils.randomNumber(-50000, 50000)
		noiseStartY = Utils.randomNumber(-50000, 50000)
		
		for i in [0.. numClouds]
			cloud = new Cloud
				parent: this
				x: Utils.randomNumber(-500, 500)
				y: Utils.randomNumber(-500, 500)
				numParts: 5
				partWidth: 100
				partHeight: 100
				partVarianceWidth: 0
				partVarianceHeight: 0
				partVarianceX: 0.6
				partVarianceY: 0.4
				styleFunction: styleFunction,
				
bg = new BackgroundLayer 
	backgroundColor: "#EEE"

cs = new CloudSystem
	parent: bg
	x: Screen.width / 2
	y: Screen.height / 2
	z: 0
	numClouds: 5
	scrollDamping: 0
	noiseFunction: PerlinNoise.noise
	styleFunction: (layer, index) ->
		layer.borderRadius = 125
		layer.backgroundColor= "#12DEFF"
	
cs2 = new CloudSystem
	parent: bg
	x: Screen.width / 2
	y: Screen.height / 2
	z: 1
	numClouds: 5
	scrollDamping: 0
	noiseFunction: PerlinNoise.noise
	styleFunction: (layer, index) ->
		layer.borderRadius = 125
		layer.backgroundColor= "#12DE11"
	
bg.onSwipe (event, layer) ->
	deltaX = event.x - event.previousX
	deltaY = event.y - event.previousY

	cs.x = cs.x + deltaX * 0.15
	cs.y = cs.y + deltaY * 0.15
	cs2.x = cs2.x + deltaX * 0.5     
	cs2.y = cs2.y + deltaY * 0.5
		
	

	