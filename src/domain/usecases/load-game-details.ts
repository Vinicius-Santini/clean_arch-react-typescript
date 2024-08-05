import { GameDetailsModel } from "../models";

export interface LoadGameDetails {
    load: () => Promise<LoadGameDetails.Model>
}

export namespace LoadGameDetails {
    export type Model = GameDetailsModel;
}