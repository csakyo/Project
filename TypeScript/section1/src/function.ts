function funcTest(str:string, int:number) : void{
    console.log(`文字は${str}、値は${int}`)
}

funcTest('aaa', 123)


const arrowFuncTest = (str: string, int: number) : void => {
    console.log(`文字は${str}、値は${int}`) 
}

arrowFuncTest('aaa', 123)
