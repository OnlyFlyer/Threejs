var allClass = {
	shell:function(){
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

		var cube = new THREE.Mesh(geometry, material);
		scene.add(cube);	
	},
	sumPlane:function(){
		//创建四个楼层
		for(var i=0; i<4; i++){
			var arr = [3,1,-1,-3];
			if(i == 3){
				floorB  = createPlane(0,arr[3],0);
			}
			createPlane(0,arr[i],0);
		}
	},
	sumGoods:function(){
		//创建每层楼的办公桌
		for(var i=0; i<3; i++){
			var arr = [3,1.75,0.5];
			createGoods(3,-2.8,arr[i]);
		}

		for(var i=0; i<3; i++){
			var arr = [3,1.75,0.5];
			createGoods(-3,-2.8,arr[i]);
		}	
		for(var i=0; i<3; i++){
			var arr = [3,1.75,0.5];
			createGoods(0,-2.8,arr[i]);
		}		
	},
	sumPeople:function(){
		//右人物
		createPeople(3.5,-2.9,3.5,'王亮','男','10.255.72.254');  //亮哥
		createPeople(3,-2.9,3.5,'高添','女','10.255.72.1');   //高添
		createPeople(2.5,-2.9,3.5,'荣晓旭','女','10.255.72.2');   //荣晓旭

		createPeople(3.5,-2.9,2.5,'贾冰姝','女','10.255.72.3');  //冰冰姐
		createPeople(3,-2.9,2.5,'王欣宇','女','10.255.72.4');    //欣宇
		createPeople(2.5,-2.9,2.5,'吴涛','男','10.255.72.5');   //吴涛

		createPeople(3.5,-2.9,2.2,'谷雨','男','10.255.72.6');  //谷哥
		createPeople(3,-2.9,2.2,'白洁','女','10.255.72.7');    //小白
		createPeople(2.5,-2.9,2.2,'程家兴','男','10.255.72.8');   //家兴	

		createPeople(3.5,-2.9,1.2,'李美娜','女','10.255.72.9');  // 娜姐
		createPeople(3,-2.9,1.2,'秦连琦','女','10.255.72.10');    //连琦
		createPeople(2.5,-2.9,1.2,'李晶','女','10.255.72.11');   //李晶	

		createPeople(3.5,-2.9,0.9,'许乃豪','男','10.255.72.12');  // 乃豪
		createPeople(3,-2.9,0.9,'逢万超','男','10.255.72.13');    //超哥
		createPeople(2.5,-2.9,0.9,'刘建国','男','10.255.72.14');   //建国	

		createPeople(3.5,-2.9,-0.1,'李小龙','男','10.255.72.15');  // 龙哥
		createPeople(3,-2.9,-0.1,'刘忠宇','男','10.255.72.16');    //忠宇
		createPeople(2.5,-2.9,-0.1,'于泽林','男','10.255.72.17');   //泽林
		//左人物
		for(var i=0; i<6; i++){
			var arr1 = [-3.5,-3,-2.5];
			var arr2 = [3.5,2.5,2.2,1.2,0.9,-0.1];
			for(var j=0; j<3; j++){
				createPeople(arr1[j],-2.9,arr2[i]);
			}

		}
		//中间人物
		for(var i=0; i<6; i++){
			var arr1 = [0.5,0,-0.5];
			var arr2 = [3.5,2.5,2.2,1.2,0.9,-0.1];
			for(var j=0; j<3; j++){
				createPeople(arr1[j],-2.9,arr2[i]);
			}
		}	
	},
	sumCompu:function(){
		//右第一排电脑
		for(var i=0; i<3; i++){
			var arr = [3.5,3,2.5];
			createCompu(arr[i],-2.5,3.05);
		}

		//右第二排电脑
		for(var i=0; i<3; i++){
			var arr = [3.5,3,2.5];
			createCompu(arr[i],-2.5,2.95);	
		}

		//右第三排电脑
		for(var i=0; i<3; i++){
			var arr = [3.5,3,2.5];
			createCompu(arr[i],-2.5,1.8);	
		}

		//右第四排电脑
		for(var i=0; i<3; i++){
			var arr = [3.5,3,2.5];
			createCompu(arr[i],-2.5,1.7);	
		}

		//右第五排电脑
		for(var i=0; i<3; i++){
			var arr = [3.5,3,2.5];
			createCompu(arr[i],-2.5,0.55);	
		}

		//右第六排电脑
		for(var i=0; i<3; i++){
			var arr = [3.5,3,2.5];
			createCompu(arr[i],-2.5,0.45);	
		}



		//左第一排电脑
		for(var i=0; i<3; i++){
			var arr = [-3.5,-3,-2.5];
			createCompu(arr[i],-2.5,3.05);
		}

		//左第二排电脑
		for(var i=0; i<3; i++){
			var arr = [-3.5,-3,-2.5];
			createCompu(arr[i],-2.5,2.95);	
		}

		//左第三排电脑
		for(var i=0; i<3; i++){
			var arr = [-3.5,-3,-2.5];
			createCompu(arr[i],-2.5,1.8);	
		}

		//左第四排电脑
		for(var i=0; i<3; i++){
			var arr = [-3.5,-3,-2.5];
			createCompu(arr[i],-2.5,1.7);	
		}

		//左第五排电脑
		for(var i=0; i<3; i++){
			var arr = [-3.5,-3,-2.5];
			createCompu(arr[i],-2.5,0.55);	
		}

		//左第六排电脑
		for(var i=0; i<3; i++){
			var arr = [-3.5,-3,-2.5];
			createCompu(arr[i],-2.5,0.45);	
		}


		//中间第一排电脑
		for(var i=0; i<3; i++){
			var arr = [0.5,0,-0.5];
			createCompu(arr[i],-2.5,3.05);
		}

		//中间第二排电脑
		for(var i=0; i<3; i++){
			var arr = [0.5,0,-0.5];
			createCompu(arr[i],-2.5,2.95);	
		}

		//中间第三排电脑
		for(var i=0; i<3; i++){
			var arr = [0.5,0,-0.5];
			createCompu(arr[i],-2.5,1.8);	
		}

		//中间第四排电脑
		for(var i=0; i<3; i++){
			var arr = [0.5,0,-0.5];
			createCompu(arr[i],-2.5,1.7);	
		}

		//中间第五排电脑
		for(var i=0; i<3; i++){
			var arr = [0.5,0,-0.5];
			createCompu(arr[i],-2.5,0.55);	
		}

		//中间第六排电脑
		for(var i=0; i<3; i++){
			var arr = [0.5,0,-0.5];
			createCompu(arr[i],-2.5,0.45);	
		}	
	},
	gap:function(){
		var  stairL = createCompu(3.5,-3,-1.5,[1.7,1.7,0.01],'#ccc',[Math.PI/2,0,0]);
		var  stairR = createCompu(-3.5,-3,-1.5,[1.7,1.7,0.01],'#ccc',[Math.PI/2,0,0]);
		var x1 = new ThreeBSP(floorB);
		var x2 = new ThreeBSP(stairL);
		var x3 = new ThreeBSP(stairR);
		var xx = x1.subtract(x2).subtract(x3);
		scene.remove(floorB);
		scene.remove(stairL);
		scene.remove(stairR);
		var result = xx.toMesh(new THREE.MeshBasicMaterial({
			color:'#87CEFA',
			transparent: true,
			opacity: 0.3
		}));
		scene.add(result);	
	},
	sumLine:function(){
		//右-连接排与排的电脑线
		for(var i=0; i<6; i++){
			var start = [[3.5,-2.6,3.05],[3.5,-2.6,2.95],[3.5,-2.6,1.8],[3.5,-2.6,1.7],[3.5,-2.6,0.55],[3.5,-2.6,0.45]];
			var stop = [[2.5,-2.6,3.05],[2.5,-2.6,2.95],[2.5,-2.6,1.8],[2.5,-2.6,1.7],[2.5,-2.6,0.55],[2.5,-2.6,0.45]];
			creataLine(start[i],stop[i]);
		}

		//左-连接排与排的电脑线
		for(var i=0; i<6; i++){
			var start = [[-3.5,-2.6,3.05],[-3.5,-2.6,2.95],[-3.5,-2.6,1.8],[-3.5,-2.6,1.7],[-3.5,-2.6,0.55],[-3.5,-2.6,0.45]];
			var stop = [[-2.5,-2.6,3.05],[-2.5,-2.6,2.95],[-2.5,-2.6,1.8],[-2.5,-2.6,1.7],[-2.5,-2.6,0.55],[-2.5,-2.6,0.45]];
			creataLine(start[i],stop[i]);
		}

		//中间-连接排与排的电脑线
		for(var i=0; i<6; i++){
			var start = [[-0.5,-2.6,3.05],[-0.5,-2.6,2.95],[-0.5,-2.6,1.8],[-0.5,-2.6,1.7],[-0.5,-2.6,0.55],[-0.5,-2.6,0.45]];
			var stop = [[0.5,-2.6,3.05],[0.5,-2.6,2.95],[0.5,-2.6,1.8],[0.5,-2.6,1.7],[0.5,-2.6,0.55],[0.5,-2.6,0.45]];
			creataLine(start[i],stop[i]);		
		}


		//右-地上的电线黑色
		for(var i=0; i<3; i++){
			var start = [[1.5,-3,3.05],[1.501,-3,3.05],[1.502,-3,3.05]];
			var stop = [[1.5,-3,-2],[1.501,-3,-2],[1.502,-3,-2]];
			creataLine(start[i],stop[i]);
		}

		//左-地上的电线黑色
		for(var i=0; i<3; i++){
			var start = [[-1.5,-3,3.05],[-1.501,-3,3.05],[-1.502,-3,3.05]];
			var stop = [[-1.5,-3,-2],[-1.501,-3,-2],[-1.502,-3,-2]];
			creataLine(start[i],stop[i]);
		}

		//右-传输线红色
		for(var i=0; i<3; i++){
			var start = [[2.25,-3,3.05],[2.25,-3,1.8],[2.25,-3,0.55]];
			var stop = [[1.5,-3,3.05],[1.5,-3,1.8],[1.5,-3,0.55]];
			creataLine(start[i],stop[i],'red');
		}

		//左-传输线红色
		for(var i=0; i<3; i++){
			var start = [[-2.25,-3,3.05],[-2.25,-3,1.8],[-2.25,-3,0.55]];
			var stop = [[-1.5,-3,3.05],[-1.5,-3,1.8],[-1.5,-3,0.55]];
			creataLine(start[i],stop[i],'red');
		}

		//中间-传输线淡蓝色
		for(var i=0; i<3; i++){
			var start = [[0.75,-3,3.05],[0.75,-3,1.8],[0.75,-3,0.55]];
			var stop = [[1.5,-3,3.05],[1.5,-3,1.8],[1.5,-3,0.55]];
			creataLine(start[i],stop[i],'#00FFFF');
		}

		//右-传输线蓝色
		for(var i=0; i<3; i++){
			var start = [[2.25,-3,3.05],[2.25,-3,1.8],[2.25,-3,0.55]];
			var stop = [[2.25,-2.6,3.05],[2.25,-2.6,1.8],[2.25,-2.6,0.55]];
			creataLine(start[i],stop[i],'blue');
		}

		//左-传输线蓝色
		for(var i=0; i<3; i++){
			var start = [[-2.25,-3,3.05],[-2.25,-3,1.8],[-2.25,-3,0.55]];
			var stop = [[-2.25,-2.6,3.05],[-2.25,-2.6,1.8],[-2.25,-2.6,0.55]];
			creataLine(start[i],stop[i],'blue');	
		}

		//中间-传输线蓝色
		for(var i=0; i<3; i++){
			var start = [[0.75,-3,3.05],[0.75,-3,1.8],[0.75,-3,0.55]];
			var stop = [[0.75,-2.6,3.05],[0.75,-2.6,1.8],[0.75,-2.6,0.55]];
			creataLine(start[i],stop[i],'blue');
		}

		//右-传输线白色
		creataLine([2.25,-2.6,3.05],[2.5,-2.6,3.05],'#fff');
		creataLine([2.25,-2.6,1.8],[2.5,-2.6,1.8],'#fff');
		creataLine([2.25,-2.6,0.55],[2.5,-2.6,0.55],'#fff');

		//左-传输线白色
		creataLine([-2.25,-2.6,3.05],[-2.5,-2.6,3.05],'#fff');
		creataLine([-2.25,-2.6,1.8],[-2.5,-2.6,1.8],'#fff');
		creataLine([-2.25,-2.6,0.55],[-2.5,-2.6,0.55],'#fff');

		//中间-传输线白色
		creataLine([0.5,-2.6,3.05],[0.75,-2.6,3.05],'#fff');
		creataLine([0.5,-2.6,1.8],[0.75,-2.6,1.8],'#fff');
		creataLine([0.5,-2.6,0.55],[0.75,-2.6,0.55],'#fff');
	},
	sumStairs:function(){
		//右-楼梯-横-上1
		for(var i=0; i<5; i++){
			var arr1 = [1,1.5,2,2.5,3];
			var arr2 = [-4.95,-4.7,-4.5,-4.3,-4.1];
			createStairs(arr1[i],arr2[i],1,Math.PI/2,0,Math.PI/2,0.5);
		}

		//左-楼梯-横-上1
		for(var i=0; i<5; i++){
			var arr1 = [-1,-1.5,-2,-2.5,-3];
			var arr2 = [-4.95,-4.7,-4.5,-4.3,-4.1];
			createStairs(arr1[i],arr2[i],1,Math.PI/2,0,Math.PI/2,0.5);
		}

		//右-楼梯-横-平台1
		for(var i=0; i<3; i++){
			var arr = [1.4,0.9,0.6];
			createStairs(3.5,-4.1,arr[i],Math.PI/2,0,0,0.5);
		}

		//左-楼梯-横-平台1
		for(var i=0; i<3; i++){
			var arr = [1.4,0.9,0.6];
			createStairs(-3.5,-4.1,arr[i],Math.PI/2,0,0,0.5);
		}

		//右-楼梯-横-上2
		for(var i=0; i<5; i++){
			var arr1 = [-3.9,-3.7,-3.5,-3.3,-3.05];
			var arr2 = [0,-0.6,-1.1,-1.6,-2.1];
			createStairs(3.5,arr1[i],arr2[i],Math.PI/2,0,0,0.5);
		}

		//左-楼梯-横-上2
		for(var i=0; i<5; i++){
			var arr1 = [-3.9,-3.7,-3.5,-3.3,-3.05];
			var arr2 = [0,-0.6,-1.1,-1.6,-2.1];
			createStairs(-3.5,arr1[i],arr2[i],Math.PI/2,0,0,0.5);
		}


		//右-楼梯-折-上1
		for(var i=0; i<4; i++){
			var arr1 = [1.2,1.8,2.3,2.8];
			var arr2 = [-4.8,-4.6,-4.45,-4.2];
			var arr3 = [0.3,0.3,0.2,0.3];
			createStairs(arr1[i],arr2[i],1,Math.PI/2,Math.PI/2,Math.PI/2,arr3[i]);
		}

		//左-楼梯-折-上1
		for(var i=0; i<4; i++){
			var arr1 = [-1.2,-1.8,-2.3,-2.8];
			var arr2 = [-4.8,-4.6,-4.45,-4.2];
			var arr3 = [0.3,0.3,0.2,0.3];
			createStairs(arr1[i],arr2[i],1,Math.PI/2,Math.PI/2,Math.PI/2,arr3[i]);
		}

		//右-楼梯-折-上2
		for(var i=0; i<5; i++){
			var arr1 = [-4.0,-3.8,-3.6,-3.4,-3.2];
			var arr2 = [0.3,-0.3,-0.9,-1.4,-1.9];
			createStairs(3.5,arr1[i],arr2[i],0,0,0,0.3);
		}


		//左-楼梯-折-上2
		for(var i=0; i<5; i++){
			var arr1 = [-4.0,-3.8,-3.6,-3.4,-3.2];
			var arr2 = [0.3,-0.3,-0.9,-1.4,-1.9];
			createStairs(-3.5,arr1[i],arr2[i],0,0,0,0.3);
		}
	},
	antiy:function(){
		//1楼前台背景
		var faceBG = createCompu(0,-4,2.4,[2,2,0.1],'#F0FFFF');

		//安天字样		
		var dot1 = createCompu(-0.55,-3.6,2.5,[0.1,0.1,0.1],'blue');
		var dot2 = createCompu(-0.8,-3.8,2.5,[0.1,0.2,0.1],'blue');
		var dot3 = createCompu(-0.5,-3.75,2.5,[0.5,0.1,0.1],'blue');
		var dot4 = createCompu(-0.3,-3.8,2.5,[0.1,0.2,0.1],'blue');
		var dot5 = createCompu(-0.7,-4.05,2.5,[0.4,0.1,0.1],'blue',[0,0,Math.PI/2.5]);
		var dot6 = createCompu(-0.57,-4.3,2.5,[0.5,0.1,0.1],'blue',[0,0,-Math.PI/10]);
		var dot7 = createCompu(-0.5,-4.2,2.5,[0.6,0.1,0.1],'blue',[0,0,Math.PI/2.5]);
		var dot8 = createCompu(-0.55,-4.05,2.5,[0.6,0.1,0.1],'blue');

		var dot9 = createCompu(0.5,-3.6,2.5,[0.3,0.1,0.1],'blue');
		var dot10 = createCompu(0.5,-3.9,2.5,[0.5,0.1,0.1],'blue');
		var dot11 = createCompu(0.5,-3.75,2.5,[0.3,0.1,0.1],'blue',[0,0,Math.PI/2]);
		var dot12 = createCompu(0.4,-4.1,2.5,[0.6,0.1,0.1],'blue',[0,0,Math.PI/3]);
		var dot13 = createCompu(0.6,-4.1,2.5,[0.6,0.1,0.1],'blue',[0,0,-Math.PI/3]);	
	},
	rotation:function(){
		camera.position.set(rotax,rotay,rotaz);
		// timer = setInterval(function(){
		// 	rotaz-=0.05;
		// 	camera.position.set(rotax,rotay,rotaz);
		// 	console.log('rotax:' + rotax + ',rotay:' + rotay + ',rotaz:' + rotaz);
		// 	if(rotaz - 11.25 < 0){
		// 		clearInterval(timer);
		// 		timer = setInterval(function(){
		// 			rotay+=0.01;
		// 			camera.position.set(rotax,rotay,rotaz);
		// 			console.log('rotax:' + rotax + ',rotay:' + rotay + ',rotaz:' + rotaz);	
		// 			if(rotay + 4 > 0){
		// 				clearInterval(timer);
		// 				timer = setInterval(function(){
		// 					rotaz-=0.01;
		// 					camera.position.set(rotax,rotay,rotaz);
		// 					console.log('rotax:' + rotax + ',rotay:' + rotay + ',rotaz:' + rotaz);
		// 					if(rotaz - 5 < 0){
		// 						clearInterval(timer);
		// 						timer = setInterval(function(){
		// 							rotaz-=0.005;
		// 							rotax+=0.005;
		// 							camera.position.set(rotax,rotay,rotaz);
		// 							console.log('rotax:' + rotax + ',rotay:' + rotay + ',rotaz:' + rotaz);	
		// 							if(rotaz - 3.89 < 0){
		// 								clearInterval(timer);
		// 								timer = setInterval(function(){
		// 									rotax+=0.002;
		// 									camera.position.set(rotax,rotay,rotaz);
		// 									console.log('rotax:' + rotax + ',rotay:' + rotay + ',rotaz:' + rotaz);
		// 									if(rotax - 2.6 > 0){
		// 										clearInterval(timer);
		// 										timer = setInterval(function(){
		// 											rotaz-=0.003;
		// 											camera.position.set(rotax,rotay,rotaz);
		// 											console.log('rotax:' + rotax + ',rotay:' + rotay + ',rotaz:' + rotaz);
		// 											if(rotaz - 3 < 0){
		// 												clearInterval(timer);
		// 												timer = setInterval(function(){
		// 													camera.lookAt(new THREE.Vector3(-10,rotay,1));
		// 													rotax-=0.005;
		// 													rotaz-=0.005;
		// 													camera.position.set(rotax,rotay,rotaz);
		// 													console.log('rotax:' + rotax + ',rotay:' + rotay + ',rotaz:' + rotaz);
		// 													if(rotax - 2.42 < 0){
		// 														clearInterval(timer);
		// 														timer = setInterval(function(){
		// 															rotaz-=0.005;
		// 															rotaxx-=0.005;
		// 															rotayy-=0.005;
		// 															rotazz+=0.005;
		// 															camera.lookAt(new THREE.Vector3(rotaxx,rotay,1));
		// 															camera.position.set(rotax,rotay,rotaz);
		// 															console.log('rotax:' + rotax + ',rotay:' + rotay + ',rotaz:' + rotaz);
		// 															if(rotaz - 1.9 < 0){
		// 																clearInterval(timer);
		// 																timer = setInterval(function(){
		// 																	camera.lookAt(new THREE.Vector3(-10,rotay,1));
		// 																	rotax-=0.003;
		// 																	camera.position.set(rotax,rotay,rotaz);
		// 																	console.log('rotax:' + rotax + ',rotay:' + rotay + ',rotaz:' + rotaz);	
		// 																	if(rotax - 1.26< 0){
		// 																		clearInterval(timer);
		// 																		timer = setInterval(function(){
		// 																			camera.lookAt(new THREE.Vector3(-10,rotay,1));
		// 																			rotaz-=0.005;
		// 																			camera.position.set(rotax,rotay,rotaz);
		// 																			console.log('rotax:' + rotax + ',rotay:' + rotay + ',rotaz:' + rotaz);
		// 																			if(rotaz - 1.06 < 0){
		// 																				clearInterval(timer);
		// 																				timer = setInterval(function(){
		// 																					camera.lookAt(new THREE.Vector3(-10,rotay,1));
		// 																					rotax-=0.005;
		// 																					rotay+=0.001;
		// 																					camera.position.set(rotax,rotay,rotaz);
		// 																					console.log('rotax:' + rotax + ',rotay:' + rotay + ',rotaz:' + rotaz);
		// 																					if(rotax + 2.7 < 0){
		// 																						clearInterval(timer);
		// 																						timer = setInterval(function(){
		// 																					camera.lookAt(new THREE.Vector3(-3.5,-3,-1.5));
		// 																					rotax-=0.001;
		// 																					rotay-=0.001;
		// 																					rotaz-=0.005;
		// 																					camera.position.set(rotax,rotay,rotaz);
		// 																					console.log('rotax:' + rotax + ',rotay:' + rotay + ',rotaz:' + rotaz);	
		// 																					if(rotax  + 3.016 < 0){
		// 																						clearInterval(timer);
		// 																						timer = setInterval(function(){
		// 																							camera.lookAt(new THREE.Vector3(-3.5,-3,-1.5));
		// 																							rotay+=0.001;
		// 																							camera.position.set(rotax,rotay,rotaz);
		// 																							console.log('rotax:' + rotax + ',rotay:' + rotay + ',rotaz:' + rotaz);	
		// 																							if(rotay + 2.5 > 0){
		// 																								clearInterval(timer);
		// 																								timer = setInterval(function(){
		// 																									camera.lookAt(new THREE.Vector3(0,-3,0));
		// 																									rotax+=0.005;
		// 																									camera.position.set(rotax,rotay,rotaz);
		// 																									console.log('rotax:' + rotax + ',rotay:' + rotay + ',rotaz:' + rotaz);	
		// 																								},0);
		// 																							}
		// 																						},0);
		// 																					}																				 		
		// 																						},0);
		// 																					}		
		// 																				},0);
		// 																			}								
		// 																		},0);
		// 																	}	
		// 																},0);
		// 															}
		// 														},0);
		// 													}
		// 												},0);
		// 											}
		// 										},0);
		// 									}	
		// 								},0);
		// 							}			
		// 						},0);
		// 					}
		// 				},0);	
		// 			}			
		// 		},0);
		// 	}					
		// },0);

		var rotaArr = [];
		var smalArr = [0,-5,50];
		var smalArr1 = [0,-5,11.2];
		var smalArr2 = [0,-4,11.2];
		var smalArr3 = [3.46,-4,-2];
		var smalArr4 = [-0.7,-4,0.75];
		var smalArr5 = [-3.15,-3.5,0.75];
		var smalArr6 = [-3.15,-2.5,-2.25];
		var smalArr7 = [-0.8,-2.5,-3.79];
		var smalArr8 = [9,-2.5,-3.79];
		for(var i=0; i<780; i++){
			smalArr[2]-=0.05;
			var aa = smalArr[2];
			smalArr = [0,-5,aa];
			rotaArr[i] = smalArr;
			// console.log(smalArr);
		}
		for(var i=0; i<200; i++){
			smalArr1[1]+=0.005;
			var aa = smalArr1[1];
			smalArr1 = [0,aa,11.2];
			rotaArr[780+i] = smalArr1;
		}	
		for(var i=0; i<1400; i++){
			smalArr2[2]-=0.005;
			var aa = smalArr2[2];
			smalArr2 = [0,-4,aa];
			rotaArr[980+i] = smalArr2;		
		}
		var rad = [];
		var jz = [0,-4,4];
		var bvn1 = 0;
		for(var i=0; i<=Math.PI*2/3; i+=0.001){
			var x = 4*Math.sin(i);
			var z = 4*Math.cos(i);
			jz = [x,-4,z];
			rad.push(jz);
		}
		// console.log(rad.length);

		for(var i=0; i<550; i++){
			smalArr3[0]-=0.005;
			smalArr3[2]+=0.005;
			var aa = smalArr3[0];
			var bb = smalArr3[2];
			smalArr3 = [aa,-4,bb];
			rotaArr[2380+i] = smalArr3;	
		}
		// console.log(rotaArr);
		var bvn2 = 2380;
		for(var i=0; i<500; i++){
			smalArr4[0]-=0.005;
			smalArr4[1]+=0.001;
			var aa = smalArr4[0];
			var bb = smalArr4[1];
			smalArr4 = [aa,bb,0.75];
			rotaArr[2930+i] = smalArr4;	
		}
		for(var i=0; i<600; i++){
			smalArr5[2]-=0.005;
			smalArr5[1]+=0.001;
			var bb = smalArr5[1];
			var cc = smalArr5[2];
			smalArr5 = [-3.15,bb,cc];
			rotaArr[3430+i] = smalArr5;			
		}
		for(var i=0; i<1000; i++){
			var x = -3.87*Math.sin(0.94*Math.PI*i/1000);
			var z = -3.87*Math.cos(0.94*Math.PI*i/1000);
			smalArr6 = [x,-2.5,z];
			rotaArr[4030+i] = smalArr6;
		}

		for(var i=0; i<1000; i++){
			smalArr7[0]+=0.01;
			var aa = smalArr7[0];
			smalArr7 = [aa,-2.5,-3.79];
			rotaArr[5030+i] = smalArr7;	
		}
		for(var i=0; i<10000; i++){
			smalArr8[0]+=0.001;
			smalArr8[2]+=0.001;
			smalArr8[1]+=0.001;
			var aa = smalArr8[0];
			var bb = smalArr8[1];
			var cc = smalArr8[2];
			smalArr8 = [aa,bb,cc];
			rotaArr[6030+i] = smalArr8;
		}
		// console.log(rotaArr.length);
		var bvn = 0;
		timer = setInterval(function(){
			camera.position.set(rotaArr[bvn][0],rotaArr[bvn][1],rotaArr[bvn][2]);
			// console.log('X:'+rotaArr[bvn][0]+',Y:'+rotaArr[bvn][1]+',Z:'+rotaArr[bvn][2]);
			bvn+=1;
			if(bvn == 2379){
				clearInterval(timer);
				timer = setInterval(function(){
					camera.lookAt(new THREE.Vector3(0,-4,0));
					camera.position.set(rad[bvn1][0],rad[bvn1][1],rad[bvn1][2]);
					// console.log('X:'+rad[bvn1][0]+',Y:'+rad[bvn1][1]+',Z:'+rad[bvn1][2]);
					bvn1+=1;
					if(bvn1 == 2095){
						clearInterval(timer);
						timer = setInterval(function(){
							if(bvn2 >= 2380 && bvn2 < 3430){
								console.log(4);
								camera.lookAt(new THREE.Vector3(-3.5,-4,0.9));
							}else if(bvn2 >= 3430 && bvn2 < 4030){
								console.log(1);
								camera.lookAt(new THREE.Vector3(-3.5,-3,-3));
							}else if(bvn2 >= 4030 && bvn2<5030){
								console.log(2);
								camera.lookAt(new THREE.Vector3(0,-2.5,0));
							}else if(bvn2 >= 5030){
								console.log(3);
								camera.lookAt(new THREE.Vector3(0,-2.5,5));
							}
							bvn2+=1;
							camera.position.set(rotaArr[bvn2][0],rotaArr[bvn2][1],rotaArr[bvn2][2]);
							console.log('X:'+rotaArr[bvn2][0]+',Y:'+rotaArr[bvn2][1]+',Z:'+rotaArr[bvn2][2]);
						},0);
					}
				},0);			
			}
		},0);
	},
	onClick:function(event){
		mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
		mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
		raycaster.setFromCamera(mouse, camera);
		// console.log('clickGroup:' + clickGroup);
		var intersects = raycaster.intersectObjects(clickGroup);
		// console.log(intersects);
		// if(intersects.length == 0){
		// 	console.log('未击中!');
		// 	return ;
		// }
		for(var i=0; i<intersects.length; i++){
			console.log('击中!');
			oEContainer.style.display = 'block';
			oEMain.children[0].innerHTML = '姓名:' + intersects[0].object.name;
			oEMain.children[1].innerHTML = '性别:' + intersects[0].object.sex;
			oEMain.children[2].innerHTML = 'IP地址:' + intersects[0].object.ip;
		}
	},
	onWindowResize:function(){
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize( window.innerWidth, window.innerHeight);
	}
};