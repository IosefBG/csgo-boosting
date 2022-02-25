import Header from "./Navbar";
import Footer from "./Footer";
import CookieConsent from "react-cookie-consent";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <CookieConsent
        location="bottom"
        style={{ background: "#000", textAlign: "left" }}
        buttonStyle={{
          color: "#000",
          background: "#fff",
          fontSize: "14px",
        }}
        buttonText="I understand"
        expires={365}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
      <Footer />
    </>
  );
}
