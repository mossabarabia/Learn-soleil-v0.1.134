// exemple1 //
const particleCount = 1000;
const particles = new THREE.BufferGeometry();
const particlePositions =new Float32Array(particleCount * 3);

for (let i = 0; i < particleCount; i++) {
  const i3 = i * 3;
  const radius = Math.random() * 10;
  const angle = Math.random() * Math.PI * 2;

  particlePositions[i3] = Math.cos(angle) * radius;
  particlePositions[i3 + 1] = Math.sin(angle) * radius;
  particlePositions[i3 + 2] = Math.random() * 10 -5; // ارتفاع عشوائي
}

particles.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

const particleMaterial = new THREE.PointsMaterial ({
  color: 0xffffff,
  size: 0.1// حجم الجسيمات
});

const particleSystem = new THREE.Points(particles,particleMaterial);
scene.add(particleSystem);

function animate() {

  requestAnimationFrame(animate);

  particleSystem.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();

//exxemple2//

  // إضافة الجسيمات (الأرضية)
  const particleCount = 1000;
  const particles = new THREE.BufferGeometry();
  const particlePositions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;
    const radius = Math.random() * 8;
    const angle = Math.random() * Math.PI * 2;

    particlePositions[i3] = Math.cos(angle) * radius;
    particlePositions[i3 + 1] = Math.sin(angle) * radius;
    particlePositions[i3 + 2] = Math.random() * 6 - 3; // ارتفاع عشوائي
  }

  particles.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

  const particleMaterial = new THREE.PointsMaterial({
    color: 0xffcc00, // لون الجسيمات (أصفر غامق)
    size: 0.2, // حجم الجسيمات
    transparent: true,
    opacity: 0.8,
    depthWrite: false // عدم كتابة العمق لتجنب التراكم الزائد
  });

  const particleSystem = new THREE.Points(particles, particleMaterial);
  scene.add(particleSystem);

  // إضافة مبانٍ
  const buildingGeometry = new THREE.BoxGeometry(1, 3, 1); // أبعاد المبنى
  const buildingMaterial = new THREE.MeshBasicMaterial({ color: 0x555555 }); // لون المبنى (رمادي داكن)

  for (let i = 0; i < 5; i++) {
    const building = new THREE.Mesh(buildingGeometry, buildingMaterial);
    building.position.set(Math.random() * 20 - 10, 1.5, Math.random() * 20 - 10);
    scene.add(building);
  }

  function animate() {
    requestAnimationFrame(animate);

    // دوران النظام
    particleSystem.rotation.y += 0.005;

    renderer.render(scene, camera);
  }

  // بداية التحريك
  camera.position.z = 5;
  animate();