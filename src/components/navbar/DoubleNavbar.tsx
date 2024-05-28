"use client";

import { useState } from "react";
import { UnstyledButton, Tooltip, Title, rem, NavLink } from "@mantine/core";
import {
  IconHome2,
  IconGauge,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconCalendarStats,
  IconUser,
  IconSettings,
} from "@tabler/icons-react";
import { MantineLogo } from "@mantinex/mantine-logo";
import classes from "./DoubleNavbar.module.css";
import Image from "next/image";
import { getLink } from "@/utils/links";
import Link from "next/link";
import { usePathname } from "next/navigation";

const mainLinksData = [
  {
    icon: IconHome2,
    label: "Home",
    links: [
      "Home",
      "Mis documentos",
      "Mis negocios",
      "Mi saldo",
      "Mi logística",
      "Información útil",
      "Test Loading",
    ],
  },
  {
    icon: IconGauge,
    label: "Bandeja de Entrada",
    links: ["Bandeja de Entrada"],
  },
  {
    icon: IconDeviceDesktopAnalytics,
    label: "Analíticas",
    links: ["Analíticas"],
  },
  { icon: IconUser, label: "Mi cuenta", links: ["Mi cuenta"] },
  { icon: IconFingerprint, label: "Seguridad", links: ["Seguridad"] },
  { icon: IconSettings, label: "Configuración", links: ["Configuración"] },
];

export function DoubleNavbar() {
  const pathname = usePathname();

  const activeLinkName = pathname.split("/").at(-1);

  console.log({ activeLinkName });

  const [active, setActive] = useState(
    mainLinksData.find((l) => getLink(l.label) === activeLinkName)?.label ??
      "Home"
  );

  console.log({ pathname });

  const activeObject = mainLinksData.find(
    (mainLink) => mainLink.label === active
  )!;

  const mainLinks = mainLinksData.map((link) => (
    <Tooltip
      label={link.label}
      position="right"
      withArrow
      transitionProps={{ duration: 0 }}
      key={link.label}
    >
      <UnstyledButton
        onClick={() => setActive(link.label)}
        className={classes.mainLink}
        data-active={link.label === active || undefined}
      >
        <link.icon style={{ width: rem(22), height: rem(22) }} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  ));

  const links = activeObject?.links.map((link) => {
    const actualLink = getLink(link);

    return (
      <NavLink
        // className={classes.link}
        href={actualLink}
        key={link}
        active={pathname.includes(actualLink)}
        label={link}
        description={""}
        leftSection={<activeObject.icon size="1rem" stroke={1.5} />}
        color="green"
        variant="light"
        component={Link}
      />
    );
  });

  return (
    <nav className={classes.navbar}>
      <div className={classes.wrapper}>
        <div className={classes.aside}>
          <div className={classes.logo}>
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] lg:block object-contain max-w-full"
              src="/naika.svg"
              alt="Naika Logo"
              height={60}
              width={200}
              priority
            />
          </div>
          {mainLinks}
        </div>
        <div className={classes.main}>
          <Title
            order={4}
            className={
              classes.title + " flex items-center gap-2 text-naika-blue"
            }
          >
            <activeObject.icon /> {active}
          </Title>

          {links}
        </div>
      </div>
    </nav>
  );
}
