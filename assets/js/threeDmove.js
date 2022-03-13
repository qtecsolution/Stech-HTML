var viewportWidth = window.innerWidth,
    viewportHeight = window.innerHeight,
    scene,
    camera,
    renderer,
    uniforms = {},
    shaderCode,
    material,
    geometry,
    mesh;

function init(){
  scene = new THREE.Scene();
  camera = new THREE.OrthographicCamera( viewportWidth / - 2, viewportWidth / 2, viewportHeight / 2, viewportHeight / - 2, 1, 1000 );
  camera.position.z = 1;

  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( viewportWidth, viewportHeight );
  document.body.appendChild( renderer.domElement );

  uniforms.resolution = {type:'v2',value:new THREE.Vector2(viewportWidth, viewportHeight)};
  uniforms.mousePosition = {type:'v2',value:new THREE.Vector2(0, 0)};

  shaderCode = document.getElementById('fragmentShader').innerHTML;
  material = new THREE.ShaderMaterial({uniforms:uniforms,fragmentShader:shaderCode});
  geometry = new THREE.PlaneBufferGeometry( viewportWidth, viewportHeight );
  mesh = new THREE.Mesh( geometry,material );
  scene.add( mesh );
  mesh.x += Math.PI/2;

  renderer.domElement.addEventListener('mousemove', onDocumentMouseMove, false);
  window.addEventListener( 'resize', onWindowResize, false );
}

function onDocumentMouseMove(event) {
  uniforms.mousePosition.value = new THREE.Vector2(event.clientX, event.clientY);
}

function onWindowResize(event) {
  viewportWidth = window.innerWidth;
  viewportHeight = window.innerHeight;

  uniforms.resolution.value.x = viewportWidth;
  uniforms.resolution.value.y = viewportHeight;

  renderer.setSize( viewportWidth, viewportHeight );
  mesh.scale.set( viewportWidth, viewportHeight, 1 );

  camera.left   = viewportWidth / - 2;
  camera.right  = viewportWidth / 2;
  camera.top    = viewportHeight / 2;
  camera.bottom = viewportHeight / - 2;
  camera.updateProjectionMatrix();
}

function animate() {
  requestAnimationFrame( animate );
  render();
}

function render() {
  renderer.render( scene, camera );
}

init();
animate();