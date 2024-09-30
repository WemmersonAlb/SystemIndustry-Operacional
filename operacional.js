import { readAllSetores } from './setorController.js';
import { readAllFuncionario } from './funcionarioController.js';
import { readAllTiposFalha } from './tipoFalhaController.js';
import { createOcorrencia } from './ocorrenciaController.js';

document.addEventListener('DOMContentLoaded', () => {
    const buttonContainer = document.getElementById('buttonContainer');
    
    // Função para construir os botões dos setores
    const loadSetores = async () => {
        buttonContainer.innerHTML = ''; // Limpa os botões de setor
        const setores = await readAllSetores();
        setores.forEach(setor => {
            const button = document.createElement('button');
            button.className = 'btn btn-primary btn-large';
            button.innerText = setor.nome_setor;
            button.onclick = () => loadFuncionarios(setor.id_setor);
            buttonContainer.appendChild(button);
        });
    };

    // Função para construir os botões dos funcionários
    const loadFuncionarios = async (setorId) => {
        buttonContainer.innerHTML = ''; // Limpa os botões de setor
        const funcionarios = await readAllFuncionario();
        funcionarios.forEach(funcionario => {
            if(funcionario.setor_funcionario.id_setor != setorId){
                return;
            }
            const button = document.createElement('button');
            button.className = 'btn btn-success btn-large';
            button.innerText = funcionario.nome_funcionario;
            button.onclick = () => loadTiposFalha(setorId);
            buttonContainer.appendChild(button);
        });
        const button = document.createElement('button');
        button.className = 'btn btn-danger btn-large';
        button.innerText = "Voltar";
        button.onclick = () => loadSetores();
        buttonContainer.appendChild(button);
    };

    // Função para construir os botões dos tipos de falha
    const loadTiposFalha = async (setorId) => {
        const modal = new bootstrap.Modal(document.getElementById('falhaModal'));
        document.getElementById('falhaButtonsContainer').innerHTML = ''; // Limpa os botões do modal

        const tiposFalha = await readAllTiposFalha();
        tiposFalha.forEach(tipoFalha => {
            const button = document.createElement('button');
            button.className = 'btn btn-warning btn-large';
            button.innerText = tipoFalha.nome_falha;
            button.onclick = () => callCreateOcorrencia(tipoFalha.id_falha, setorId);
            document.getElementById('falhaButtonsContainer').appendChild(button);
        });

        modal.show();
    };

    // Função para criar a ocorrência
    const callCreateOcorrencia = async (tipoFalhaId, setorId) => {
        const dataOcorrido = new Date().toISOString(); // Pega a data atual em formato ISO
        const setor = { id_setor: setorId };
        const tipoFalha = { id_falha: tipoFalhaId };
    
        // Obtém a instância do modal
        const modal = bootstrap.Modal.getInstance(document.getElementById('falhaModal'));
    
        // Chama a função para criar a ocorrência
        await createOcorrencia({ dataOcorrido, setor, tipoFalha });
        alert('Ocorrência criada com sucesso!');
    
        // Fecha o modal
        modal.hide();
    
        // Retorna à lista de funcionários do setor
        loadFuncionarios(setorId);
    };
    

    // Carregar setores ao iniciar
    loadSetores();
});
