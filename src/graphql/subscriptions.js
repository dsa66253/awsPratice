import { gql } from '@apollo/client';

// TODO: check the official gql syntax
export const SUBSCRIPTION_ORDER = gql`
  subscription onOrderAdded(
      $restautantID: ID!
  ){
    mutation
    data {
        id
        name
        tableNo
        items
        totalPrice
        status
    }
  }
`;
