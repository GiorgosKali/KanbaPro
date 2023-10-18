export interface tCard {
    id: string,
    title: string,
    body?: string,
    createdAt?: string,
    updatedAt?: string,
    listId?: string
}

export interface tList {
    id: string,
    title: string,
    cards?: tCard[];
}

export interface tBoard {
    title: string,
    lists?: tList[];
}