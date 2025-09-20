import "./globals.css";

export const metadata = {
  title: "Sam Richardson | Portfolio",
  description: "Sam Richardson Developer Portfolio Site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Rubik+Doodle+Shadow&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
