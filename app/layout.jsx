import Header from "@/components/Header";
import '../styles/global.css';

export default function RootLayout({ children }) {
    return (
        <html>
            <head>
                <title>Testing out next 13!</title>
            </head>

            <body>
                <Header/>
                {children}
            </body>
        </html>
    );
}
