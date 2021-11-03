
export function delay(value: any, max_count: number, callback: any) {
    let count = 0
    let timer: any = null

    const polling = () => {
        // tslint:disable-next-line:no-eval
        const v = eval(value)
        if (!v) {
            count++
            if (count >= max_count) {
                clearInterval(timer)
                timer = null
            }
            return
        }
        clearInterval(timer)
        timer = null
        callback(v)
    }
    timer = setInterval(polling, 100)
}