import { BehaviorSubject } from "rxjs";

export interface AppAction{
    type:string;
    payload:any;
}

export type MessageLevel = 1 | 2 | 3;

export interface Message{
    readonly id:number;
    timestamp:number;
    title:string;
    content:string;
    level:MessageLevel;
}

// export type tweet = { [key in keyof Message]: any };

// export type tweet = Partial<Message>;

// export type tweet = Pick<Message, 'id'>;
// export type tweet = Omit<Message, 'id'>;

export interface AppState{
    messages:Array<Message>;
}

export interface AppDispatcher{

    /* 
        Observable - (fromFactory, Explicit)

        Subject
        BehaviorSubject
        ReplaySubject

        AsyncSubject
    */

    state$:BehaviorSubject<AppState>;
    action$:BehaviorSubject<AppAction>;

    dispatch(action:any):unknown;

}