import { Container } from "./styles";

export function BudgetTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>#PO</th>
            <th>Status</th>
            <th>Orçamentista</th>
            <th>Peso</th>
            <th>Etapa</th>
            <th>#AC</th>
            <th>Modalidade</th>
            <th>Objeto</th>
            <th>Empresa</th>
            <th>UF</th>
            <th>Data do Pedido</th>
            <th>Data Entrega</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>001-21</td>
            <td>Pendente</td>
            <td>Claudio</td>
            <td>3</td>
            <td>Acolhimento</td>
            <td>001-21</td>
            <td>Fechada</td>
            <td>Objeto</td>
            <td>Petrobrás</td>
            <td>RJ</td>
            <td>15/01/2021</td>
            <td>21/01/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}