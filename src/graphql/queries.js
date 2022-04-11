import { gql } from '@apollo/client';

export const QUERY_ORDERS = gql`
query Query{
  queryOrders {
    id
    tableNo
    time
    totalPrice
    items {
      id
      name
      quantity
      price
      note
      status
    }
  }
}
`;
