import { LoadingOverlay } from "@mantine/core";

export default async function Loading({}: any) {
  return (
    <>
      <LoadingOverlay
        visible
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 2, backgroundOpacity: 0.1 }}
        loaderProps={{ color: "green", size: 48, type: "oval" }}
      />
    </>
  );
}
