module.exports = {
  presets: [
      [ '@babel/preset-env', { targets: { esmodules: true } } ],
      [ '@babel/preset-react', { runtime: 'automatic' } ],
  ],
};


/*module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-react'
  ],
  plugins: ['@babel/plugin-transform-modules-commonjs'],
};*/

