export interface SearchModel <T extends Record<PropertyKey, any>> {
    data: T[]
    filtered: T[]
    search: string
}

export type UserType = {
    id: number
    name: string
    address: string
    age: string
    searchPattern?: string
}

