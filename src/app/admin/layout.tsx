"use client";

import { Header } from "@/components/header/Header";
import { DoubleNavbar } from "@/components/navbar/DoubleNavbar";
import useStable from "@/hooks/useStable";
import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";

export default function AdminLayout({ children }: any) {
  const [opened, { toggle, close }] = useDisclosure();

  const closeStable = useStable(close);

  const route = usePathname();

  useEffect(() => {
    closeStable();
  }, [route, closeStable]);

  return (
    <>
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
          <Header opened={opened} toggle={toggle} />
        </AppShell.Header>

        <AppShell.Navbar>
          <DoubleNavbar />
        </AppShell.Navbar>

        <AppShell.Main>
          <div className="relative w-full min-h-[calc(100vh-96px)]">
            {children}
          </div>
        </AppShell.Main>
      </AppShell>
    </>
  );
}
