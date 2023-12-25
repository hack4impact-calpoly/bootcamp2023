import ContactUs from "../../components/ContactUs";

export const metadata = {
  title: {
    default: "Contact Me",
  },
};

const admin_email: string = process.env.ADMIN_EMAIL!;
const service_id: string = process.env.EMAIL_SERVICE_ID!;
const public_key: string = process.env.EMAIL_PUBLIC_KEY!;
const template_id: string = process.env.EMAIL_TEMPLATE_ID!;

const props = {
  admin_email: admin_email,
  service_id: service_id,
  public_key: public_key,
  template_id: template_id,
};

export default function Home() {
  return (
    <main>
      <ContactUs props={props} />
    </main>
  );
}
