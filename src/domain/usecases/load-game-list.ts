export interface LoadGameList {
    loadAll: () => Promise<LoadGameList.Model>
}

export type Game = {
    id: string
    name: string
    background_image: string  
}

export namespace LoadGameList {
    export type Model = {
        count:  number
        next: string
        previous: string
        results: Game[]
    }
}
  