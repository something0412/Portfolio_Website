import "../styles/contact.css";
import Footer from "../components/Footer";
import { useState } from "react";
import plane_icon from "../assets/icons/paper-plane.png";
import { logos } from "../information/statics";
import { links } from "../information/data";
import emailjs from "@emailjs/browser";

import type {
    FormData,
    PlaceholderMap,
    SubmitEvent,
} from "../information/types";

const publicKEY = import.meta.env.VITE_PUBLIC_KEY;
const templateID = import.meta.env.VITE_TEMPLATE_ID;
const serviceID = import.meta.env.VITE_SERVICE_ID;

function Contact() {
    const ContactForm = () => {
        const [otherSubject, setOtherSubject] = useState("");
        const [formData, setFormData] = useState<FormData>({
            name: "",
            email: "",
            subject: "",
            message: "",
        });

        const msPlHolderText: PlaceholderMap = {
            "": "Anything...",
            jobOpportunities: "I will do my best capturing this chance",
            advice: "I would appreciate any advice given",
            ideas: "Share your idea here...",
            collab: "Let's build something together!",
            other: "Feel free to write anything",
        };

        let toFill: string[] = [];
        const [alertText, setAlertText] = useState<string>("");
        const onSubmitForm = (e: SubmitEvent) => {
            e.preventDefault();

            // prevent unfilled fields before sending
            for (const section of Object.keys(formData)) {
                if (formData[section as keyof FormData] == "") {
                    toFill.push(section.toUpperCase());
                }
            }
            setAlertText(
                `Oops, I think you forgot to put in the information for the ${toFill.join(
                    ", "
                )} section${toFill.length > 1 ? "s" : ""}`
            );
            !toFill.length && sendEmail();
            toFill = [];
        };
        const sendEmail = () => {
            console.log("sent");
            emailjs
                .send(
                    serviceID,
                    templateID,
                    {
                        name: formData.name,
                        email: formData.email,
                        subject:
                            formData.subject.toLowerCase() === "other"
                                ? `${formData.subject}: ${otherSubject}`
                                : formData.subject,
                        message: formData.message,
                    },
                    publicKEY
                )
                .then(() => {
                    alert("Email sent successfully!");
                    setFormData({
                        name: "",
                        email: "",
                        subject: "",
                        message: "",
                    });
                    otherSubject && setOtherSubject("");
                })
                .catch((error) => {
                    console.log(error);
                    alert("Failed to send email.");
                });
            setAlertText("");
        };
        return (
            <form
                className="contact-form"
                onSubmit={onSubmitForm}
                autoComplete="off"
            >
                <h2>Let me know what you have in mind</h2>
                <p className="alert-text">{alertText}</p>

                <div className="name-email-div">
                    <div className="sender-name-div">
                        <label>Name</label>
                        <input
                            type="text"
                            name="sender_name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    name: e.target.value,
                                })
                            }
                        />
                    </div>

                    <div className="sender-email-div">
                        <label>Email</label>
                        <input
                            type="email"
                            name="sender_email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    email: e.target.value,
                                })
                            }
                        />
                    </div>
                </div>

                <div className="subject-div">
                    <label>Subject</label>
                    <select
                        name="subject"
                        id="subject"
                        value={formData.subject}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                subject: e.target.value,
                            })
                        }
                    >
                        <option value="" disabled>
                            -- Select a topic --
                        </option>
                        <option value="jobOpportunities">
                            Job Opportunities
                        </option>
                        <option value="advice">Advice</option>
                        <option value="ideas">Ideas</option>
                        <option value="collab">Collaborate</option>
                        <option value="other">Other</option>
                    </select>
                    {formData.subject == "other" && (
                        <input
                            className="other-subject"
                            type="text"
                            name="subject"
                            placeholder="What is this about?"
                            required
                            value={otherSubject}
                            onChange={(e) => setOtherSubject(e.target.value)}
                        />
                    )}
                </div>

                <div className="message-div">
                    <label>Message</label>
                    <textarea
                        name="message"
                        placeholder={msPlHolderText[formData.subject]}
                        value={formData.message}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                message: e.target.value,
                            })
                        }
                    />
                </div>
                <div className="btn-div">
                    <button className="submit-btn" type="submit">
                        <p>Send</p>
                        <img src={plane_icon} alt="plane-icon" />
                    </button>
                </div>
            </form>
        );
    };

    const ContactMedia = () => {
        return (
            <div className="contact-media-div">
                <h2>Connect with me through...</h2>
                <div className="anchor-div">
                    <a
                        href={links.linkedin}
                        target="blank"
                        className="linkedin"
                    >
                        <img src={logos.linkedin_logo} alt="" />
                        <p>LinkedIn</p>
                    </a>
                    <a href={links.discord} target="blank" className="discord">
                        <img src={logos.discord_logo} alt="" />
                        <p>Discord</p>
                    </a>
                    <a
                        href={links.instagram}
                        target="blank"
                        className="instagram"
                    >
                        <img src={logos.instagram_logo} alt="" />
                        <p>Instagram</p>
                    </a>
                </div>
            </div>
        );
    };
    const ContactSeparator = () => {
        return (
            <div className="contact-separator">
                <div className="vertical-line"></div>
                <p>or</p>
                <div className="vertical-line"></div>
            </div>
        );
    };

    return (
        <>
            <div className="page contact-page">
                <ContactMedia />
                <ContactSeparator />
                <ContactForm />
            </div>
            <Footer />
        </>
    );
}

export default Contact;
