import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Thankyou = () => {
  return (
    <>
      <Helmet>
        <title>Thank You - Qualiscent Infotech | We'll Contact You Soon </title>
        <meta
          name="description"
          content="Thank you for contacting Qualiscent Infotech. Our team will reach out within 24 hours to discuss your IT needs and provide a customized solution for your business."
        />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className=" flex min-h-[50vh] sm:min-h-[80vh] h-ful flex-col items-center justify-center mt-[4rem]">
        <div className="wrapper  min-h-full flex flex-col items-center  gap-3 text-black text-center">
          <h1 className="main-title text-3xl font-semibold">Thank You!</h1>
          <p className="desc !font-semibold">
            We have received your message and will get back to you as soon as
            possible.
          </p>
          <Link to="/" className="primary-btn w-fit mt-4 text-white">
            Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default Thankyou;
