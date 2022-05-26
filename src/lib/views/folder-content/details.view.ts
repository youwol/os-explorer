import { VirtualDOM } from '@youwol/flux-view'
import { ExplorerState } from '../../explorer.state'
import { AnyFolderNode, AnyItemNode, ItemNode, ProgressNode } from '../../nodes'
import { ItemView, ProgressItemView } from './item.view'
import { installContextMenu } from '../../context-menu/context-menu'

export class DetailsContentView {
    public readonly class =
        'fv-text-primary w-100 h-100 d-flex flex-column text-center overflow-auto'
    public readonly style = { 'max-height': '100%' }
    public readonly children: VirtualDOM[]

    public readonly folder: AnyFolderNode
    public readonly items: AnyItemNode[]

    public readonly state: ExplorerState
    public readonly onclick = () => this.state.selectedItem$.next(undefined)
    public readonly oncontextmenu = () =>
        this.state.selectedItem$.next(undefined)

    public readonly connectedCallback = (elem) => {
        installContextMenu({
            state: this.state,
            div: elem,
            node: this.folder,
        })
    }

    constructor(params: {
        state: ExplorerState
        items: AnyItemNode[]
        folder: AnyFolderNode
    }) {
        Object.assign(this, params)

        this.children = [
            {
                class: 'flex-grow-1 overflow-auto',
                children: this.items.map((item: ItemNode) =>
                    item instanceof ProgressNode
                        ? new ProgressItemView({ state: this.state, item })
                        : new ItemView({ state: this.state, item }),
                ),
            },
        ]
    }
}
