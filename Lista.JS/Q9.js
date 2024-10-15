function resultadoAlunos(alunos) {
    let aprovados = [];
    let reprovados = [];

    for (let i = 0; i < alunos.length; i++) {
        if (alunos[i].nota >= 7) {
            aprovados.push(alunos[i].nome);
        } else {
            reprovados.push(alunos[i].nome);
        }
    }

    return { aprovados, reprovados };
}

const alunos = [{ nome: 'Ana', nota: 8 }, { nome: 'Carlos', nota: 5 }, { nome: 'João', nota: 7 }];
const { aprovados, reprovados } = resultadoAlunos(alunos);
console.log(`${aprovados.map(aluno => `${aluno}: Aprovado`).join('\n')}`);
console.log(`${reprovados.map(aluno => `${aluno}: Reprovado`).join('\n')}`);