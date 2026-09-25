import { FaHome } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const inputClassName =
  "bg-(--surface-muted) border border-(--line) w-full md:w-[400px] py-2 px-3 rounded";

const Contact = () => {
  return (
    <section id="contact" className="pt-20 w-full max-w-[980px] mx-auto">
      <div className="mainDiv flex lg:flex-row flex-col items-center justify-between gap-10">
        <div className="w-full">
          <h3 className="text-3xl text-center font-bold">Leave me your info</h3>
          <form className="surface border flex flex-col gap-6 rounded-xl p-5 md:p-7 mt-8">
            <div className="flex flex-col gap-2">
              <label className="muted" htmlFor="fullName">
                Your Full Name (Required)
              </label>
              <input
                className={inputClassName}
                id="fullName"
                type="text"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="muted" htmlFor="email">
                Your Email (Required)
              </label>
              <input
                className={inputClassName}
                id="email"
                type="email"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="muted" htmlFor="subject">
                Subject
              </label>
              <input className={inputClassName} id="subject" type="text" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="muted" htmlFor="message">
                Your Message
              </label>
              <textarea
                className={inputClassName}
                id="message"
                rows="5"
                required
              />
            </div>
            <button
              type="submit"
              className="w-40 cursor-pointer py-2 font-semibold rounded hover:text-white bg-(--accent) flex items-center justify-center"
            >
              Send message
            </button>
          </form>
        </div>

        <div className="w-full">
          <h3 className="text-3xl text-center font-bold">
            Contact information
          </h3>
          <div className="flex gap-4 flex-col items-center justify-center">
            <div className="w-full max-w-[300px] surface border p-6 flex flex-col gap-4 items-center justify-center mt-8">
              <div className="w-10 h-10 p-2 rounded-full flex items-center justify-center bg-(--accent)">
                <FaHome className="text-[20px]" />
              </div>
              <p className="muted">Bangladesh, Dhaka</p>
              <p className="muted">Vatara</p>
            </div>
            <div className="w-full max-w-[300px] surface border p-6 flex flex-col gap-4 items-center justify-center">
              <div className="w-10 h-10 p-2 rounded-full flex items-center justify-center bg-(--accent)">
                <IoMdMail className="text-[20px]" />
              </div>
              <a
                className="muted hover:text-(--accent)"
                href="mailto:robileo49@gmail.com"
              >
                robileo49@gmail.com
              </a>
              <p className="muted">WhatsApp: 01851228651</p>
              <p className="muted">Telegram: 01851228651</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
