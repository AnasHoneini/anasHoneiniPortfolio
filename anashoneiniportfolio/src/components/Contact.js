import { useState } from "react";
import emailjs from "emailjs-com";
import { Row, Col } from "react-bootstrap";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    try {
      const templateParams = {
        from_name: formDetails.firstName + " " + formDetails.lastName,
        from_email: formDetails.email,
        phone: formDetails.phone,
        message: formDetails.message,
      };

      await emailjs.send(
        "service_np7l20i",
        "template_a0far3g",
        templateParams,
        "bH3c0mR6-mhpLMRLE",
      );

      setButtonText("Send");
      setFormDetails(formInitialDetails);
      setStatus({
        success: true,
        message: "Message sent successfully",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setButtonText("Send");
      setStatus({
        success: false,
        message: "Something went wrong, please try again later.",
      });
    }
  };

  return (
    <section className="contact" id="contact">
      <Col size={12} md={6}>
        <h2>Get In Touch</h2>
        <form onSubmit={handleSubmit}>
          <Row>
            <Col size={12} sm={6} className="px-1">
              <input
                type="text"
                value={formDetails.firstName}
                placeholder="First Name"
                onChange={(e) =>
                  onFormUpdate("firstName", e.target.value)
                }
              />
            </Col>
            <Col size={12} sm={6} className="px-1">
              <input
                type="text"
                value={formDetails.lastName}
                placeholder="Last Name"
                onChange={(e) =>
                  onFormUpdate("lastName", e.target.value)
                }
              />
            </Col>
            <Col size={12} sm={6} className="px-1">
              <input
                type="email"
                value={formDetails.email}
                placeholder="Email Address"
                onChange={(e) => onFormUpdate("email", e.target.value)}
              />
            </Col>
            <Col size={12} sm={6} className="px-1">
              <input
                type="tel"
                value={formDetails.phone}
                placeholder="Phone No."
                onChange={(e) => onFormUpdate("phone", e.target.value)}
              />
            </Col>
            <Col size={12} className="px-1">
              <textarea
                rows="3"
                value={formDetails.message}
                placeholder="Message"
                onChange={(e) => onFormUpdate("message", e.target.value)}
              ></textarea>
              <button type="submit">
                <span>{buttonText}</span>
              </button>
            </Col>
            {status.message && (
              <Col>
                <p className={status.success === false ? "danger" : "success"}>
                  {status.message}
                </p>
              </Col>
            )}
          </Row>
        </form>
      </Col>
    </section>
  );
};
