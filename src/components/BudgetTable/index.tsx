import { Container } from "./styles";

export function BudgetTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>#PO</th>
            <th>Data do Pedido</th>
            <th>Peso</th>
            <th>Data Entrega</th>
            <th>Etapa</th>
            <th>#AC</th>
            <th>Modalidade</th>
            <th>Empresa</th>
            <th>Objeto</th>
            <th>UF</th>
            <th>Orçamentista</th>
            <th>Status</th>
          </tr>
        </thead>
      </table>
    </Container>
  )
}