/*
	Created on 2017-04-14
	@author: 吴涛
	@summary: three.js三模块学习
	@version: 0.1
*/
//geomery(几何体):
	
	// 1.立方体(BoxGeomary)
	// 	BoxGeomary(width,height,dept,widthSegments,heightSegments,depthSegments);
	// 	使用方法: new THREE.BoxGeomary(1,1,1);
	// 2.球体(SphereGeometry)
	// 	SphereGeometry(radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength)
	// 	radius：球体半径 
	// 	widthSegments, heightSegments：水平方向和垂直方向上分段数。widthSegments最小值为3，默认值为8。heightSegments最小值为2，默认值为6。 
	// 	phiStart：水平方向上的起始角,默认值0 
	// 	phiLenght：水平方向上球体曲面覆盖的弧度，默认Math.PI * 2 
	// 	thetaStart : 垂直方向上的起始角， 默认0 
	// 	thetaLength: 垂直方向是球体曲面覆盖的弧度，默认值为Math.PI
	// 3.多边形(ShapeGeometry)
	// 	ShapeGeometry(shapes, options) 
	// 	shapes形状数组 
	// 	可选的参数对象，可配置参数curveSegments, meterial, UVGenerator。


//camera(照相机)

	// 1.正交投影相机(面投影)
	// 	OrthographicCamera(left, right, top, bottom, near, far)
	// 2.透视投影相机(点投影)
	// 	PerspectiveCamera(fov, aspect, near, far) 


//scene(场景)
	// Scene.add()   场景中添加物体
	// Scene.remove() 去除物体
	// Scene.childen()  子对象列表,数组吧,包括相机，光源
	// Scene.getChildByName()  通过物体的name属性访问该物体
	// Scene.traverse(function) 函数参数对每个子对象都调用一次函数