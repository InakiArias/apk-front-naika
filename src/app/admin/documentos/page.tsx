import { DoubleNavbar } from "@/components/navbar/DoubleNavbar";

export default async function Documentos({}: any) {
  const secs = 5;

  const x = await new Promise((r) => setTimeout(() => r(secs), secs * 1000));

  return <>hola mundo {x}</>;
}
