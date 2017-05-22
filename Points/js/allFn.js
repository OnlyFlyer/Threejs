/**
 * Created by Frank on 2017/5/10.
 */
//create a points material
function createPoints(){

    var geometry = new THREE.Geometry();

    for(var i=0; i<1000; i++){
        var star = new THREE.Vector3();
        star.x = THREE.Math.randFloatSpread(100);
        star.y = THREE.Math.randFloatSpread(100);
        star.z = THREE.Math.randFloatSpread(100);
        geometry.vertices.push(star);
    }

    var material = new THREE.PointsMaterial({
        color:'red'
    });

    var cube = new THREE.Points(geometry, material);
    scene.add(cube);

}
function createPoint(){
    var geo = new THREE.Geometry();
    var mater = new THREE.PointsMaterial({
        color:Math.random()*0xffff00
    });
    for(var i=0; i<10000; i++){
        var star = new THREE.Vector3();
        star.x = THREE.Math.randFloatSpread(200);
        star.y = THREE.Math.randFloatSpread(200);
        star.z = THREE.Math.randFloatSpread(200);
        geo.vertices.push(star);
    }
    var point = new THREE.Points(geo, mater);
    scene.add(point);
}



function render(){
    requestAnimationFrame(render);
    renderer.render(scene,camera);
}

function onWindowResize(){
    renderer.setSize(window.innerWidth, window.innerHeight);
}