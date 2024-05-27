import { MantineProvider, createTheme, localStorageColorSchemeManager } from "@mantine/core"


export default function AdminLayout({ children }: any) {

    return (
        <div>
            Hola, soy el layout de admin
            <div>
                {children}
            </div>
        </div>
    );
}