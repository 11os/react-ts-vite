import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsconfig: './packages/mq-lib/tsconfig.json'
    }
  }
}

export default config
