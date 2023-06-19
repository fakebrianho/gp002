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

const int OCTAVES = 4;

float random(vec3 scale, float seed) {
  return fract(sin(dot(position * seed, scale)) * 43758.5453123 + seed);
}

vec3 hash(vec3 p) {
  p = vec3(dot(p, vec3(127.1, 311.7, 74.7)),
           dot(p, vec3(269.5, 183.3, 246.1)),
           dot(p, vec3(113.5, 271.9, 124.6)));
  return fract(sin(p) * 18.5453);
}

float snoise(vec3 p) {
  vec3 i = floor(p);
  vec3 f = fract(p);

  vec3 u = f * f * (3.0 - 2.0 * f);

  return mix(mix(mix(dot(hash(i + vec3(0.0, 0.0, 0.0)), f - vec3(0.0, 0.0, 0.0)),
                      dot(hash(i + vec3(1.0, 0.0, 0.0)), f - vec3(1.0, 0.0, 0.0)), u.x),
                 mix(dot(hash(i + vec3(0.0, 1.0, 0.0)), f - vec3(0.0, 1.0, 0.0)),
                      dot(hash(i + vec3(1.0, 1.0, 0.0)), f - vec3(1.0, 1.0, 0.0)), u.x), u.y),
            mix(mix(dot(hash(i + vec3(0.0, 0.0, 1.0)), f - vec3(0.0, 0.0, 1.0)),
                      dot(hash(i + vec3(1.0, 0.0, 1.0)), f - vec3(1.0, 0.0, 1.0)), u.x),
                 mix(dot(hash(i + vec3(0.0, 1.0, 1.0)), f - vec3(0.0, 1.0, 1.0)),
                      dot(hash(i + vec3(1.0, 1.0, 1.0)), f - vec3(1.0, 1.0, 1.0)), u.x), u.y), u.z);
}

float fbm(vec3 p) {
  float value = 10.5;
  float amplitude = 100.0;
  float frequency = 100.0;
  for (int i = 0; i < OCTAVES; i++) {
    value += amplitude * snoise(p);
    p *= 2.0;
    amplitude *= 0.75;
  }
  return value;
}


void main() {
  vec3 animatedPosition = position;
  float angle = atan(position.y, position.x);
  float radius = length(position.xy);
/*------------------------------
Block
------------------------------*/
  // Calculate curl noise
  // vec3 curlNoise = curl(position + uTime * 0.05) * 0.05;
  // float offsetX = curlNoise.x;
  // float offsetY = curlNoise.y;

  // float noisefactor = random(position, uTime) * 0.1 + 0.1;
  // float offsetX = sin(uTime * 0.2+ angle * 3.0) * noisefactor;
  // float offsetY = cos(uTime * 0.2 + angle * 2.0) * noisefactor;
  // animatedPosition.x = (radius + offsetX) * cos(angle + uTime * 0.1);
  // animatedPosition.y = (radius + offsetY) * sin(angle + uTime * 0.1);
  /*------------------------------
  Block
  ------------------------------*/
    // Calculate FBM for smooth motion
  float fbmValue = fbm(position * 0.1 + uTime * 0.05);

  // Use FBM value to create a smooth offset
  float offsetX = fbmValue * 0.1;
  float offsetY = fbmValue * 0.1;

  // Apply the circular motion and FBM offset
  animatedPosition.x = (radius + offsetX) * cos(angle + uTime * 0.4);
  animatedPosition.y = (radius + offsetY) * sin(angle + uTime * 0.4);

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