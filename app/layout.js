import Provider from "@/core/providers/Provider";
import "./globals.css";

export const metadata = {
  title: "تپیتو - رسانه نسل فردا",
  description: "تپیتو، رسانه‌ای نوآورانه و پیشرو برای نسل فردا. با محتوای جذاب، تحلیلی و آموزشی در حوزه‌های فناوری، فرهنگ، سبک زندگی و آینده‌پژوهی، همراه شما هستیم تا دنیای فردا را امروز تجربه کنید.",
  keywords: ["تپیتو", "رسانه نسل فردا", "فناوری", "فرهنگ", "سبک زندگی", "آینده‌پژوهی", "تحلیل", "آموزش"],
  author: "تیم تپیتو",
  robots: "index, follow",
  openGraph: {
    title: "تپیتو - رسانه نسل فردا",
    description: "تپیتو، رسانه‌ای نوآورانه و پیشرو برای نسل فردا. با محتوای جذاب، تحلیلی و آموزشی در حوزه‌های فناوری، فرهنگ، سبک زندگی و آینده‌پژوهی، همراه شما هستیم تا دنیای فردا را امروز تجربه کنید.",
    type: "website",
    url: "https://www.tapito.ir",
    siteName: "تپیتو",
    images: [
      {
        url: "https://www.tapito.ir/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "تپیتو - رسانه نسل فردا",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tapito_ir",
    creator: "@tapito_ir",
    title: "تپیتو - رسانه نسل فردا",
    description: "تپیتو، رسانه‌ای نوآورانه و پیشرو برای نسل فردا. با محتوای جذاب، تحلیلی و آموزشی در حوزه‌های فناوری، فرهنگ، سبک زندگی و آینده‌پژوهی، همراه شما هستیم تا دنیای فردا را امروز تجربه کنید.",
    images: ["https://www.tapito.ir/images/twitter-image.jpg"],
  },
  canonical: "https://www.tapito.ir",
};
export default function RootLayout({ children }) {
  return (
    <html lang="fa-IR" dir="rtl">
      <body
      >
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
