const mainFun = (data, callback) => {
    console.log("this is :", data);
    callback(data + 10)
}

const display = (value) => {
    console.log("display callback ", value);
}

// mainFun("karthik", display)

// callback hell pyramid of doom 

const fun = () => {
    console.log(" stage 1");
    setTimeout(() => {
        console.log(" stage 2");
        setTimeout(() => {
            console.log(" stage 3");
            setTimeout(() => {
                console.log(" stage 4");

            }, 1000)
        }, 1000)
    }, 1000)
}

// console.log("starting");
// fun()
// console.log("ending");

const promise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("first promise");
            resolve("reject promise")
        }, 1000)
    })
}

const secPromise = (value) => {
    return new Promise((resolve, reject) => {
        console.log(value, " second promise");
        setTimeout(() => {
            resolve("second promise")
        }, 1000)
    })
}

// promise().then(secPromise).then((res) => {
//     console.log("res ", res);

// }).catch((err) => {
//     console.log(err);

// })


// async / await  

const fun1 = async () => {
    const data = await fetch('https://fakestoreapi.com/products/1')
    const res = await data.json()
    console.log(res.id);

    return res.id

}

const fun2 = async (value) => {
    const data = await fetch(`https://fakestoreapi.com/products/${value}`)
    const res = await data.json()
    console.log(res);

    return res + " second fun data"
}

const fun3 = async () => {
    const data = await fun1()
    const res = await fun2(data)
    console.log({ res });

}

fun3()