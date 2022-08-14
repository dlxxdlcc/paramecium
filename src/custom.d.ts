type Tag = {
    id: string;
    name: string;
}


type RecordItem = {
    tags: Tag[]
    notes: string
    type: string
    amount: number
    createdAt?:Date
}
