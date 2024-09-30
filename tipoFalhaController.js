const api = "http://localhost:8080/api";

//TIPO FALHA

// readAll
export async function readAllTiposFalha() {
    const uri = `${api}/tipo-falha/all`;

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
        console.error("Erro ao ler todos os tipos de falha:", error);
        throw error; 
    }
}
