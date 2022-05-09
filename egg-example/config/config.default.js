const config = {}

config.keys = 'xyz_1651570006507_7702'

config.cluster = {
    listen: {
        path: '',
        port: 8080,
        hostname: '0.0.0.0',
    }
}

config.security = {
    csrf: {
        enable: false,
    },
}

module.exports = config