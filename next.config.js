// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
const withReactSvg = require('next-react-svg')
const path = require('path')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  },
  future: {
    webpack5: true
  }
})

module.exports = withReactSvg({
  include: path.resolve(__dirname, 'src/assets/svg'),
  webpack(config, options) {
    return config
  }
})
