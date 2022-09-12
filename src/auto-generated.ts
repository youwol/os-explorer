
const runTimeDependencies = {
    "load": {
        "@youwol/cdn-client": "^1.0.1",
        "@youwol/http-clients": "^1.0.0",
        "@youwol/flux-view": "^1.0.0",
        "@youwol/fv-tree": "^0.2.0",
        "@youwol/os-core": "^0.1.0",
        "@youwol/fv-context-menu": "^0.1.0",
        "@youwol/fv-input": "^0.2.0",
        "@youwol/fv-tabs": "^0.2.0",
        "lodash": "^4.17.15",
        "rxjs": "^6.5.5",
        "uuid": "^8.3.2"
    },
    "differed": {},
    "includedInBundle": []
}
const externals = {
    "@youwol/cdn-client": "@youwol/cdn-client_APIv1",
    "@youwol/http-clients": "@youwol/http-clients_APIv1",
    "@youwol/flux-view": "@youwol/flux-view_APIv1",
    "@youwol/fv-tree": "@youwol/fv-tree_APIv02",
    "@youwol/os-core": "@youwol/os-core_APIv01",
    "@youwol/fv-context-menu": "@youwol/fv-context-menu_APIv01",
    "@youwol/fv-input": "@youwol/fv-input_APIv02",
    "@youwol/fv-tabs": "@youwol/fv-tabs_APIv02",
    "lodash": "__APIv4",
    "rxjs": "rxjs_APIv6",
    "uuid": "uuid_APIv8",
    "rxjs/operators": {
        "commonjs": "rxjs/operators",
        "commonjs2": "rxjs/operators",
        "root": [
            "rxjs_APIv6",
            "operators"
        ]
    }
}
export const setup = {
    name:'@youwol/os-explorer',
    assetId:'QHlvdXdvbC9vcy1leHBsb3Jlcg==',
    version:'0.1.0',
    shortDescription:"Explorer & related components of YouWol's Operating System.",
    developerDocumentation:'https://platform.youwol.com/applications/@youwol/cdn-explorer/latest?package=@youwol/os-explorer',
    npmPackage:'https://www.npmjs.com/package/@youwol/os-explorer',
    sourceGithub:'https://github.com/youwol/os-explorer',
    userGuide:'https://l.youwol.com/doc/@youwol/os-explorer',
    apiVersion:'01',
    runTimeDependencies,
    externals
}
