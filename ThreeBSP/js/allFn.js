	//参数(位置数组,颜色)
	function createBox(arrPos,col){
		var geometry = new THREE.BoxGeometry(2, 2, 2);

		//注意:不能有线,否则会报错
		var material = new THREE.MeshBasicMaterial({
			color:col
			// wireframe:true,
			// wireframeLinewidth:2			
		});
		var plane = new THREE.Mesh(geometry, material);	
		plane.position.set(arrPos[0],arrPos[1],arrPos[2]);
		scene.add(plane);	
		return plane;
	}

	function createBox1(arrPos,col){
		var geometry = new THREE.BoxGeometry(2, 2, 2);

		//注意:不能有线,否则会报错
		var material = new THREE.MeshBasicMaterial({
			color:col,
			wireframe:true,
			// wireframeLinewidth:2			
		});
		var plane = new THREE.Mesh(geometry, material);	
		plane.position.set(arrPos[0],arrPos[1],arrPos[2]);
		scene.add(plane);	
		return plane;
	}	

	//联合函数
	function union(planeO,planeT){
		var planeOBSP = new ThreeBSP(planeO);
		var planeTBSP = new ThreeBSP(planeT);
		var xx = planeOBSP.union(planeTBSP);
		console.log(xx);//演示

		scene.remove(planeO);//注意!
		scene.remove(planeT);//注意!

		//注意!
		var result = xx.toMesh(new THREE.MeshBasicMaterial({
			color:'green',
			wireframe:true,
			wireframeLinewidth:2				
		}));

		//注意!
		scene.add(result);				
	}	





	//相交函数
	function intersect(planeO,planeT){
		var planeOBSP = new ThreeBSP(planeO);
		var planeTBSP = new ThreeBSP(planeT);
		var xx = planeOBSP.intersect(planeTBSP);
		console.log(xx);//演示
		scene.remove(planeO);//注意!
		scene.remove(planeT);//注意!

		//注意!
		var result = xx.toMesh(new THREE.MeshBasicMaterial({
			color:'yellow'
		}));

		//注意!
		scene.add(result);				
	}


	//相减函数
	function subtract(planeO,planeT){
		var planeOBSP = new ThreeBSP(planeO);
		var planeTBSP = new ThreeBSP(planeT);
		var xx = planeOBSP.subtract(planeTBSP);
		console.log(xx); //演示
		scene.remove(planeO);//注意!
		scene.remove(planeT);//注意!

		//注意!
		var result = xx.toMesh();

		//注意!
		scene.add(result);		
	}


	function onWindowResize(){
		renderer.setSize(window.innerWidth, window.innerHeight);
	}


	function animate(){
		requestAnimationFrame(animate);
		render();
	}

	function render(){
		renderer.render(scene, camera);
	}
