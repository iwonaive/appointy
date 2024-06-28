export interface Charminglook {

  mainData: Address;
  treatments: Treatments[];
  }

  export interface Address { 
    name: string;
    address: string;
    rating: number;
  }

  export interface Treatments [
    {
    bodyPart: 'string'
  }
]


// const newSalon: Charminglook = {
//   mainData: {
//     name: 'CharmingLook',
//   }
// }
