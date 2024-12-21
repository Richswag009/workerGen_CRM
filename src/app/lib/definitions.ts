export type Invoice = {
    id: string;
    customer_id: string;
    amount: number;
    date: string;
    // In TypeScript, this is called a string union type.
    // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
    status: 'pending' | 'paid';
  };


  export interface Lead  {
    name: string;
    topic: string;
    status: string;
    createdOn: string;
    keyPoints: string;
  };
  

  export interface LeadDetails {
    id:number
    name: string;
    status: string;
    role: string;
    // description: string;
    topic: string;
    profileImage: string;
    insights: {
      decisionMaker: string;
      dealValue: string;
      intent: string;
    };
    keyPoints: string[];
    about: string;
    createdOn:string
  }