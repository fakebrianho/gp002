const vertexShader = `
uniform float uTime;
uniform float uRadius;
uniform float uInnerRadius;
uniform float uOuterRadius;
varying float vDistance;
// Source: https://github.com/dmnsgn/glsl-rotate/blob/main/rotation-3d-y.glsl.js
mat3 rotation3dY(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat3(
    c, 0.0, -s,
    0.0, 1.0, 0.0,
    s, 0.0, c
  );
}
mat2 rotation2d(float angle) {
  float s = -sin(angle);
  float c = cos(angle);

  return mat2(
    c, -s,
    s, c
  );
}

float random(vec3 scale, float seed) {
  return fract(sin(dot(position + seed, scale)) * 43758.5453123 + seed);
}

// Utility function to create a smooth 3D noise
vec3 hash(vec3 p) {
  p = vec3(dot(p, vec3(127.1, 311.7, 74.7)),
           dot(p, vec3(269.5, 183.3, 246.1)),
           dot(p, vec3(113.5, 271.9, 124.6)));
  return fract(sin(p) * 18.5453);
}

// Curl noise function
vec3 curl(vec3 p) {
  const float e = 0.1;
  vec3 dx = vec3(e, 0.0, 0.0);
  vec3 dy = vec3(0.0, e, 0.0);
  vec3 dz = vec3(0.0, 0.0, e);

  vec3 p_x0 = hash(p - dx);
  vec3 p_x1 = hash(p + dx);
  vec3 p_y0 = hash(p - dy);
  vec3 p_y1 = hash(p + dy);
  vec3 p_z0 = hash(p - dz);
  vec3 p_z1 = hash(p + dz);

  float x = p_y1.z - p_y0.z - p_z1.y + p_z0.y;
  float y = p_z1.x - p_z0.x - p_x1.z + p_x0.z;
  float z = p_x1.y - p_x0.y - p_y1.x + p_y0.x;

  const float divisor = 1.0 / (2.0 * e);
  return vec3(x, y, z) * divisor;
}


void main() {
  vec3 animatedPosition = position;
  float angle = atan(position.y, position.x);
  float radius = length(position.xy);

  // Calculate curl noise
  vec3 curlNoise = curl(position + uTime * 0.1) * 0.002;
  float offsetX = curlNoise.x;
  float offsetY = curlNoise.y;

  // float noisefactor = random(position, uTime) * 0.1 + 0.1;
  // float offsetX = sin(uTime * 0.2+ angle * 3.0) * noisefactor;
  // float offsetY = cos(uTime * 0.2 + angle * 2.0) * noisefactor;
  animatedPosition.x = (radius + offsetX) * cos(angle + uTime * 0.2);
  animatedPosition.y = (radius + offsetY) * sin(angle + uTime * 0.2);

  // Calculate a unique speed for each point based on its initial position
  // float speed = random(position, 0.5) * 2.0 + 0.5;


  // Apply the circular motion and smooth, large noise effect
  // animatedPosition.x = (radius + offsetX) * cos(angle + uTime * 0.2 * speed);
  // animatedPosition.y = (radius + offsetY) * sin(angle + uTime * 0.2 * speed);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(animatedPosition, 1.0);
  gl_PointSize = 5.0;
  float distanceFactor = pow(uRadius - distance(animatedPosition, vec3(0.0)), 2.0);
  vec4 modelPosition = modelMatrix * vec4(animatedPosition, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vDistance = distanceFactor;

  float middleRadius = (uInnerRadius + uOuterRadius) / 2.0;
  float normalizedDistance = 1.0 - abs(radius - middleRadius) / (uOuterRadius - middleRadius);
  gl_PointSize = mix(10.0, 20.0, normalizedDistance);


}

`

export default vertexShader