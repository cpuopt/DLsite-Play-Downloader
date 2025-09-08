export type ENC_METHOD = "xor" | "puzzle";

export type encDetectorResult = {
  method: ENC_METHOD;
  data: string;
};
