import { gql } from '@apollo/client';

export const ORDERS_QUERY = gql`
  query{
    todayOrders({
        $restautantID
    }){

    }
  }
`;
