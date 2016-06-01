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
	constructor: ({originX, originY, originZ, noise, radar, parent, afterCloudCreated, damping}) ->
		super
			parent: bg
			midX: originX 
			midY: originY
			z: originZ
			backgroundColor: "transparent"
			height: 1
			width: 1
			
		@originX = originX
		@originY = originY
		@originZ = originZ
		@noise = noise
		@radar = radar
		@afterCloudCreated = afterCloudCreated
		@damping = damping
		@noiseOffsetX = Utils.randomNumber(-50000, 50000)
		@noiseOffsetY = Utils.randomNumber(-50000, 50000)
		
		this.generateCloudsAroundPoint
			x: 0
			y: 0
	
	generateCloudsAroundPoint: ({x, y}) ->
		for xOffset in [-@radar.. @radar] by 100
			for yOffset in [-@radar.. @radar] by 100
				cloudX = x + xOffset
				cloudY = y + yOffset
				noiseX = cloudX + @noiseOffsetX
				noiseY = cloudY	+ @noiseOffsetY
				noiseVal = @noise(noiseX, noiseY, 0)
				if noiseVal > 0.05 and noiseVal < 0.17
					cloud = new Cloud
						parent: this
						x: cloudX
						y: cloudY
						numParts: 5
						partWidth: 100
						partHeight: 100
						partVarianceWidth: 0
						partVarianceHeight: 0
						partVarianceX: 0.6
						partVarianceY: 0.4
						afterCreated: @afterCloudCreated
		@lastX = x
		@lastY = y
		
	move: ({deltaX, deltaY}) ->
		deltaX *= @damping
		deltaY *= @damping
		
		this.x += deltaX
		this.y += deltaY
		
		this.generateCloudsAroundPoint
			x: @lastX - deltaX
			y: @lastY - deltaY

bg = new BackgroundLayer 
	backgroundColor: "rgba(191,173,255,1)"
	
centerX = Screen.width / 2
centerY = Screen.height / 2

cs = new CloudSystem
	parent: bg
	originX: centerX
	originY: centerY
	originZ: 0
	radar: 250
	noise: PerlinNoise.noise
	damping: 0.15
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
	originX: centerX
	originY: centerY
	originZ: 1
	radar: 250
	noise: PerlinNoise.noise
	damping: 0.5
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
	cs.move
		deltaX: deltaX
		deltaY: deltaY
	cs2.move
		deltaX: deltaX
		deltaY: deltaY
		
Events.wrap(window).addEventListener "keydown", (event) ->
	if event.keyCode is 37
  		cs.move
    		deltaX: 200
    		deltaY: 0
    	cs2.move
    		deltaX: 200
    		deltaY: 0
  	if event.keyCode is 38
    	cs.move
    		deltaX: 0
    		deltaY: 200
    	cs2.move
    		deltaX: 0
    		deltaY: 200
  	if event.keyCode is 39
  		cs.move
    		deltaX: -200
    		deltaY: 0
    	cs2.move
    		deltaX: -200
    		deltaY: 0
  	if event.keyCode is 40
  		cs.move
	    	deltaX: 0
	    	deltaY: -200
	    cs2.move
	    	deltaX: 0
	    	deltaY: -200
		


		
	

	