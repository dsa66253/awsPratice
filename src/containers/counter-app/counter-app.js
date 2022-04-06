
import CounterItemList from '../../components/counter-order-list';
import fakeData from '../../fakedata';
// import { useQuery, useMutation } from '@apollo/react-hooks';
// import { useEffect } from 'react';
// import { SUBSCRIPTION_ORDER } from '../../graphql';
// import { useQuery } from '@apollo/client';
const CounterApp = () => {
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
      {fakeData.map((e)=><CounterItemList data={e}/>)}
    </div>
  );
}

export default CounterApp;
