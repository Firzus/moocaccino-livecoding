export interface IEmitter{
    subscribe(eventType:string, subscriber:Function):boolean;
    isObserver(eventType:string, subscriber:Function):boolean;
    unsubscribe(eventType:string, subscriber:Function):void;
    emit(eventType:string, payload:any):void;
    hasObservers(eventType:string): boolean;
}