const SIZE = {
    SMALL: '小',
    MEDIUM: '中',
    LARGE: '大'
} as const

type SizeType = keyof typeof SIZE

const sizeCheck = (size: SizeType) => {
    console.log(size)
}

// sizeCheck('XL')

type ValueOfSize = typeof SIZE[keyof typeof SIZE]
