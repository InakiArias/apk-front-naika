import { DoubleNavbar } from "@/components/navbar/DoubleNavbar";

export default async function Saldo({ }: any) {
  const secs = 3;

  const x = await new Promise((r) => setTimeout(() => r(secs), secs * 1000));

  return <>Mi saldo
    {/* {x} */}
  </>;
}
