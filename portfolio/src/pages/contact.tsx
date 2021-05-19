import Form from "../components/contact/form";

export default function Contact() {
  return (
    <div className="container">
      <div className="w-screen h-auto">
        <div className="h-auto grid grid-cols gap-4
        md:grid-cols
        lg:grid-cols
        xl:grid-cols">
          <Form />
          </div>
      </div>
    </div>
  );
}
