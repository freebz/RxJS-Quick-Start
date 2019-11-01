protected requestAsyncId(scheduler: AsapScheduler, id?: any, delay: number = 0): any {
    //...
    return scheduler.scheduled || (scheduler.scheduled = Immediate.setImmediate(
	scheduler.flush.bind(scheduler, null)
    ));
}

setImmediate(cb: () => void): number {
    // ...
    Promise.resolve().then(() => runIfPresent(handle));
}
