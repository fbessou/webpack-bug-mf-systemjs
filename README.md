# webpack-bug-mf-systemjs
A minimal example to show that exposed modules of a container of plugins are loaded from the host origin when the container is compiled as a SystemJS library.
**Update: added a setPublicPath.js file in the plugin to show that when using entry merging, the exports from the merged file replace the `init` and `get` functions which were previously exported**

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
**Update: the container `init` method should not be found on the container.
The error looks like this on firefox :
```
Uncaught (in promise) TypeError: container.init is not a function
    <anonymous> webpack://host/./src/index.js?:11
    async* webpack://host/./src/index.js?:9
    js http://localhost:9000/main.js:19
    __webpack_require__ http://localhost:9000/main.js:377
    <anonymous> http://localhost:9000/main.js:497
    <anonymous> http://localhost:9000/main.js:500

```
**
