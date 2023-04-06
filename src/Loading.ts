export default function dealy(milisec: number){
    return new Promise(resolve => {
        setTimeout(() => { resolve(' ') }, milisec)
    })
}