import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { BTable, Container, Pagination, PaginationButton, PaginationItem } from "./styles";

interface Order {
  id: number;
  po: string;
  status: string;
  budgetist: string;
  weight: number;
  stage: string;
  ac: string;
  modality: string;
  object: string;
  company: string;
  uf: string;
  created_at: string;
  updated_at: string;
  delivered_at: string;
};


export function BudgetTable() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(5);
  const [pages, setPages] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    api.get(`pedidos?page=${currentPage}&limit=${limit}`)
      .then(response => {
        setOrders(response.data.orders);
        setTotal(orders.length);
      });

      const totalPages = Math.ceil(total / limit);

      let arrayPages:number[] = []
      for (let i = 1; i <= totalPages; i++) {
        arrayPages.push(i)
      }

      setPages(arrayPages)
  }, []);

  return (
    <Container className="budget-table">
      <BTable>
        <thead>
          <tr>
            <th>#PO</th>
            <th>#AC</th>
            <th>Status</th>
            <th>Orçamentista</th>
            <th>Peso</th>
            <th>Etapa</th>
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
            <tr key={order.id}>
              <td>{order.po}</td>
              <td>{order.ac}</td>
              <td>{order.status}</td>
              <td>{order.budgetist}</td>
              <td>{order.weight}</td>
              <td>{order.stage}</td>
              <td>{order.modality}</td>
              <td>{order.object}</td>
              <td>{order.company}</td>
              <td>{order.uf}</td>
              <td>{new Intl.DateTimeFormat('pt-BR').format(
                new Date(order.created_at)
              )}
              </td>
              <td>{new Intl.DateTimeFormat('pt-BR').format(
                new Date(order.delivered_at)
              )}</td>
            </tr>
          ))}
        </tbody>
        </BTable>
        <Pagination>
          <div>Qnt {total}</div>
          <PaginationButton>
            <PaginationItem>{'<<'}</PaginationItem>
            <PaginationItem>{'<'}</PaginationItem>
            {pages.map((page) => (
              <PaginationItem
                key={page}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </PaginationItem>
            ))}
            <PaginationItem>{'>'}</PaginationItem>
            <PaginationItem>{'>>'}</PaginationItem>
          </PaginationButton>
        </Pagination>
    </Container>
  )
}