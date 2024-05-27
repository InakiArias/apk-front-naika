"use client";

import { DoubleNavbar } from "@/components/navbar/DoubleNavbar";
import {
  AppShell,
  Burger,
  MantineProvider,
  createTheme,
  localStorageColorSchemeManager,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Image from "next/image";

export default function AdminLayout({ children }: any) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <>
      {/* <div> */}
      {/* Hola, soy el layout de admin */}
      {/* <div> */}
      {/* {children} */}
      {/* </div> */}
      {/* </div> */}
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: "md",
          collapsed: { mobile: !opened },
        }}
        padding="md"
      >
        <AppShell.Header>
          <div className="relative z-[-1] lg:z-0 flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
            <div className="h-full w-full relative">
              <Burger
                opened={opened}
                onClick={toggle}
                hiddenFrom="md"
                size="md"
              />
              <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] lg:block object-contain max-h-full"
                src="/naika-full.svg"
                alt="Naika Logo"
                height={60}
                width={200}
                priority
              />
            </div>
          </div>
        </AppShell.Header>

        <AppShell.Navbar>
          <DoubleNavbar />
        </AppShell.Navbar>

        <AppShell.Main>{children}</AppShell.Main>
      </AppShell>
    </>
  );
}
