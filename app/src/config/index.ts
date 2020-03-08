const momentConfig = {
    timezone: process.env.TIMEZONE || 'America/Sao_Paulo'
}

/**
 * logger configuration fixed for all jobs
 * @memberof config
 */
const escribaConf = {
    sensitiveConf: {
      password: {
        paths: ['message.password'],
        pattern: /\w.*/g,
        replacer: '*'
      }
    },
    log4jsConf: {
      appenders: {
        out: {
          type: 'console',
          layout: {
            type: 'pattern',
            pattern: '[%d] %m'
          }
        }
      },
      'categories': {
        default: {
          appenders: [
            'out'
          ],
          level: 'info'
        }
      }
    }
  }

export {
    momentConfig, 
    escribaConf
}