export function match(param){
    console.log(param,'here i use matchers')
    return /^\d+$/.test(param)
}