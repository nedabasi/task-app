import './globals.css';

export const metadata = {
  title: 'Navigation Builder',
  description: 'Build and manage your navigation menu.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-gray-50 text-gray-900">
          <main className="container mx-auto p-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
