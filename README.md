# Demo of the Webpack Dev Server port issue

The default behavior of `localhost` is to use IPv6 if something is available on those ports, then fallback to IPv4.
The `port` setting on the Webpack Dev Server appears to open on IPv4, so if something else is using the same port on IPv6
`localhost` will open that instead.

This lab is a demonstration of that behavior.

## How it works

The `blocking-server.js` script will bind a server listening on IPv6 port `9876`. This server simply responds to all requests
with a message stating it is not the Webpack dev server.

The Webpack Dev Server also listens on port `9876` but displays a simple HTML page claiming to be the dev server.

To get started use:
1. `npm install`
2. `npm start`

Once the build finishes a browser tab should be opened to `http://localhost:9876` which should declare that it is not the Webpack
Dev Server. Changing this to `127.0.0.1:9876` should declare that it is the Webpack Dev Server.

## Workaround: Using port 0

To get around this you can supply port 0 to the Webpack Dev Server config, which will have the OS assign an unused port.
