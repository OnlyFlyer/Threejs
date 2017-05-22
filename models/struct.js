/*
	Created On 2017-04-27
	@author:吴涛
	@summary:antiyStruct的js文件
*/

	var scene,camera,renderer;
	init();
	//外墙框架
function init(){
	//scene
	scene = new THREE.Scene();  //创建场景
	//camera/照相机
	camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
	//renderer/渲染器
	renderer = new THREE.WebGLRenderer();
	//canvas宽高
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.setClearColor('#808080', 1);
	// console.log(renderer);
	renderer.domElement.id = 'can';
	var oContainer = document.getElementById('container');
	oContainer.appendChild(renderer.domElement);
	// console.log(renderer.domElement);

	//控制器
	var controls = new THREE.OrbitControls(camera, renderer.domElement);
	controls.damping = 0.2;
	// var transformControl = new THREE.TransformControls( camera, renderer.domElement );
	// scene.add(transformControl);

	//创建外壳图形
	var geometry = new THREE.BoxGeometry(8, 10, 8,10,10,10);
	//材质
	var material = new THREE.MeshBasicMaterial({
		wireframe:true,
		color: '#eee',
		transparent: true,
		opacity: 0.3,
		wireframeLinewidth:2
		// depthTest:false
	});
	// console.log(material);
	var cube = new THREE.Mesh(geometry, material);
	scene.add(cube);

	var rotaz = 6;
	var rotax = 0;
	camera.position.set(0,0,12);
	// setInterval(function(){
	// 		rotaz+=0.01;
	// 		rotax+=0.1;
	// 		console.log(rotax + ',' + rotaz);
	// 	},50);
	

	var floorB;
	//创建四个楼层
	for(var i=0; i<4; i++){
		var arr = [3,1,-1,-3];
		if(i == 3){
			floorB  = createPlane(0,arr[3],0);
		}
		createPlane(0,arr[i],0);
	}
	//创建每层楼的办公桌
	for(var i=0; i<3; i++){
		var arr = [3,1.75,0.5];
		createGoods(3,-2.8,arr[i]);
	}
	//创建人物
	// var obj = {
	//	IP:function(){},
	// 	id:function(){},
	// 	name:function(){},
	// 	sex:function(){},
	// 	age:function(){},
	//	hobby:function(){}
	// };



	//第一排
	for(var i=0; i<3; i++){
		var arr = [3.5,3,2.5];
		createCompu(arr[i],-2.5,3.05);
	}

	//第二排
	for(var i=0; i<3; i++){
		var arr = [3.5,3,2.5];
		createCompu(arr[i],-2.5,2.95);	
	}

	//第三排
	for(var i=0; i<3; i++){
		var arr = [3.5,3,2.5];
		createCompu(arr[i],-2.5,1.8);	
	}

	//第四排
	for(var i=0; i<3; i++){
		var arr = [3.5,3,2.5];
		createCompu(arr[i],-2.5,1.7);	
	}

	//第五排
	for(var i=0; i<3; i++){
		var arr = [3.5,3,2.5];
		createCompu(arr[i],-2.5,0.55);	
	}

	//第六排
	for(var i=0; i<3; i++){
		var arr = [3.5,3,2.5];
		createCompu(arr[i],-2.5,0.45);	
	}

	//连接排与排的电脑线
	creataLine([3.5,-2.6,3.05],[2.5,-2.6,3.05]);
	creataLine([3.5,-2.6,2.95],[2.5,-2.6,2.95]);
	creataLine([3.5,-2.6,1.8],[2.5,-2.6,1.8]);
	creataLine([3.5,-2.6,1.7],[2.5,-2.6,1.7]);
	creataLine([3.5,-2.6,0.55],[2.5,-2.6,0.55]);
	creataLine([3.5,-2.6,0.45],[2.5,-2.6,0.45]);

	//地上的电线黑色
	creataLine([2,-3,3.05],[2,-3,-2]);
	creataLine([2.001,-3,3.05],[2.001,-3,-2]);
	creataLine([2.002,-3,3.05],[2.002,-3,-2]);

	//传输线红色
	creataLine([2.25,-3,3.05],[2,-3,3.05],'red');
	creataLine([2.25,-3,1.8],[2,-3,1.8],'red');
	creataLine([2.25,-3,0.55],[2,-3,0.55],'red');

	//传输线蓝色
	creataLine([2.25,-3,3.05],[2.25,-2.6,3.05],'blue');
	creataLine([2.25,-3,1.8],[2.25,-2.6,1.8],'blue');
	creataLine([2.25,-3,0.55],[2.25,-2.6,0.55],'blue');

	//传输线白色
	creataLine([2.25,-2.6,3.05],[3.5,-2.6,3.05],'#fff');
	creataLine([2.25,-2.6,1.8],[3.5,-2.6,1.8],'#fff');
	creataLine([2.25,-2.6,0.55],[3.5,-2.6,0.55],'#fff');

	//创建墙面
	createCompu(3,-2,-0.5,[2,2,0.1],'#F0FFFF');

	
	//创建楼梯开口
	var  stair = createCompu(3.5,-3,-1.5,[1.7,1.7,0.01],'#ccc',Math.PI/2);

	var x1 = new ThreeBSP(floorB);
	var x2 = new ThreeBSP(stair);
	var xx = x1.subtract(x2);
	scene.remove(floorB);
	scene.remove(stair);
	result = xx.toMesh(new THREE.MeshBasicMaterial({
		color:'#87CEFA',
		transparent: true,
		opacity: 0.3
	}));
	console.log(result);
	// result.material.color = '#87CEFA';
	// result.material.shading = THREE.FlatShading;  
    // result.geometry.computeFaceNormals();  
    // result.geometry.computeVertexNormals();  
    // result.material.needsUpdate = true;  
    // result.geometry.buffersNeedUpdate = true;  
    // result.geometry.uvsNeedUpdate = true;  
    scene.add(result);  

//init函数结尾	
}
//创建平面函数(每个楼层平面)
function createPlane(a,b,c){
	//设置背景颜色和背景透明度(0~1)
	// renderer.setClearColor('#808080', 1);
	var geometry = new THREE.BoxGeometry(8, 8, 0.01,10,10,1);
	var material = new THREE.MeshBasicMaterial({
		//wireframe为true时可设置线条宽度
		// wireframe:true,
		color: '#87CEFA',
		transparent: true,
		opacity: 0.3
		// wireframeLinewidth:2
	});
	var plane = new THREE.Mesh(geometry, material);
	plane.rotation.x = Math.PI/2;
	//楼层平面层数
	plane.position.set(a, b, c);
	scene.add(plane);
	return plane;	
}
//创建办公桌
function createGoods(a,b,c){
	var geometry = new THREE.BoxGeometry(0.4, 1.5, 0.3);
	var material = new THREE.MeshBasicMaterial({
		//wireframe为true时可设置线条宽度
		// wireframe:true,
		color: '#B0C4DE',
		transparent: true
		// opacity: 0.5
		// wireframeLinewidth:2
	});
	var goods = new THREE.Mesh(geometry, material);
	goods.rotation.x = Math.PI/2;
	goods.rotation.z = Math.PI/2;
	goods.position.set(a, b, c);
	scene.add(goods);	
	return goods;		
}
//创建人物
function createPeople(a,b,c,name){
	var that = this;
	var geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
	var material = new THREE.MeshBasicMaterial({
		color: '#D19275',
		transparent: true
		// opacity: 0.5
		// wireframeLinewidth:2
	});
	var people = new THREE.Mesh(geometry, material);
	people.rotation.x = Math.PI/2;
	people.rotation.z = Math.PI/2;
	people.position.set(a, b, c);
	scene.add(people);	
	people.name = name;
	return people;
}
//屏幕边尺寸变化函数
function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight);
}


//创建电脑
function createCompu(x,y,z,arr,col,rota){
	if(arr){
		var geometry = new THREE.BoxGeometry(arr[0],arr[1],arr[2]);
	}else{
		var geometry = new THREE.BoxGeometry(0.2,0.2,0.03);
	}	
    
    if(col){
    	var material = new THREE.MeshBasicMaterial({
	    	color: col,
	    	transparent: true
	    	// opacity: 0.7
    	});
    }else{
		var material = new THREE.MeshBasicMaterial({
	    	color:'#000',
	    	transparent: true
	    	// opacity: 0.5
		});    	
    }
    var rect = new THREE.Mesh(geometry,material);
    rect.position.set(x,y,z);
    if(rota){
		rect.rotation.x = rota;
    }
    scene.add(rect);	
    return rect;
}

//创建电脑线结构   3.5,-2.6,3.05  2.5,-2.6,3.05
function creataLine(arrBegin,arrStop,col){
	var geometry = new THREE.Geometry();	
    geometry.vertices.push(new THREE.Vector3(arrBegin[0],arrBegin[1],arrBegin[2]));
    geometry.vertices.push(new THREE.Vector3(arrStop[0],arrStop[1],arrStop[2]));			
    if(col){
		var material = new THREE.LineBasicMaterial({
    		color:col
    	}); //注意这里使用的是LineBasicMaterial    	
    }else{
		var material = new THREE.LineBasicMaterial({
    		color:'#000'
    	}); //注意这里使用的是LineBasicMaterial    	
    }
    
    var line = new THREE.Line(geometry,material);
    scene.add(line);
    return line;
}

//楼梯-横-上1
createStairs(1,-4.95,1,Math.PI/2,0,Math.PI/2,0.5);
createStairs(1.5,-4.7,1,Math.PI/2,0,Math.PI/2,0.5);
createStairs(2,-4.5,1,Math.PI/2,0,Math.PI/2,0.5);
createStairs(2.5,-4.3,1,Math.PI/2,0,Math.PI/2,0.5);
createStairs(3,-4.1,1,Math.PI/2,0,Math.PI/2,0.5);

//楼梯-横-平台1
createStairs(3.5,-4.1,1.4,Math.PI/2,0,0,0.5);
createStairs(3.5,-4.1,0.9,Math.PI/2,0,0,0.5);
createStairs(3.5,-4.1,0.6,Math.PI/2,0,0,0.5);


//楼梯-横-上2
createStairs(3.5,-3.9,0,Math.PI/2,0,0,0.5);
createStairs(3.5,-3.7,-0.6,Math.PI/2,0,0,0.5);
createStairs(3.5,-3.5,-1.1,Math.PI/2,0,0,0.5);
createStairs(3.5,-3.3,-1.6,Math.PI/2,0,0,0.5);
createStairs(3.5,-3.05,-2.1,Math.PI/2,0,0,0.5);


//楼梯-折-上1
createStairs(1.2,-4.8,1,Math.PI/2,Math.PI/2,Math.PI/2,0.3);
createStairs(1.8,-4.6,1,Math.PI/2,Math.PI/2,Math.PI/2,0.3);
createStairs(2.3,-4.45,1,Math.PI/2,Math.PI/2,Math.PI/2,0.2);
createStairs(2.8,-4.2,1,Math.PI/2,Math.PI/2,Math.PI/2,0.3);

//楼梯-折-上2
createStairs(3.5,-4,0.3,0,0,0,0.3);
createStairs(3.5,-3.8,-0.3,0,0,0,0.3);
createStairs(3.5,-3.6,-0.9,0,0,0,0.3);
createStairs(3.5,-3.4,-1.4,0,0,0,0.3);
createStairs(3.5,-3.2,-1.9,0,0,0,0.3);


//创建楼梯
function createStairs(x,y,z,rotaX,rotaY,rotaZ,W){
	//楼梯几何形状
	var geometry = new THREE.BoxGeometry(1.2,W,0.1);
	var material = new THREE.MeshBasicMaterial({
		color: '#00FF00',
		transparent: true
		// opacity: 0.5		
	});
	var stair = new THREE.Mesh(geometry, material);
	stair.position.set(x,y,z);
	stair.rotation.x = rotaX;
	stair.rotation.y = rotaY;
	stair.rotation.z = rotaZ;
	scene.add(stair);
}



//点击事件函数
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();
function onClick(event) {
	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

	raycaster.setFromCamera( mouse, camera );
	var intersects = raycaster.intersectObjects(scene.children);
	if(intersects[1] == undefined){
		return ;
	}
	// console.log(intersects[1]);
	if(intersects[1].object.name == ''){
		return ;
	}
	alert(intersects[1].object.name);
}


//绑定屏幕尺寸变化事件
window.addEventListener( 'resize', onWindowResize, false );
//点击人物事件
window.addEventListener( 'click', onClick, false );
//渲染
var render = function(){
	requestAnimationFrame(render);
	renderer.render(scene, camera); 	
	// console.log(scene);		
};
render();