PerlinNoise = require "perlinNoise"

class Cloud extends Layer
	constructor: ({x, y, numParts, partWidth, partHeight, partVarianceWidth, partVarianceHeight, partVarianceX, partVarianceY, parent, afterCreated}) ->
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
			if afterCreated
				afterCreated(part, i)
	
class CloudSystem extends Layer
	constructor: ({x, y, z, noise, radar, parent, afterCloudCreated}) ->
		super
			parent: bg
			midX: x 
			midY: y
			z: z
			backgroundColor: "transparent"
			height: 1
			width: 1
			
		@noise = noise
		@radar = radar
		@noiseOffsetX = Utils.randomNumber(-50000, 50000)
		@noiseOffsetY = Utils.randomNumber(-50000, 50000)
		
		this.generateCloudsAroundPoint
			x: x
			y: y
	
	generateCloudsAroundPoint: ({x, y}) ->
		for xOffset in [0.. 250] by 25
			for yOffset in [0.. 25] by 25
				cloudX = x + xOffset
				cloudY = y + yOffset
				print cloudX + " " + cloudY	
		
bg = new BackgroundLayer 
	backgroundColor: "rgba(191,173,255,1)"
	
centerX = Screen.width / 2
centerY = Screen.height / 2

cs = new CloudSystem
	parent: bg
	x: centerX
	y: centerY
	z: 0
	numClouds: 5
	scrollDamping: 0
	noise: PerlinNoise.noise
	afterCloudCreated: (layer, index) ->
		layer.borderRadius = 125
		layer.backgroundColor= "#DDD"
		layer.scale = 0.2
		layer.opacity = 0.2
		layer.animate
			properties:
				scale: 1
				opacity: 1
	
cs2 = new CloudSystem
	parent: bg
	x: centerX
	y: centerY
	z: 1
	numClouds: 5
	scrollDamping: 0
	noise: PerlinNoise.noise
	afterCloudCreated: (layer, index) ->
		layer.borderRadius = 125
		layer.backgroundColor= "#EEE"
		layer.scale = 0.2
		layer.opacity = 0.2
		layer.animate
			properties:
				scale: 1
				opacity: 1
	
bg.onSwipe (event, layer) ->
	deltaX = event.x - event.previousX
	deltaY = event.y - event.previousY

	cs.x = cs.x + deltaX * 0.15
	cs.y = cs.y + deltaY * 0.15
	cs2.x = cs2.x + deltaX * 0.5     
	cs2.y = cs2.y + deltaY * 0.5
	
	centerX += deltaX
	centerY += deltaY
	print deltaX + " " + deltaY
		
	

	