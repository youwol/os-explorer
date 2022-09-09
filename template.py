from pathlib import Path

from youwol.pipelines.pipeline_typescript_weback_npm import Template, PackageType, Dependencies, \
    RunTimeDeps, generate_template

template = Template(
    path=Path(__file__).parent,
    type=PackageType.Library,
    name="@youwol/os-explorer",
    version="0.0.4-wip",
    shortDescription="Explorer & related components of YouWol's Operating System.",
    author="greinisch@youwol.com",
    dependencies=Dependencies(
        runTime=RunTimeDeps(
            load={
                "@youwol/cdn-client": "^0.1.4",
                "@youwol/http-clients": "^0.1.12",
                "@youwol/flux-view": "^0.1.1",
                "@youwol/fv-tree": "^0.1.4",
                "@youwol/os-core": "^0.0.6",  # this version is not yet published in npm => use 0.0.5 in dependencies
                "rxjs": "^6.5.5",
                "uuid": "^8.3.2"
            }
        ),
        devTime={
            # for now those are the peer dependencies
            "@youwol/fv-input": "^0.1.0",
            "@youwol/fv-tabs": "^0.1.2",
            # this version is not yet published in npm => use 0.0.3 in dependencies
            "@youwol/fv-context-menu": "^0.0.4",
        }
    ),
    userGuide=True
    )

generate_template(template)
