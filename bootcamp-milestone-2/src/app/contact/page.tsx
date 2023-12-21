import ContactUs from "../../components/ContactUs";

export const metadata = {
  title: {
    default: "Contact Me",
  },
};

export default function Home() {
  return (
    <main>
      <ContactUs />
    </main>
  );
}
