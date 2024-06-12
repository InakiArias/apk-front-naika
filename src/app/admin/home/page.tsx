import MaterialIcon from "@/components/icons/MaterialIcon";
import Image from "next/image";

const links = [
  {
    name: "Mis documentos",
    link: "documentos",
    icon: "description"
  },
  {
    name: "Mis negocios",
    link: "negocios",
    icon: "business_center"
  },
  {
    name: "Mi saldo",
    link: "saldo",
    icon: "account_balance_wallet"
  },
  {
    name: "Mi logística",
    link: "logistica",
    icon: "local_shipping"
  },
  {
    name: "Información útil",
    link: "info",
    icon: "info"
  }
];

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-96px)] flex-col items-center justify-between p-0 lg:p-6">
      <div className="sticky top-0 z-10 w-full items-center justify-between font-mono text-sm lg:flex lg:static">
        <p className="left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Hola&nbsp;
          <code className="font-mono font-bold">mundo de Naika.</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-36 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-0 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/naika.svg"
              alt="Naika Logo"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative z-[-1] lg:z-0 flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <div className="h-full w-full relative">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] hidden lg:block object-contain max-w-full"
            src="/naika-full.svg"
            alt="Naika Logo"
            height={500}
            width={500}
            priority
          />
        </div>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full gap-1 lg:grid-cols-5 lg:text-left">
        {links.map(({ name, link, icon }) => (
          <a
            href={link}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors border-gray-400 hover:border-black hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
            key={link}
          >
            <h2 className="mb-3 text-2xl font-semibold">
              <MaterialIcon name={icon} /> {name}
            </h2>
            <p className="m-0 text-sm opacity-50">
              Naika link. Lorem ipsum sit amet. ABCDEFGHIJKLMNÑOPQRSTUVWXYZ
              abcdefghijklmnñopqrstuvwxyz
              1234567890
            </p>
          </a>
        ))}
      </div>
    </main>
  );
}
