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
	constructor: ({x, y, z, parent, interval}) ->
		super
			parent: parent
			midX: x
			midY: y
			z: z
			height: 1
			width: 1
			backgroundColor: "transparent"
			
		@sourceX = 0
		@sourceY = 0
		
		Utils.interval interval, this.generateCloud.bind(this)
		
	generateCloud: () ->
		cloud = new Cloud
          parent: this
          x: @sourceX
          y: @sourceY
          numParts: 5
          partWidth: 100
          partHeight: 100
          partVarianceWidth: 0
          partVarianceHeight: 0
          partVarianceX: 0.6
          partVarianceY: 0.4
          afterCreated: @afterCloudCreated
		
	move: ({deltaX, deltaY}) ->
		this.midX += deltaX
		this.midY += deltaY
		@sourceX -= deltaX
		@sourceY -= deltaY

bg = new BackgroundLayer 
	backgroundColor: "rgba(191,173,255,1)"
	
cs = new CloudSystem
	parent: bg
	x: Screen.width / 2
	y: -150
	z: 0
	interval: 5

bg.onSwipe (event, layer) ->
	deltaX = event.x - event.previousX
	deltaY = event.y - event.previousY
	cs.move
		deltaX: deltaX
		deltaY: deltaY
		


		
	

	