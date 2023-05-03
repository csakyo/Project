// const input = document.getElementById('username') as HTMLInputElement
// input.placeholder = '田中太郎'

const input = <HTMLInputElement>document.getElementById('username')
input.placeholder = '田中太郎'

