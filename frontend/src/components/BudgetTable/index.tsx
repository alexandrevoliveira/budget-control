import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface Order {
  po: string,
  status: string,
  budgetist: string,
  weight: number,
  stage: string,
  ac: string,
  modality: string,
  object: string,
  company: string,
  uf: string,
  created_at: string,
  delivered_at: string,
}

export function BudgetTable() {
  const [orders, setOrders] = useState<Order[]>([])

  useEffect(() => {
    api.get('pedidos')
      .then(response => setOrders(response.data.orders))
  }, [])

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
          {orders.map(order => (
            <tr>
              <td>{order.po}</td>
              <td>{order.status}</td>
              <td>{order.budgetist}</td>
              <td>{order.weight}</td>
              <td>{order.stage}</td>
              <td>{order.ac}</td>
              <td>{order.modality}</td>
              <td>{order.object}</td>
              <td>{order.company}</td>
              <td>{order.uf}</td>
              <td>{new Intl.DateTimeFormat('pt-BR').format(
                new Date(order.created_at)
              )}</td>
              <td>{new Intl.DateTimeFormat('pt-BR').format(
                new Date(order.delivered_at)
              )}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}