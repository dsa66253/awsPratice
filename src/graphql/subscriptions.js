import { gql } from '@apollo/client';

// TODO: check the official gql syntax
export const SUBSCRIPTION_ORDER = gql`
subscription order($restaurantId: String!) {
  order(restaurantId: $restaurantId) {
    mutation
    data {
      id
      tableNo
      totalPrice
      time
      items{
        id
        name
        orderItemInfo {
          quantity
          note
        }
      }
    }
  }
}
`;
