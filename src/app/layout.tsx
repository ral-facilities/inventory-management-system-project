import theme from '@/app/theme';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Inventory Management System',
  description:
    'The Inventory Management System (IMS) is a web-based platform for tracking, organising, and managing high-value scientific and industrial components. Designed to replace spreadsheets and static records, IMS improves availability, reduces downtime, and scales with operational complexity.',
  icons: { icon: '/inventory-management-system-project/favicon.ico' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <main>{children}</main>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
