interface Action {
    type: string;
    [key: string]: any;
}

export interface KlgDispatcher {
    dispatch(action: Action): unknown;
    [key: string]: any;
}