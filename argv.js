const readargvs = process.argv
console.log(readargvs)

if (readargvs.length <= 2){
    console.log('no args')
}

for (key in readargvs) {
    if (key > 1) {
        console.log(key, readargvs[key])
    }
}