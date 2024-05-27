import { DoubleNavbar } from "@/components/navbar/DoubleNavbar";

export default async function Documentos({ mundo = "pepe" }: any) {
    const secs = 0

    const x = await new Promise((r) => setTimeout(() => r(secs), secs * 1000));

    return <>
        <DoubleNavbar />
        hola mundo {x}
    </>
}