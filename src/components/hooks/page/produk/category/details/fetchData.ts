// utils/fetchData.ts
import { fetchProduk } from "@/api/fetchProduk";
import { produkProps } from "@/utils/types";

export const getCurrentProdukDetails = async (detailParam: string) => {
  const data = await fetchProduk();
  return data.filter(
    (details: produkProps) => details?.details === detailParam
  );
};
