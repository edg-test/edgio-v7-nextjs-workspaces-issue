// This file was automatically added by edgio init.
// You should commit this file to source control.
const { withEdgio } = require('@edgio/next/config')
const { join } = require("path")

module.exports = (_phase, _config) => withEdgio({
  transpilePackages: ['@project/components'],
  experimental: {
    // outputFileTracingRoot: join(__dirname, "../../"),
  },
})
