const api = "http://localhost:8080/api";

// FUNCIONARIO

// create
export async function createFuncionario(funcionario) {
    const uri = `${api}/funcionario/create`;

    try {
        const req = await fetch(uri, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json" 
            },
            body: JSON.stringify(funcionario) 
        });

            if (!req.ok) {
                throw new Error(`HTTP error! status: ${req.status}`); 
            }

            const response = await req.text(); 
            return response; 
    } catch (error) {
        console.error("Erro ao criar funcionário:", error);
        throw error; 
    }
}
// read
export async function readFuncionario(id) {
    const uri = `${api}/funcionario/${id}`;

    try {
        const req = await fetch(uri, {
            method: "GET",
            headers: {
                "Content-Type": "application/json" 
            }
        });
        
        if (!req.ok) {
            throw new Error(`HTTP error! status: ${req.status}`); 
        }

        const response = await req.json(); 
        return response; 
    } catch (error) {
        console.error("Erro ao ler funcionário:", error); 
        throw error; 
    }
}

// readAll
export async function readAllFuncionario() {
    const uri = `${api}/funcionario/all`;

    try {
        const req = await fetch(uri, {
            method: "GET",
            headers: {
                "Content-Type": "application/json" 
            }
        });

        if (!req.ok) {
            throw new Error(`HTTP error! status: ${req.status}`); 
        }

        const response = await req.json(); 
        return response;

    } catch (error) {
        console.error("Erro ao ler todos os funcionários:", error); 
        throw error; 
    }
}

// update
export async function updateFuncionario(id, funcionario) {
    const uri = `${api}/funcionario/update/${id}`;

    try {
        const req = await fetch(uri, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(funcionario) // Passa o objeto funcionario como body
        });

        if (!req.ok) {
            throw new Error(`HTTP error! status: ${req.status}`); 
        }

        const response = await req.text(); // Recebe a resposta como texto
        return response; 
    } catch (error) {
        console.error("Erro ao atualizar funcionário:", error);
        throw error; 
    }
}

// delete
export async function deleteFuncionario(id) {
    const uri = `${api}/funcionario/delete/${id}`;

    try {
        const req = await fetch(uri, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!req.ok) {
            throw new Error(`HTTP error! status: ${req.status}`); 
        }

        const response = await req.text(); // Recebe a resposta como texto
        return response; 
    } catch (error) {
        console.error("Erro ao deletar funcionário:", error);
        throw error; 
    }
}
