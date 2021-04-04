var fs = require("fs");

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
      port: 2424,
      host: '0.0.0.0',
      disableHostCheck: true,
      https: {
        key: fs.readFileSync('/etc/letsencrypt/live/snkstream.com/privkey.pem'),
        cert: fs.readFileSync('/etc/letsencrypt/live/snkstream.com/cert.pem'),
        ca: fs.readFileSync('/etc/letsencrypt/live/snkstream.com/chain.pem')
    }
}
}
