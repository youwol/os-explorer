import { attr$, child$, Stream$, VirtualDOM } from '@youwol/flux-view'

import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs'
import { filter, map } from 'rxjs/operators'

import { ExplorerState } from '../../explorer.state'
import {
    BrowserNode,
    DeletedItemNode,
    FutureItemNode,
    ItemNode,
    ProgressNode,
} from '../../nodes'
import { installContextMenu } from '../../context-menu/context-menu'
import {
    ApplicationInfo,
    OpenWithParametrization,
    tryOpenWithDefault$,
    defaultOpeningApp$,
} from '@youwol/os-core'
import { AssetsGateway, ExplorerBackend } from '@youwol/http-clients'
import { setup } from '../../../auto-generated'

export class ProgressItemView {
    static ClassSelector = 'progress-item-view'
    public readonly class = `${ProgressItemView.ClassSelector} d-flex flex-column p-1 rounded m-3 fv-hover-bg-background-alt fv-pointer`
    public readonly children: VirtualDOM[]
    public readonly item: ProgressNode

    constructor(params: {
        state: ExplorerState
        item: ProgressNode
        hovered$?: Observable<BrowserNode>
    }) {
        Object.assign(this, params)

        this.children = [
            {
                class: 'd-flex align-items-center',
                children: [
                    {
                        class:
                            this.item.direction == 'download'
                                ? 'fas fa-arrow-alt-circle-down px-2 fv-blink'
                                : 'fas fa-arrow-alt-circle-up px-2 fv-blink',
                    },
                    {
                        innerText: this.item.name,
                    },
                ],
            },
            {
                class: 'w-100 border rounded',
                children: [
                    {
                        style: attr$(
                            this.item.progress$.pipe(
                                filter((progress) => progress.totalCount > 0),
                                map((progress) =>
                                    Math.floor(
                                        (100 * progress.transferredCount) /
                                            progress.totalCount,
                                    ),
                                ),
                            ),
                            (progress) => ({
                                backgroundColor: 'green',
                                width: `${progress}%`,
                                height: '5px',
                            }),
                        ),
                    },
                ],
            },
        ]
    }
}

type ItemViewNode = ItemNode | FutureItemNode | DeletedItemNode

export class ItemView {
    static ClassSelector = 'item-view'
    public readonly baseClasses = `${ItemView.ClassSelector} d-flex align-items-center p-1 rounded fv-hover-bg-background-alt fv-pointer`
    public readonly class: Stream$<[BrowserNode, boolean], string>
    public readonly children: VirtualDOM[]
    public readonly style: Stream$<
        { type: string; id: string }[],
        { [key: string]: string }
    >
    public readonly contextMenuSelection$ = new BehaviorSubject(false)
    public readonly defaultOpeningApp$: Observable<
        | {
              appInfo: ApplicationInfo
              parametrization: OpenWithParametrization
          }
        | undefined
    >
    public readonly onclick = (ev: PointerEvent) => {
        this.state.selectItem(this.item)
        ev.stopPropagation()
    }

    public readonly ondblclick = (ev: PointerEvent) => {
        if (this.item instanceof ItemNode) {
            tryOpenWithDefault$(this.item).subscribe()
        }
        this.state.selectItem(this.item)
        ev.stopPropagation()
    }
    public readonly state: ExplorerState
    public readonly item: ItemViewNode
    public readonly assetsClient = new AssetsGateway.Client().assets
    public readonly oncontextmenu = (ev) => {
        ev.stopPropagation()
    }

    public readonly connectedCallback = (elem) => {
        const view = installContextMenu({
            state: this.state,
            div: elem,
            node: this.item,
        })
        view.state.event$
            .pipe(filter((event) => event == 'displayed'))
            .subscribe(() => this.contextMenuSelection$.next(true))
        view.state.event$
            .pipe(filter((event) => event == 'removed'))
            .subscribe(() => this.contextMenuSelection$.next(false))
    }

    constructor(params: { state: ExplorerState; item: ItemViewNode }) {
        Object.assign(this, params)
        this.defaultOpeningApp$ = ExplorerBackend.isInstanceOfItemResponse(
            this.item,
        )
            ? defaultOpeningApp$(this.item)
            : of(undefined)

        this.class = attr$(
            combineLatest([
                this.state.selectedItem$,
                this.contextMenuSelection$,
            ]),
            ([node, rightClick]): string => {
                const base = `${this.baseClasses} ${
                    rightClick ? 'fv-bg-background-alt' : ''
                }`
                return node && node.id == this.item.id
                    ? `${base} fv-text-focus`
                    : `${base}`
            },
            { untilFirst: this.baseClasses },
        )

        this.style = attr$(
            this.item.status$,
            (statuses: { type; id }[]) =>
                statuses.find((s) => s.type == 'cut') != undefined
                    ? { opacity: '0.3' }
                    : {},
            {
                wrapper: (d) => ({ ...d, userSelect: 'none' }),
            },
        )

        this.children = [
            {
                class: 'd-flex align-items-center flex-grow-1',
                style: { minWidth: '0px' },
                children: [
                    child$(this.defaultOpeningApp$, (appData) => {
                        return appData &&
                            appData.appInfo.graphics &&
                            appData.appInfo.graphics.fileIcon
                            ? {
                                  style: {
                                      height: '25px',
                                      width: '25px',
                                  },
                                  children: [appData.appInfo.graphics.fileIcon],
                              }
                            : new UndefinedIconFileView()
                    }),
                    child$(this.item.status$, (statusList) =>
                        statusList.find((s) => s.type == 'renaming')
                            ? this.editView()
                            : {
                                  innerText: this.item.name,
                                  class: 'mx-2',
                                  style: {
                                      textOverflow: 'ellipsis',
                                      whiteSpace: 'nowrap',
                                      overflow: 'hidden',
                                  },
                              },
                    ),
                ],
            },
            this.originView(this.item),
            child$(this.item.status$, (status) => {
                return status.find((s) => s.type == 'request-pending')
                    ? {
                          class: 'fas fa-spinner fa-spin',
                      }
                    : {}
            }),
        ]
    }

    originView(node: BrowserNode) {
        return {
            class: 'd-flex align-items-center ml-auto',
            children: [
                this.item instanceof ItemNode && this.item.borrowed
                    ? { class: 'fas fa-link pr-1 py-1' }
                    : undefined,
                node.origin && node.origin.local
                    ? { class: 'fas fa-laptop py-1' }
                    : undefined,
                node.origin && node.origin.remote
                    ? { class: 'fas fa-cloud py-1' }
                    : undefined,
            ],
        }
    }

    editView() {
        return {
            tag: 'input',
            type: 'text',
            autofocus: true,
            style: { 'z-index': 200 },
            class: 'mx-2',
            value: this.item.name,
            onclick: (ev) => ev.stopPropagation(),
            onkeydown: (ev) => {
                if (ev.key === 'Enter') {
                    this.state.rename(this.item as ItemNode, ev.target.value)
                }
            },
        }
    }
}

export class UndefinedIconFileView implements VirtualDOM {
    public readonly style = {
        height: '25px',
        width: '25px',
    }
    public readonly children: VirtualDOM[]

    constructor() {
        this.children = [
            {
                style: {
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url('/api/assets-gateway/cdn-backend/resources/${setup.assetId}/${setup.version}/assets/undefined_icon_file.svg')`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    filter: 'drop-shadow(rgb(0, 0, 0) 1px 3px 5px)',
                    borderRadius: '15%',
                },
            },
        ]
    }
}
