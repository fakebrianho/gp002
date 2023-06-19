const vertexShader = `
// uniform vec3 uPosition;
uniform float uTime;
uniform float uRadius;

void main() {
  float distanceFactor = pow(uRadius - distance(position, vec3(0.0)), 2.0);
  vec3 particlePosition = position * rotation3dY(uTime * 0.2 * distanceFactor);

  vec4 modelPosition = modelMatrix * vec4(particlePosition, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;
  gl_PointSize = 3.0;
}`
export default vertexShader