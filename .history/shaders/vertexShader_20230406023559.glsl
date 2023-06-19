const vertexShader = `
uniform float uTime;
uniform float uRadius;
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


void main() {
  vec3 animatedPosition = position;
  float angle = atan(position.y, position.x);
  float radius = length(position.xy);

  float noisefactor = random(position, uTime) * 0.1 + 0.05;
  float offsetX = sin(uTime + angle * 3.0) * noisefactor;
  float offsetY = cos(uTime + angle * 2.0) * noisefactor;

  animatedPosition.x = (radius + offsetX) * cos(angle + uTime) * 0.3;
  animatedPosition.y = (radius + offsetY) * sin(angle + uTime);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(animatedPosition, 1.0);
  gl_PointSize = 5.0;
  float distanceFactor = pow(uRadius - distance(animatedPosition, vec3(0.0)), 2.0);
  // vec3 particlePosition = vec3(position.xy * rotation2d(uTime), 0);
  vec4 modelPosition = modelMatrix * vec4(animatedPosition, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  // vec4 projectedPosition = projectionMatrix * viewPosition;
  vDistance = distanceFactor;

  // gl_Position = projectedPosition;
  gl_PointSize = 100.0;
  gl_PointSize *= (1.0 / - viewPosition.z);

}

`

export default vertexShader