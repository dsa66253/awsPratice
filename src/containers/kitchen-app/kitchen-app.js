

import fakeData from '../../fakedata';
import KitchenOrderList from './kitchen-order-list';
// import { useQuery, useMutation } from '@apollo/react-hooks';
// import { useEffect } from 'react';
// import { SUBSCRIPTION_ORDER } from '../../graphql';
// import { useQuery } from '@apollo/client';
const KitchenApp = () => {
  // TODO: add apollo react-hooks
  // const {loading, error, data, subscibeToMore } = useQuery();

  // useEffect(()=>{
  //   try{
  //     subscibeToMore(
  //       {document: SUBSCRIPTION_ORDER,

  //       }
  //     )
  //   } catch(e){

  //   }
  // },[subscibeToMore]);


  return (
    <div>
      {fakeData.map((e) => <KitchenOrderList data={e} />)}
      123
    </div>
  );
}

export default KitchenApp;
