module.exports = {
  presets: [
    [ 
      // '@babel/preset-react',
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
          esmodules: true
        }
      }
    ],
    [
      '@babel/preset-react', 
      {
        runtime: 'automatic'
      }
    ]
  ],
};