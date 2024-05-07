export interface ConsPagos {
  paymentid:      number;
  paymentdate:    Date;
  clientClient: string;
}

export interface ConsContract {
  startdate:                    Date;
  enddate:                      Date;
  statuscontractStatusid:       number;
  methodpaymentMethodpaymentid: number;
  serviceServiceid:             number;
  clientClientid:               number;
}


export interface ConsultReq{
  identification: string,
  startdate: string,
  enddate: string
}

export interface ConsultReqContract{
  identification: string
}
