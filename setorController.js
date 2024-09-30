const api = "http://localhost:8080/api";

//SETOR

// create
export async function createSetor(setor) {
    const uri = `${api}/setor/create`;

    try {
        const req = await fetch(uri, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(setor) 
        });

        if (!req.ok) {
            throw new Error(`HTTP error! status: ${req.status}`); 
        }

        const response = await req.text(); 
        return response; 
    } catch (error) {
        console.error("Erro ao criar setor:", error);
        throw error; 
    }
}

// read
export async function readSetor(id) {
    const uri = `${api}/setor/${id}`;

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
        console.error("Erro ao ler setor:", error);
        throw error; 
    }
}

// readAll
export async function readAllSetores() {
    const uri = `${api}/setor/all`;

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
        console.error("Erro ao ler todos os setores:", error);
        throw error; 
    }
}

// update
export async function updateSetor(id, setor) {
    const uri = `${api}/setor/update/${id}`;

    try {
        const req = await fetch(uri, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(setor) 
        });

        if (!req.ok) {
            throw new Error(`HTTP error! status: ${req.status}`); 
        }

        const response = await req.text(); 
        return response; 
    } catch (error) {
        console.error("Erro ao atualizar setor:", error);
        throw error; 
    }
}

// delete
export async function deleteSetor(id) {
    const uri = `${api}/setor/delete/${id}`;

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

        const response = await req.text(); 
        return response; 
    } catch (error) {
        console.error("Erro ao deletar setor:", error);
        throw error; 
    }
}
