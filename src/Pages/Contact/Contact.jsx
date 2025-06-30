import React from 'react';
import { BsSendFill } from 'react-icons/bs';
import { PiPhoneDisconnectBold } from 'react-icons/pi';
import Swal from 'sweetalert2';

const ContactSection = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;

        fetch('https://formsubmit.co/ajax/aimless.arif09@gmail.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Message sent successfully!',
                        showConfirmButton: false,
                        timer: 3000,
                    });
                    form.reset();
                } else {
                    throw new Error(data.message || 'Something went wrong');
                }
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.message || 'Failed to send message!',
                });
            });
    };

    return (
        <section className="py-16 px-6 lg:px-20 bg-gradient-to-r from-[#e8f5e9] via-[#f1f8e9] to-[#e3f2fd] animate-gradient-bg">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary text-center mb-8 sm:mb-10"> 📬  Contact Me</h2>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 items-start gap-8 bg-white rounded-lg shadow-xl p-10">
                {/* Left: Contact Info */}
                <div className="space-y-4 animate-slide-in-left ">
                    <h2 className="text-xl font-bold text-primary">📞 Contact Information</h2>
                    <p><strong className="text-primary">Location:</strong> Dhaka, Bangladesh</p>
                    <p><strong className="text-primary">Phone:</strong> +8801936566454</p>
                    <p><strong className="text-primary">WhatsApp:</strong> +8801936566454</p>
                    <p><strong className="text-primary">Email:</strong> aimless.arif09@gmail.com</p>
                </div>

                {/* Right: Contact Form */}
                <div className="animate-slide-in-right">
                    <h2 className="text-xl font-bold text-primary mb-6">✉️ Send  Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block font-semibold mb-1">Your Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 transform hover:scale-[1.02] focus:scale-[1.02]"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div>
                            <label className="block font-semibold mb-1">Your Email</label>
                            <input
                                type="email"
                                name="email"
                                required
                                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 transform hover:scale-[1.02] focus:scale-[1.02]"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div>
                            <label className="block font-semibold mb-1">Your Message</label>
                            <textarea
                                name="message"
                                rows="5"
                                required
                                className="textarea textarea-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 transform hover:scale-[1.02] focus:scale-[1.02]"
                                placeholder="Type your message here..."
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="btn btn-primary flex items-center justify-center space-x-2 w-full py-3 hover:scale-105 transition-all duration-300 transform hover:shadow-lg"
                            >
                                <BsSendFill size={20} className="animate-pulse" />
                                <span className="font-medium">Send Message</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <style>{`
                @keyframes gradientAnimation {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .animate-gradient-bg {
                    background: linear-gradient(45deg, #e8f5e9, #f1f8e9, #e3f2fd, #e1f5fe);
                    background-size: 200% 200%;
                    animation: gradientAnimation 15s ease infinite;
                }
                @keyframes slideInLeft {
                    from { opacity: 0; transform: translateX(-50px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                @keyframes slideInRight {
                    from { opacity: 0; transform: translateX(50px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                .animate-slide-in-left {
                    animation: slideInLeft 0.8s ease-out;
                }
                .animate-slide-in-right {
                    animation: slideInRight 0.8s ease-out;
                }
            `}</style>
        </section>
    );
};

export default ContactSection;