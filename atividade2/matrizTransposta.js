function transporMatriz(A) {
  console.log("Matriz Original:");
  for (let i = 0; i < A.length; i++) {
    console.log(A[i].join(" "));
  }

  let transposta = [];
  for (let i = 0; i < A[0].length; i++) {
    transposta[i] = [];
    for (let j = 0; j < A.length; j++) {
      transposta[i][j] = A[j][i];
    }
  }

  console.log("\nMatriz Transposta:");
  for (let i = 0; i < transposta.length; i++) {
    console.log(transposta[i].join(" "));
  }
}

const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

transporMatriz(matriz);
