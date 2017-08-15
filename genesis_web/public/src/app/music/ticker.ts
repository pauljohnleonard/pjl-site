


export interface Ticker {
   
    //  Sequencer interface
    tick():void
    start():void
    stop():void

    // Database interface
    // Adds any items that need to be persisted using the saver
    // append list save items onto items
    addPostItems(items: any, saver: any):void 

}