/**
 * Created by Frank on 2017/5/10.
 */
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

function createPeople(a,b,c,name,sex,ip){
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
    if(name){
        people.name = name;
        clickGroup.push(people);
    }
    if(ip){
        people.ip = ip;
    }
    if(sex){
        people.sex = sex;
    }
    return people;
}

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
        rect.rotation.x = rota[0];
        rect.rotation.y = rota[1];
        rect.rotation.z = rota[2];
    }
    scene.add(rect);
    return rect;
}

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
        });
    }
    var line = new THREE.Line(geometry,material);
    scene.add(line);
    return line;
}

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