# webpack-bug-mf-systemjs
A minimal example to show that exposed modules of a container of plugins are loaded from the host origin when the container is compiled as a SystemJS library.

Run
```
yarn
cd plugins
yarn start
```
In another shell run:

```
cd host
yarn start
```

Open a browser at http://locahost:9000/ and look at the network tab.
You should see that a first request is made to `http://localhost:9001/remoteEntry.js` and that there are two failing requests to `http://localhost:9000/src_plugin1_js.js` and `http://localhost:9000/src_plugin2_js.js`.
