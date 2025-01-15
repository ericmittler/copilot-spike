module.exports = {
  color: true,
  diff: true,
  extension: ['js'
  ],
  package: './package.json',
  reporter: 'spec',
  slow: 300,
  timeout: 5000,
  ui: 'bdd',
  'watch-files': ['imports /**/*.js', 'client /**/*.js', 'server /**/*.js'
  ],
  'watch-ignore': ['lib/vendor', 'node_modules'
  ]
}