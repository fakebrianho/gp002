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



void main() {
  float distanceFactor = pow(uRadius - distance(position, vec3(0.0)), 2.0);
  vec3 particlePosition = vec3(position.xy * rotation2d(uTime), 0);
  vec4 modelPosition = modelMatrix * vec4(particlePosition, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;
  vDistance = distanceFactor;

  gl_Position = projectedPosition;
  gl_PointSize = 100.0;
  gl_PointSize *= (1.0 / - viewPosition.z);

}

`

export default vertexShader