import shutil
from pathlib import Path

from youwol.pipelines.pipeline_typescript_weback_npm import Template, PackageType, Dependencies, \
    RunTimeDeps, generate_template
from youwol_utils import parse_json

folder_path = Path(__file__).parent

pkg_json = parse_json(folder_path / 'package.json')


template = Template(
    path=folder_path,
    type=PackageType.Library,
    name=pkg_json['name'],
    version=pkg_json['version'],
    shortDescription=pkg_json['description'],
    author=pkg_json['author'],
    dependencies=Dependencies(
        runTime=RunTimeDeps(
            load={
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
            }
        ),
        devTime={}
    ),
    userGuide=True
)

generate_template(template)

shutil.copyfile(
    src=folder_path / '.template' / 'src' / 'auto-generated.ts',
    dst=folder_path / 'src' / 'auto-generated.ts'
)
for file in ['README.md', '.gitignore', '.npmignore', '.prettierignore', 'LICENSE', 'package.json',
             'tsconfig.json', 'webpack.config.ts']:
    shutil.copyfile(
        src=folder_path / '.template' / file,
        dst=folder_path / file
    )



