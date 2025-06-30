import React from 'react';
import { BsSendFill } from 'react-icons/bs';
import Swal from 'sweetalert2';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;
        const BDtime = new Date().toLocaleString('en-US', { timeZone: 'Asia/Dhaka' });

        fetch('https://formspree.io/f/mvgrlkev', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({ name, email, message, BDtime }),
        })
            .then((response) => {
                if (response.ok) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Message sent successfully!',
                        showConfirmButton: false,
                        timer: 3000,
                    });
                    form.reset();
                } else {
                    return response.json().then((data) => {
                        throw new Error(data?.errors?.[0]?.message || 'Something went wrong');
                    });
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
        <section className="py-16 px-6 lg:px-20 min-h-[70vh] bg-gradient-to-r from-[#e8f5e9] via-[#f1f8e9] to-[#e3f2fd] animate-gradient-bg flex items-center">
            <div className="w-full">
                <h2 className="text-3xl sm:text-4xl font-bold text-primary text-center mb-8 sm:mb-10">📬 Contact Me</h2>

                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 items-start gap-8 bg-white rounded-lg shadow-xl p-10">
                    <div className="space-y-4 animate-slide-in-left">
                        <h2 className="text-xl font-bold text-primary">📞 Contact Information</h2>
                        <p><strong className="text-primary">Location:</strong> Dhaka, Bangladesh</p>
                        <p><strong className="text-primary">Phone:</strong> +8801936566454</p>
                        <p><strong className="text-primary">WhatsApp:</strong> +8801936566454</p>
                        <p><strong className="text-primary">Email:</strong> aimless.arif09@gmail.com</p>
                    </div>

                    <div className="animate-slide-in-right">
                        <h2 className="text-xl font-bold text-primary mb-6">✉️ Send Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block font-semibold mb-1">Your Name</label>
                                <input name="name" type="text" className="input input-bordered w-full" required />
                            </div>
                            <div>
                                <label className="block font-semibold mb-1">Your Email</label>
                                <input name="email" type="email" className="input input-bordered w-full" required />
                            </div>
                            <div>
                                <label className="block font-semibold mb-1">Your Message</label>
                                <textarea name="message" rows="5" className="textarea textarea-bordered w-full" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary w-full flex items-center justify-center space-x-2 py-3">
                                <BsSendFill size={20} className="animate-pulse" />
                                <span className="font-medium">Send Message</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes gradientAnimation {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .animate-gradient-bg {
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

export default Contact;
