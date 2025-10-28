export interface AlunoCadastroRequest {
    nome: string;
    cpf: string;
    dataNascimento: Date | null;
    telefone: string;
}
export interface AlunoResponse {
    id: number;
    nome: string;
    cpf: string;
    dataNascimento: Date | null;
    telefone: string;
}