
const runTimeDependencies = {
    "externals": {
        "@youwol/cdn-client": "^2.1.0",
        "@youwol/flux-view": "^1.1.0",
        "@youwol/fv-context-menu": "^0.1.1",
        "@youwol/fv-input": "^0.2.1",
        "@youwol/fv-tabs": "^0.2.1",
        "@youwol/fv-tree": "^0.2.3",
        "@youwol/http-clients": "^2.0.5",
        "@youwol/http-primitives": "^0.1.2",
        "@youwol/os-core": "^0.1.13",
        "lodash": "^4.17.15",
        "rxjs": "^6.5.5",
        "uuid": "^8.3.2"
    },
    "includedInBundle": {}
}
const externals = {
    "@youwol/cdn-client": {
        "commonjs": "@youwol/cdn-client",
        "commonjs2": "@youwol/cdn-client",
        "root": "@youwol/cdn-client_APIv2"
    },
    "@youwol/flux-view": {
        "commonjs": "@youwol/flux-view",
        "commonjs2": "@youwol/flux-view",
        "root": "@youwol/flux-view_APIv1"
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
    "@youwol/fv-tree": {
        "commonjs": "@youwol/fv-tree",
        "commonjs2": "@youwol/fv-tree",
        "root": "@youwol/fv-tree_APIv02"
    },
    "@youwol/http-clients": {
        "commonjs": "@youwol/http-clients",
        "commonjs2": "@youwol/http-clients",
        "root": "@youwol/http-clients_APIv2"
    },
    "@youwol/http-primitives": {
        "commonjs": "@youwol/http-primitives",
        "commonjs2": "@youwol/http-primitives",
        "root": "@youwol/http-primitives_APIv01"
    },
    "@youwol/os-core": {
        "commonjs": "@youwol/os-core",
        "commonjs2": "@youwol/os-core",
        "root": "@youwol/os-core_APIv01"
    },
    "lodash": {
        "commonjs": "lodash",
        "commonjs2": "lodash",
        "root": "lodash_APIv4"
    },
    "rxjs": {
        "commonjs": "rxjs",
        "commonjs2": "rxjs",
        "root": "rxjs_APIv6"
    },
    "rxjs/operators": {
        "commonjs": "rxjs/operators",
        "commonjs2": "rxjs/operators",
        "root": [
            "rxjs_APIv6",
            "operators"
        ]
    },
    "uuid": {
        "commonjs": "uuid",
        "commonjs2": "uuid",
        "root": "uuid_APIv8"
    }
}
const exportedSymbols = {
    "@youwol/cdn-client": {
        "apiKey": "2",
        "exportedSymbol": "@youwol/cdn-client"
    },
    "@youwol/flux-view": {
        "apiKey": "1",
        "exportedSymbol": "@youwol/flux-view"
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
    "@youwol/fv-tree": {
        "apiKey": "02",
        "exportedSymbol": "@youwol/fv-tree"
    },
    "@youwol/http-clients": {
        "apiKey": "2",
        "exportedSymbol": "@youwol/http-clients"
    },
    "@youwol/http-primitives": {
        "apiKey": "01",
        "exportedSymbol": "@youwol/http-primitives"
    },
    "@youwol/os-core": {
        "apiKey": "01",
        "exportedSymbol": "@youwol/os-core"
    },
    "lodash": {
        "apiKey": "4",
        "exportedSymbol": "lodash"
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

const mainEntry : {entryFile: string,loadDependencies:string[]} = {
    "entryFile": "./index.ts",
    "loadDependencies": [
        "@youwol/cdn-client",
        "@youwol/http-clients",
        "@youwol/http-primitives",
        "@youwol/flux-view",
        "@youwol/fv-tree",
        "@youwol/os-core",
        "@youwol/fv-context-menu",
        "@youwol/fv-input",
        "@youwol/fv-tabs",
        "lodash",
        "rxjs",
        "uuid"
    ]
}

const secondaryEntries : {[k:string]:{entryFile: string, name: string, loadDependencies:string[]}}= {}

const entries = {
     '@youwol/os-explorer': './index.ts',
    ...Object.values(secondaryEntries).reduce( (acc,e) => ({...acc, [`@youwol/os-explorer/${e.name}`]:e.entryFile}), {})
}
export const setup = {
    name:'@youwol/os-explorer',
        assetId:'QHlvdXdvbC9vcy1leHBsb3Jlcg==',
    version:'0.1.5-wip',
    shortDescription:"Explorer & related components of YouWol's Operating System.",
    developerDocumentation:'https://platform.youwol.com/applications/@youwol/cdn-explorer/latest?package=@youwol/os-explorer&tab=doc',
    npmPackage:'https://www.npmjs.com/package/@youwol/os-explorer',
    sourceGithub:'https://github.com/youwol/os-explorer',
    userGuide:'https://l.youwol.com/doc/@youwol/os-explorer',
    apiVersion:'01',
    runTimeDependencies,
    externals,
    exportedSymbols,
    entries,
    secondaryEntries,
    getDependencySymbolExported: (module:string) => {
        return `${exportedSymbols[module].exportedSymbol}_APIv${exportedSymbols[module].apiKey}`
    },

    installMainModule: ({cdnClient, installParameters}:{
        cdnClient:{install:(unknown) => Promise<WindowOrWorkerGlobalScope>},
        installParameters?
    }) => {
        const parameters = installParameters || {}
        const scripts = parameters.scripts || []
        const modules = [
            ...(parameters.modules || []),
            ...mainEntry.loadDependencies.map( d => `${d}#${runTimeDependencies.externals[d]}`)
        ]
        return cdnClient.install({
            ...parameters,
            modules,
            scripts,
        }).then(() => {
            return window[`@youwol/os-explorer_APIv01`]
        })
    },
    installAuxiliaryModule: ({name, cdnClient, installParameters}:{
        name: string,
        cdnClient:{install:(unknown) => Promise<WindowOrWorkerGlobalScope>},
        installParameters?
    }) => {
        const entry = secondaryEntries[name]
        if(!entry){
            throw Error(`Can not find the secondary entry '${name}'. Referenced in template.py?`)
        }
        const parameters = installParameters || {}
        const scripts = [
            ...(parameters.scripts || []),
            `@youwol/os-explorer#0.1.5-wip~dist/@youwol/os-explorer/${entry.name}.js`
        ]
        const modules = [
            ...(parameters.modules || []),
            ...entry.loadDependencies.map( d => `${d}#${runTimeDependencies.externals[d]}`)
        ]
        return cdnClient.install({
            ...parameters,
            modules,
            scripts,
        }).then(() => {
            return window[`@youwol/os-explorer/${entry.name}_APIv01`]
        })
    },
    getCdnDependencies(name?: string){
        if(name && !secondaryEntries[name]){
            throw Error(`Can not find the secondary entry '${name}'. Referenced in template.py?`)
        }
        const deps = name ? secondaryEntries[name].loadDependencies : mainEntry.loadDependencies

        return deps.map( d => `${d}#${runTimeDependencies.externals[d]}`)
    }
}
