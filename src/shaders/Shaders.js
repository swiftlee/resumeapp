const glsl = require('glslify');
const fragShader = require('./particle.frag');
const vertShader = require('./particle.vert');

export const shaders = {
    particle: {
        frag: glsl(fragShader),
        vert: glsl(vertShader)
    }
};

console.log(shaders.particle.frag);

