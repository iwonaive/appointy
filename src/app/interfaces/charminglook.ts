export interface Charminglook {

  mainData: Address;
  treatments: Treatments;
  }

  export interface Address { 
    name: string;
    address: string;
    rating: number;
  };

  export interface Treatments {
    bodyPart: 'nails' | 'feet' | 'body';
  }

// const newSalon: Charminglook = {
//   mainData: {
//     name: 'CharmingLook',
//   }
// }
