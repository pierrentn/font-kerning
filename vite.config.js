import { resolve } from 'path'
import copy from 'rollup-plugin-copy'

const config = {
  plugins: [
    copy({
      targets: [
        { src: './node_modules/@company/css-library/assets/fonts/**/*', dest: 'public/fonts' },
        { src: './node_modules/@company/css-library/assets/img/**/*', dest: 'public/img' }
      ]
    })
  ],
  alias: {
    '@': resolve(__dirname, 'src')
  }
}

export default config