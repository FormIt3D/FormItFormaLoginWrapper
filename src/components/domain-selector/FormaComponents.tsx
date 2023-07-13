import reactWcWrapper from "@spacemakerai/react-wc-wrapper";

export const WeaveSelect = reactWcWrapper<{
  id: string | object; 
  class?: number | string | object; 
  style?: string | object;
  value?: number | string | object;
  density?: string;
  defaultValue?: string;
  placeholder?: string;
}>("weave-select");

export const WeaveSelectOption = reactWcWrapper<{
    class?: number | string | object; 
    value?: number | string | object;
    key?: number | string | object;
    selected?: boolean | object;
  }>("weave-select-option");