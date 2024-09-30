const api = "http://localhost:8080/api";

//OCORRENCIA

// create
export async function createOcorrencia(ocorrencia) {
    const uri = `${api}/ocorrencias/create`;

    try {
        const req = await fetch(uri, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ocorrencia) 
        });

        if (!req.ok) {
            throw new Error(`HTTP error! status: ${req.status}`); 
        }

        const response = await req.text(); 
        return response; 
    } catch (error) {
        console.error("Erro ao criar a ocorrência:", error);
        throw error; 
    }
}

// readAll
export async function readAllOcorrencias() {
    const uri = `${api}/ocorrencias/all`;

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
        console.error("Erro ao ler todas as ocorrências:", error);
        throw error; 
    }
}

