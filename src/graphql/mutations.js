import { gql } from "@apollo/client";

export const CREATE_ORDER = gql`
mutation CreateOrder($order: inputOrder) {
  createOrder(order: $order)
}
`;

