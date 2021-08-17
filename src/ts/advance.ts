// 巧用Ts

// 一、注释
/** A cool guy.
 * @abstract 摘要
 */
interface Person {
    /** A cool name. */
    name: string
}

const P: Person = {
    name: 'wjc',
}

// 二、巧用 typeof
const defaultOption = {
    timeout: 500,
}
type Opt = typeof defaultOption

// 三、巧用联合类型
//   Not good.
interface Dinner1 {
    fish?: number
    bear?: number
}

//   Awesome!
type Dinner2 =
    | {
        fish: number
    }
    | {
        bear: number
    }

// 四、巧用查找类型
interface Person {
    addr: {
        city: string
        street: string
        num: number
    }
}

// bad
interface Address {
    city: string
    street: string
    num: number
}
interface Person {
    addr: Address
}
// good
const address: Person['addr'] = {
    city: 'string',
    street: 'string',
    num: 0,
}

// 五、巧用查找类型+泛型+keyof
interface API {
    '/user': { name: string },
    '/menu': { foods: Food[] },
}
const get = <URL extends keyof API>(url: URL): Promise<API[URL]> => {
    return fetch(url).then(res => res.json())
}



