import { useState } from "react";
import emailjs from "@emailjs/browser";

const steps = [
  {
    title: "What type of website do you need?",
    options: [
      "Personal Website",
      "Blog",
      "Startup Website",
      "Small Business Website",
      "E-commerce Website",
      "Portfolio",
      "Other",
    ],
  },
  {
    title: "What is the goal of your website?",
    options: [
      "Lead Generation",
      "Build Your Online Presence",
      "Drive Sales",
      "Customer Education",
      "Personal Branding",
      "Showcase Products or Services",
      "Other",
    ],
  },
  {
    title: "How many pages do you need?",
    options: [
      "1–3",
      "4–6",
      "7–10",
      "10+",
      "Not Sure",
    ],
  },
];

function ServiceWizard({ onClose }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  function chooseOption(option) {
    setAnswers({
      ...answers,
      [step]: option,
    });
  }

  function nextStep() {
    if (step < steps.length) {
      setStep(step + 1);
    }
  }

  function previousStep() {
    if (step > 0) {
      setStep(step - 1);
    }
  }

  async function submitRequest() {
    setSending(true);

    const templateParams = {
      website_type: answers[0] || "Not specified",
      website_goal: answers[1] || "Not specified",
      number_of_pages: answers[2] || "Not specified",
      project_details: message || "No additional details provided.",
    };

    try {
      await emailjs.send(
  "service_o9r8z3j",
  "template_7c4xj9e",
  templateParams,
  "NOiobnRwLFUpFN5Zz"
);

      setSubmitted(true);
    } catch (error) {
      console.error("EmailJS Error:", error);

      alert(
  `Email could not be sent.\n\nStatus: ${error?.status}\nMessage: ${error?.text || error?.message}`
);
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <div className="wizard-overlay">
        <div className="wizard-box success-box">

          <button
            className="wizard-close"
            onClick={onClose}
          >
            ×
          </button>

          <span className="wizard-success-number">
            ✓
          </span>

          <p className="eyebrow">
            REQUEST SENT
          </p>

          <h2>
            Thank you.
          </h2>

          <p>
            Request received. I’ll be in touch.
.
          </p>

          <button
            className="wizard-main-button"
            onClick={onClose}
          >
            Close
          </button>

        </div>
      </div>
    );
  }

  const isDetailsStep = step === steps.length;
  const totalSteps = steps.length + 1;

  return (
    <div className="wizard-overlay">

      <div className="wizard-box">

        <button
          className="wizard-close"
          onClick={onClose}
        >
          ×
        </button>

        <div className="wizard-header">

          <span>
            SERVICE REQUEST
          </span>

          <strong>
            {String(step + 1).padStart(2, "0")} /{" "}
            {String(totalSteps).padStart(2, "0")}
          </strong>

        </div>

        <div className="wizard-progress">
          <span
            style={{
              width: `${((step + 1) / totalSteps) * 100}%`,
            }}
          ></span>
        </div>

        <div className="wizard-content">

          <p className="eyebrow">
            STEP {step + 1}
          </p>

          {!isDetailsStep ? (
            <>
              <h2>
                {steps[step].title}
              </h2>

              <div className="wizard-options">

                {steps[step].options.map((option) => (
                  <button
                    key={option}
                    type="button"
                    className={
                      answers[step] === option
                        ? "wizard-option selected"
                        : "wizard-option"
                    }
                    onClick={() => chooseOption(option)}
                  >
                    <span>{option}</span>
                    <span>→</span>
                  </button>
                ))}

              </div>
            </>
          ) : (
            <>
              <h2>
                Tell me more about your project
              </h2>

              <textarea
                className="wizard-textarea"
                placeholder="Tell me more about your project..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </>
          )}

        </div>

        <div className="wizard-footer">

          <button
            type="button"
            className="wizard-back"
            onClick={previousStep}
            disabled={step === 0 || sending}
          >
            ← Back
          </button>

          {!isDetailsStep ? (
            <button
              type="button"
              className="wizard-main-button"
              onClick={nextStep}
              disabled={!answers[step]}
            >
              Continue →
            </button>
          ) : (
            <button
              type="button"
              className="wizard-main-button"
              onClick={submitRequest}
              disabled={!message.trim() || sending}
            >
              {sending
                ? "Sending..."
                : "Submit Service Request"}
            </button>
          )}

        </div>

      </div>

    </div>
  );
}

export default ServiceWizard;