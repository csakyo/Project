function funcTest(str:string, int:number) : void{
    console.log(`文字は${str}、値は${int}`)
}

funcTest('aaa', 123)


const arrowFuncTest = (str: string, int: number) : void => {
    console.log(`文字は${str}、値は${int}`) 
}

arrowFuncTest('aaa', 123)


//引数省略
const funcTestQ = (str: string, int? : number) : void => {
    console.log(str, int)
}

funcTestQ('Qマーク')

// デフォルト値指定
const funcTestD = (int? : number, str: string = 'aaa') : void => {
    console.log(str, int)
}

funcTestD(123)


//可変長パラメータ
const eachNumber = (...items: number[]) : void => {
    for(const item of items) {
        console.log(item)
    }
}

eachNumber(1,2,3)
