export default function delay(milisec: number){
    return new Promise(resolve => {
        setTimeout(() => { resolve(' ') }, milisec)
    })
}