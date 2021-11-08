require('esbuild').build({
  entryPoints: ['react/index.js'],
  // outfile: 'index.esbuild.js',
  minify: true,
  bundle: true,
  outdir: 'dist',
  splitting: true,
  sourcemap: true,
  format: 'esm',
  watch: {
    onRebuild(error, result) {
      if (error) console.error('watch build failed:', error)
      else console.log('watch build succeeded:', result)
    },
  },
}).then(result => {
  console.log('watching...')
})