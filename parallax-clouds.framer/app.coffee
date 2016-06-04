PerlinNoise = require "perlinNoise"

createBasicCloud = ({color, getXFunc, getYFunc, scale, animateX, animateY, animateTime}) -> ({x, y, parent}) ->
	cloud = new Layer
		midX: getXFunc x
		midY: getYFunc y
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
			backgroundColor: color
			scale: scale
	
	cloud.animate
		properties:
			scale: 1
			opacity: 1
	
	cloud.animate
		properties:
			x: animateX
			y: animateY
		time: animateTime
	
	return cloud
	
class CloudSystem extends Layer
	constructor: ({x, y, z, parent, interval, createCloudFunc, damping}) ->
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
		@damping = damping
		@interval = interval
		
		this.onInterval()
		
	onInterval: () ->
		@createCloudFunc
			x: @sourceX
			y: @sourceY
			parent: this
		Utils.delay Utils.randomNumber(5, @interval), this.onInterval.bind(this)
		
	move: ({deltaX, deltaY}) ->
		deltaX *= @damping
		deltaY *= @damping
		this.midX += deltaX
		this.midY += deltaY
		@sourceX -= deltaX
		@sourceY -= deltaY

bg = new BackgroundLayer 
	backgroundColor: "rgba(191,173,255,1)"
	
getHalfScreenWidth = () -> Screen.width / 2
getHalfScreenHeight = () -> Screen.height / 2
	
cloudSystems = [
	new CloudSystem
		parent: bg
		x: getHalfScreenWidth()
		y: 0
		z: 0
		interval: 20
		createCloudFunc: createBasicCloud 
			color: "#DDD"
			scale: 0.4
			animateY: 5000
			animateTime: 200
			getXFunc: (x) -> x + Utils.randomNumber(- getHalfScreenWidth(), getHalfScreenWidth())
			getYFunc: (y) -> y
		damping: 0.15
		
	new CloudSystem
		parent: bg
		x: getHalfScreenWidth()
		y: 0
		z: 1
		interval: 10
		createCloudFunc: createBasicCloud 
			color: "#EEE"
			scale: 1
			animateY: 5000
			animateTime: 150
			getXFunc: (x) -> x + Utils.randomNumber(- getHalfScreenWidth(), getHalfScreenWidth())
			getYFunc: (y) -> y
		damping: 0.5
		
	new CloudSystem
		parent: bg
		x: Screen.width + 150
		y: getHalfScreenHeight()
		z: 3
		interval: 10
		createCloudFunc: createBasicCloud 
			color: "#FFF"
			scale: 2
			animateX: -5000
			animateTime: 100
			getXFunc: (x) -> x
			getYFunc: (y) -> y + Utils.randomNumber(- getHalfScreenHeight(), getHalfScreenHeight())
		damping: 1.5
]

bg.onSwipe (event, layer) ->
	deltaX = event.x - event.previousX
	deltaY = event.y - event.previousY
	for cs in cloudSystems
		cs.move
			deltaX: deltaX
			deltaY: deltaY
		


		
	

	