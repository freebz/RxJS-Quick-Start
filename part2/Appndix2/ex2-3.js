protected requestAsyncId(scheduler: AsyncScheduler, id?: any, delay: number = 0): any {
    return setInterval(scheduler.flush.bind(scheduler, this), delay);
}
