function encontrarIndices(array) {
    let indiceMaior = 0;
    let indiceMenor = 0;

    for (let i = 1; i < array.length; i++) {
        if (array[i] > array[indiceMaior]) {
            indiceMaior = i;
        }

        if (array[i] < array[indiceMenor]) {
            indiceMenor = i;
        }
    }

    return {
        maior: indiceMaior,
        menor: indiceMenor
    };
}

let numeros = [10, 5, 20, 8, 15];

console.log(encontrarIndices(numeros));