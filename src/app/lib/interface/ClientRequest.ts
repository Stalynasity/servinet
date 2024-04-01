export interface ClientRequest {
  clientname: string,
  lastname: string,
  identification: string,
  phonenumber: string,
  address: string,
  referenceaddress: string
}


export interface PostClient {
  statusCode: number;
  data:       boolean;
  message:    string;
}

