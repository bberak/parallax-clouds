PerlinNoise = require "perlinNoise"

createBasicCloud = ({color, getXFunc, getYFunc, scale, animateX, animateY, animateTime, noiseFunc}) -> ({x, y, parent}) ->
	cloud = new Layer
		midX: getXFunc x
		midY: getYFunc y
		parent: parent
		width: 1
		height: 1
		backgroundColor: "transparent"
		scale: 0.2
		opacity: 0.2
		
	size = 100	
	
	baseRect = new Layer
		midX: 0
		midY: 0
		parent: cloud
		backgroundColor: color
		width: size * 2
		height: size
		
	baseLeft = new Layer
		midX: -size
		midY: 0
		parent: cloud
		backgroundColor: color
		width: size
		height: size
		borderRadius: size
		
	baseRight = new Layer
		midX: size
		midY: 0
		parent: cloud
		backgroundColor: color
		width: size
		height: size
		borderRadius: size
	
	numHumpJoins = 3
	centerOffset = 1.5
	humpSpacing = baseRect.width / centerOffset / numHumpJoins
	noiseSeed = Utils.randomNumber(-50000, 50000)
	for i in [0.. numHumpJoins]
		x = (-size / centerOffset) + (i * humpSpacing)
		noiseVal = noiseFunc(x + noiseSeed, 0, 0)
		hump = new Layer
			midX: x
			midY: -size / 2
			parent: cloud
			backgroundColor: color
			width: size * 2 * noiseVal
			height: size * 2 * noiseVal
			borderRadius: size
	
	cloud.animate
		properties:
			scale: scale
			opacity: 1
	
	cloud.animate
		properties:
			x: animateX
			y: animateY
		time: animateTime
	
	return cloud
	
class CloudSystem extends Layer
	constructor: ({x, y, z, parent, intervalFunc, createCloudFunc, damping}) ->
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
		@intervalFunc = intervalFunc
		
		this.onInterval()
		
	onInterval: () ->
		@createCloudFunc
			x: @sourceX
			y: @sourceY
			parent: this
		Utils.delay @intervalFunc(), this.onInterval.bind(this)
		
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
		intervalFunc: () -> Utils.randomNumber(5, 20)
		createCloudFunc: createBasicCloud 
			color: "#DDD"
			scale: 0.4
			animateY: 5000
			animateTime: 200
			getXFunc: (x) -> x + Utils.randomNumber(- getHalfScreenWidth(), getHalfScreenWidth())
			getYFunc: (y) -> y
			noiseFunc: PerlinNoise.noise
		damping: 0.15
		
	new CloudSystem
		parent: bg
		x: getHalfScreenWidth()
		y: 0
		z: 1
		intervalFunc: () -> Utils.randomNumber(5, 10)
		createCloudFunc: createBasicCloud 
			color: "#EEE"
			scale: 1
			animateY: 5000
			animateTime: 150
			getXFunc: (x) -> x + Utils.randomNumber(- getHalfScreenWidth(), getHalfScreenWidth())
			getYFunc: (y) -> y
			noiseFunc: PerlinNoise.noise
		damping: 0.5
		
	new CloudSystem
		parent: bg
		x: Screen.width + 150
		y: getHalfScreenHeight()
		z: 3
		intervalFunc: () -> Utils.randomNumber(5, 10)
		createCloudFunc: createBasicCloud 
			color: "#FFF"
			scale: 1.5
			animateX: -5000
			animateTime: 100
			getXFunc: (x) -> x
			getYFunc: (y) -> y + Utils.randomNumber(- getHalfScreenHeight(), getHalfScreenHeight())
			noiseFunc: PerlinNoise.noise
		damping: 1.5
]

bg.onSwipe (event, layer) ->
	deltaX = event.x - event.previousX
	deltaY = event.y - event.previousY
	for cs in cloudSystems
		cs.move
			deltaX: deltaX
			deltaY: deltaY


		
	

	