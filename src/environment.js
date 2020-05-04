const PRODUCTION = 'production'

export const Env = {
  isProduction: () => process.env.REACT_APP_ENV === PRODUCTION,

  TILE_KEY: 'TILE_KEY',

  getEnv: service => {
    const envs = {
      production: {
        TILE_KEY: process.env.TILE_KEY
      },
      development: {
        TILE_KEY: process.env.TILE_KEY
      }
    }

    return envs[process.env.REACT_APP_ENV || PRODUCTION][service]
  }
}
