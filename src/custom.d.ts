type Tag = {
    id: string;
    name: string;
}


type RecordItem = {
    tags: Tag[]
    notes: string
    type: string
    amount: number
    createdAt?:string
}


type TagListModel = {
    data: Tag[]
    fetch: () => Tag[]
    create: (name: string) => 'success' | 'duplicated' // 联合类型
    update: (id: string, name: string) => 'success' | 'not found' | 'duplicated'
    remove: (id: string) => boolean
    save: () => void
}

