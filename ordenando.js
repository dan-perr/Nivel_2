const swap = (vetor, posicao1, posicao2) => {
    let temp = vetor[posicao1];
    vetor[posicao1] = vetor[posicao2]
    vetor[posicao2] = temp
}

const shuffle = (vetor, qntdTrocas) => {
    for (let i = 0; i < qntdTrocas; i++) {
        const posicao1 = Math.floor(Math.random() * vetor.length);
        const posicao2 = Math.floor(Math.random() * vetor.length);

        let temp = vetor[posicao1];
        vetor[posicao1] = vetor[posicao2];
        vetor[posicao2] = temp
    }
    return vetor;
}

const bubble_sort = (vetor) => {
    for (let c = 0; c < vetor.length - 1; c++) {
        for (let i = 0; i < vetor.length - 1; i++) {
            if (vetor[i] > vetor[i + 1]) {
                [vetor[i], vetor[i + 1]] = [vetor[i + 1], vetor[i]]
            }
        }
    }
    return vetor
}

const selection_sort = (vetor) => {
    for (let i = 0; i < vetor.length - 1; i++) {
        let menor = i;
        for (let j = i + 1; j < vetor.length; j++) {
            if (vetor[j] < vetor[menor]) {
                menor = j;
            }
        }
        if (i != menor) {
            [vetor[i], vetor[menor]] = [vetor[menor], vetor[i]]
        }
    }
    return vetor
}

const quick_sort = (vetor, posicao_inicial, posicao_final) => {
    if (posicao_inicial < posicao_final) {
        const pivotIndex = particionamento(vetor, posicao_inicial, posicao_final);
        quick_sort(vetor, posicao_inicial, pivotIndex - 1);
        quick_sort(vetor, pivotIndex + 1, posicao_final);
    }
}

const particionamento = (vetor, posicao_inicial, posicao_final) => {
    const pivot = vetor[posicao_final]; // Escolhe o último elemento como pivô
    let i = posicao_inicial - 1; // Índice do menor elemento

    for (let j = posicao_inicial; j < posicao_final; j++) {
        if (vetor[j] < pivot) {
            i++;
            // Troca arr[i] e arr[j]
            [vetor[i], vetor[j]] = [vetor[j], vetor[i]];
        }
    }

    // Troca arr[i+1] e arr[high] (pivô)
    [vetor[i + 1], vetor[posicao_final]] = [vetor[posicao_final], vetor[i + 1]];
    return i + 1;
}