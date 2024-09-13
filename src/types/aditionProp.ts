
export type AdditionalProps = {
    additionalProp1: AdditionalPropsItem[]
    additionalProp2: AdditionalPropsItem[]
}

export type AdditionalPropsItem = {
  id: number;
  fromDateTime: string;
  toDateTime: string;
  messageID: string;
  description: string;
  sourceType: string;
  elementName: string;
  elementID: number;
  active: boolean;
  isMasterError: boolean;
};
