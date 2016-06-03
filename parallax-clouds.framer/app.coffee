PerlinNoise = require "perlinNoise"

createBasicCloud = ({x, y, parent}) ->
	cloud = new Layer
		midX: x
		midY: y
		parent: parent
		width: 1
		height: 1
		backgroundColor: "transparent"
		scale: 0.2
		opacity: 0.2
		
	partWidth = 100
	partHeight = 100
	
	for i in [0.. 5]
		xOffset = partWidth * 0.6
		yOffSet = partHeight * 0.4
		widthOffset = partWidth * 0
		heightOffset = partHeight * 0
		part = new Layer
			parent: cloud
			midX: Utils.randomNumber(-xOffset, xOffset)
			midY: Utils.randomNumber(-yOffSet, yOffSet)
			width: partWidth + Utils.randomNumber(-widthOffset, widthOffset)
			height: partHeight + Utils.randomNumber(-heightOffset, heightOffset)
			borderRadius: 125
			backgroundColor: "#EEE"
	
	cloud.animate
		properties:
			scale: 1
			opacity: 1
	
	cloud.animate
		properties:
			y: 5000
		time: 200
	
	return cloud
	
class CloudSystem extends Layer
	constructor: ({x, y, z, parent, interval, createCloudFunc}) ->
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
		@createCloudFunc = createCloudFunc
		
		Utils.interval interval, this.onInterval.bind(this)
		
	onInterval: () ->
		@createCloudFunc
			x: @sourceX
			y: @sourceY
			parent: this
		
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
	y: 0
	z: 0
	interval: 5
	createCloudFunc: createBasicCloud

bg.onSwipe (event, layer) ->
	deltaX = event.x - event.previousX
	deltaY = event.y - event.previousY
	cs.move
		deltaX: deltaX
		deltaY: deltaY
		


		
	

	