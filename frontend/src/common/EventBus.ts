const EventBus = {
    on(event: string, callBack: EventListener) {
        document.addEventListener(event, (e) => callBack(e))
    },
    dispatch(event: string, data?: any) {
        document.dispatchEvent(new CustomEvent(event, { detail: data }))
    },
    remove(event: string, callBack: EventListener) {
        document.removeEventListener(event, callBack)
    }
}

export default EventBus