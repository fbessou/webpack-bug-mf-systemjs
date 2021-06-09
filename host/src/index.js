import 'systemjs/dist/system'

const plugins = [];

for (const pluginName of ['./plugin1', './plugin2']) {
    System.import(`http://localhost:9001/remoteEntry.js`).then(async(container) => {
        await __webpack_init_sharing__('default');
        await container.init(__webpack_share_scopes__.default);
        container.setPublicPath('http://localhost:9001/')
        const factory = await container.get(pluginName);
        plugins.push(factory().default)
    })
}

const root = 'Host Package';

plugins.forEach(plugin => {
    plugin(root)
})

