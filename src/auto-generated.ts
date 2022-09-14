
const runTimeDependencies = {
    "load": {
        "@youwol/cdn-client": "^1.0.2",
        "@youwol/http-clients": "^1.0.2",
        "@youwol/flux-view": "^1.0.3",
        "@youwol/fv-tree": "^0.2.3",
        "@youwol/os-core": "^0.1.1",
        "@youwol/fv-context-menu": "^0.1.1",
        "@youwol/fv-input": "^0.2.1",
        "@youwol/fv-tabs": "^0.2.1",
        "lodash": "^4.17.15",
        "rxjs": "^6.5.5",
        "uuid": "^8.3.2"
    },
    "differed": {},
    "includedInBundle": []
}
const externals = {
    "@youwol/cdn-client": {
        "commonjs": "@youwol/cdn-client",
        "commonjs2": "@youwol/cdn-client",
        "root": "@youwol/cdn-client_APIv1"
    },
    "@youwol/http-clients": {
        "commonjs": "@youwol/http-clients",
        "commonjs2": "@youwol/http-clients",
        "root": "@youwol/http-clients_APIv1"
    },
    "@youwol/flux-view": {
        "commonjs": "@youwol/flux-view",
        "commonjs2": "@youwol/flux-view",
        "root": "@youwol/flux-view_APIv1"
    },
    "@youwol/fv-tree": {
        "commonjs": "@youwol/fv-tree",
        "commonjs2": "@youwol/fv-tree",
        "root": "@youwol/fv-tree_APIv02"
    },
    "@youwol/os-core": {
        "commonjs": "@youwol/os-core",
        "commonjs2": "@youwol/os-core",
        "root": "@youwol/os-core_APIv01"
    },
    "@youwol/fv-context-menu": {
        "commonjs": "@youwol/fv-context-menu",
        "commonjs2": "@youwol/fv-context-menu",
        "root": "@youwol/fv-context-menu_APIv01"
    },
    "@youwol/fv-input": {
        "commonjs": "@youwol/fv-input",
        "commonjs2": "@youwol/fv-input",
        "root": "@youwol/fv-input_APIv02"
    },
    "@youwol/fv-tabs": {
        "commonjs": "@youwol/fv-tabs",
        "commonjs2": "@youwol/fv-tabs",
        "root": "@youwol/fv-tabs_APIv02"
    },
    "lodash": {
        "commonjs": "lodash",
        "commonjs2": "lodash",
        "root": "__APIv4"
    },
    "rxjs": {
        "commonjs": "rxjs",
        "commonjs2": "rxjs",
        "root": "rxjs_APIv6"
    },
    "uuid": {
        "commonjs": "uuid",
        "commonjs2": "uuid",
        "root": "uuid_APIv8"
    },
    "rxjs/operators": {
        "commonjs": "rxjs/operators",
        "commonjs2": "rxjs/operators",
        "root": [
            "rxjs_APIv6",
            "operators"
        ]
    }
}
const exportedSymbols = {
    "@youwol/cdn-client": {
        "apiKey": "1",
        "exportedSymbol": "@youwol/cdn-client"
    },
    "@youwol/http-clients": {
        "apiKey": "1",
        "exportedSymbol": "@youwol/http-clients"
    },
    "@youwol/flux-view": {
        "apiKey": "1",
        "exportedSymbol": "@youwol/flux-view"
    },
    "@youwol/fv-tree": {
        "apiKey": "02",
        "exportedSymbol": "@youwol/fv-tree"
    },
    "@youwol/os-core": {
        "apiKey": "01",
        "exportedSymbol": "@youwol/os-core"
    },
    "@youwol/fv-context-menu": {
        "apiKey": "01",
        "exportedSymbol": "@youwol/fv-context-menu"
    },
    "@youwol/fv-input": {
        "apiKey": "02",
        "exportedSymbol": "@youwol/fv-input"
    },
    "@youwol/fv-tabs": {
        "apiKey": "02",
        "exportedSymbol": "@youwol/fv-tabs"
    },
    "lodash": {
        "apiKey": "4",
        "exportedSymbol": "_"
    },
    "rxjs": {
        "apiKey": "6",
        "exportedSymbol": "rxjs"
    },
    "uuid": {
        "apiKey": "8",
        "exportedSymbol": "uuid"
    }
}
export const setup = {
    name:'@youwol/os-explorer',
        assetId:'QHlvdXdvbC9vcy1leHBsb3Jlcg==',
    version:'0.1.1',
    shortDescription:"Explorer & related components of YouWol's Operating System.",
    developerDocumentation:'https://platform.youwol.com/applications/@youwol/cdn-explorer/latest?package=@youwol/os-explorer',
    npmPackage:'https://www.npmjs.com/package/@youwol/os-explorer',
    sourceGithub:'https://github.com/youwol/os-explorer',
    userGuide:'https://l.youwol.com/doc/@youwol/os-explorer',
    apiVersion:'01',
    runTimeDependencies,
    externals,
    exportedSymbols,
    getDependencySymbolExported: (module:string) => {
        return `${exportedSymbols[module].exportedSymbol}_APIv${exportedSymbols[module].apiKey}`
    }
}
