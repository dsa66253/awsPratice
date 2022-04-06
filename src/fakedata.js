const fakeData = [
    {
    id: "order001",
    tableNo: "15A",
    totalPrice: 220,
    time: "2022/04/05-20:20:30",
    items:[
      {
        id: "item001",
        name: "麻醬麵",
        price: 60,
        quantity: 1,
        note: "加大",
        status: "RAW",

        img:"",
        description:"",
        type:"主餐",
        tags:["含有花生"],
        rates_ave:4.8,
      },
      {
        id: "item002",
        name: "炒飯",
        price: 80,
        quantity: 2,
        note: "",
        status: "RAW",
        
        img:"",
        description:"",
        type:"主餐",
        tags:["蛋素"],
        rates_ave:4.6,
      },
    ],
  },
  {
    id: "order002",
    tableNo: "11B",
    totalPrice: 150,
    time: "2022/04/05-21:10:59",
    items:[
      {
        id: "item051",
        name: "薯條",
        price: 30,
        quantity: 3,
        note: "",
        status: "RAW",
        
        img:"",
        description:"",
        type:"點心",
        tags:[],
        rates_ave:4.2,
      },
      {
        id: "item027",
        name: "草莓剉冰",
        price: 60,
        quantity: 1,
        note: "多給我一個碗",
        status: "RAW",
        
        img:"",
        description:"",
        type:"甜點",
        tags:[],
        rates_ave:4.0,
      },
    ],
  },
  {
    id: "order003",
    tableNo: "2",
    totalPrice: 110,
    time: "2022/04/06-09:20:25",
    items:[
      {
        id: "item027",
        name: "巧克力蛋糕",
        price: 55,
        quantity: 2,
        note: "",
        status: "RAW",
        
        img:"",
        description:"",
        type:"甜點",
        tags:[],
        rates_ave:4.9,
      },
    ],
  }
];

export default fakeData;