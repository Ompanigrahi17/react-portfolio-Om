import React, { useState } from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { CONTACT } from '../constants';
import Container from './Container';
import { ColorRing } from 'react-loader-spinner';

const Contact = () => {
  const [status, setStatus] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Address: "",
    Message: "",
  });

  // State to track focus of input fields
  const [focusedInput, setFocusedInput] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const scriptURL = "https://script.google.com/macros/s/AKfycbzQEvgX4JuXcFqz_Mahi7LWXycdr6HeutBX-GpMs2W7brCVg4kmebAqL_fnc3VeTI1O3w/exec";
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    const currentDateTime = new Date().toLocaleString();
    form.append("Name", formData.Name);
    form.append("Email", formData.Email);
    form.append("Phone", formData.Phone);
    form.append("Address", formData.Address);
    form.append("Message", formData.Message);
    form.append("DateTime", currentDateTime);

    try {
      setLoading(true);
      const response = await fetch(scriptURL, { method: "POST", body: form });
      if (response.ok) {
        setStatus("Success! Your message has been sent.");
        setFormData({
          Name: "",
          Email: "",
          Phone: "",
          Address: "",
          Message: "",
        });
      } else {
        setStatus("Error! Unable to send your message.");
      }
    } catch (error) {
      console.error("Error!", error.message);
      setStatus("Error! Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = (isFocused) => `
    inputStyle 
    ${isFocused ? "shadow-[0_0_10px_3px rgba(128,0,128,0.5)]" : "hover:shadow-lg"} 
    transition-shadow duration-300
  `;

  return (
    <section id="contact" className="bg-darkBg py-12">
      <Container className="bg-lightDarkBg text-white/80 p-10 rounded-lg">
        <div className="border-b border-neutral-900 pb-10">
          <h2 className="my-5 text-center text-4xl">
            Let's Connect
          </h2>
        </div>

        {/* New Message Above the Form */}
        <p className='text-center text-lg mb-5'>
        Questions on your mind? I'm all ears! Send them my way. Feel free to follow me.
        </p>
        
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-10">
            <ColorRing
              visible={true}
              height="150"
              width="150"
              ariaLabel="color-ring-loading"
              wrapperStyle={{}}
              wrapperClass="color-ring-wrapper"
              colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            />
            <p className="text-lg font-semibold">Submission in process. Thank you for holding...</p>
          </div>
        ) : status ? (
          <div className="py-10 flex flex-col gap-2 items-center justify-center">
            <p className="text-xl font-semibold text-green-500">{status}</p>
            <p className="text-base text-slate-300">
              Thank you for your time. I will reach out to your email:{" "}
              <span className="text-lg font-semibold text-green-500">
                {formData?.Email}
              </span>{" "}
              as soon as possible.
            </p>
          </div>
        ) : (
          <>
            <div className="bg-neutral-800 p-8 rounded-lg shadow-md">
              <form
                onSubmit={handleSubmit}
                className="max-w-4xl mx-auto flex flex-col gap-10 mt-5 p-4"
              >
                <div className="grid grid-cols-2 gap-10">
                  <div className="flex flex-col gap-7">
                    <input
                      type="text"
                      name="Name"
                      placeholder="Name"
                      value={formData.Name}
                      onChange={handleChange}
                      onFocus={() => setFocusedInput("Name")}
                      onBlur={() => setFocusedInput(null)}
                      className={inputStyle(focusedInput === "Name")}
                      style={{
                        backgroundColor: '#333',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        padding: '12px',
                        fontSize: '16px',
                        width: '100%',
                        outline: 'none',
                      }}
                      required
                    />
                    <input
                      type="text"
                      name="Phone"
                      placeholder="Phone"
                      value={formData.Phone}
                      onChange={handleChange}
                      onFocus={() => setFocusedInput("Phone")}
                      onBlur={() => setFocusedInput(null)}
                      className={inputStyle(focusedInput === "Phone")}
                      style={{
                        backgroundColor: '#333',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        padding: '12px',
                        fontSize: '16px',
                        width: '100%',
                        outline: 'none',
                      }}
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-7">
                    <input
                      type="email"
                      name="Email"
                      placeholder="Email"
                      value={formData.Email}
                      onChange={handleChange}
                      onFocus={() => setFocusedInput("Email")}
                      onBlur={() => setFocusedInput(null)}
                      className={inputStyle(focusedInput === "Email")}
                      style={{
                        backgroundColor: '#333',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        padding: '12px',
                        fontSize: '16px',
                        width: '100%',
                        outline: 'none',
                      }}
                      required
                    />
                    <input
                      type="text"
                      name="Address"
                      placeholder="Address"
                      value={formData.Address}
                      onChange={handleChange}
                      onFocus={() => setFocusedInput("Address")}
                      onBlur={() => setFocusedInput(null)}
                      className={inputStyle(focusedInput === "Address")}
                      style={{
                        backgroundColor: '#333',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        padding: '12px',
                        fontSize: '16px',
                        width: '100%',
                        outline: 'none',
                      }}
                      required
                    />
                  </div>
                </div>

                <textarea
                  name="Message"
                  placeholder="Text here"
                  value={formData.Message}
                  onChange={handleChange}
                  onFocus={() => setFocusedInput("Message")}
                  onBlur={() => setFocusedInput(null)}
                  className={inputStyle(focusedInput === "Message")}
                  style={{
                    backgroundColor: '#333',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    padding: '15px',
                    fontSize: '16px',
                    width: '100%',
                    height: '220px',
                    outline: 'none',
                  }}
                  cols={6}
                  required
                />

                <button
                  type="submit"
                  className="flex items-center justify-center gap-x-1 bg-neutral-900 hover:bg-purple-900 md:active:bg-purple-900 text-purple-100 w-48 h-14 text-base rounded font-bold hover:scale-110 md:active:scale-110 ease-in-out duration-300 relative group overflow-hidden self-center mt-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  Send mail
                </button>
              </form>
            </div>

            <div className="text-center mt-10">
              <p className="my-4">{CONTACT.address}</p>
              <a href={`mailto:${CONTACT.email}`} className="inline-block mb-5" style={{ boxShadow: '0 1px 0 0 #ccc' }}>
                {CONTACT.email}
              </a>

              <div className="flex flex-wrap items-center justify-center gap-4 text-2xl mt-4">
                <a href="https://www.linkedin.com/in/om-panigrahi-9b95501b2/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="hover:opacity-50 transition duration-300 cursor-pointer" />
                </a>
                <a href="https://github.com/Ompanigrahi17" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="hover:opacity-50 transition duration-300 cursor-pointer" />
                </a>
                <a href="https://www.instagram.com/om__panigrahi/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="hover:opacity-50 transition duration-300 cursor-pointer" />
                </a>
                <a href="https://x.com/om__panigrahi" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="hover:opacity-50 transition duration-300 cursor-pointer" />
                </a>
              </div>

              {/* Add the copyright section */}
              <p className="mt-5 text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Om Panigrahi. All Rights Reserved.
              </p>
            </div>
          </>
        )}
      </Container>
    </section>
  );
};

export default Contact;