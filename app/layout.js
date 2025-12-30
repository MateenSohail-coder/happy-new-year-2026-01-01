import "./globals.css";

export const metadata = {
  title: "Happy New Year!",
  description: "A festive celebration website with animations and sounds.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.cdnfonts.com" />
        <link
          href="https://fonts.cdnfonts.com/css/great-vibes"
          rel="stylesheet"
        />
        <link href="https://fonts.cdnfonts.com/css/roboto" rel="stylesheet" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
