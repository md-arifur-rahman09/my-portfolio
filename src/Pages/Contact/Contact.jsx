import React from 'react';
import Swal from 'sweetalert2';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;


        // Send form data using fetch to FormSubmit
        fetch('https://formsubmit.co/ajax/aimless.arif09@gmail.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(),
        })
            .then((response) => {
                console.log(response)
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
                    throw new Error('Something went wrong');
                }
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Failed to send message!',
                });
            });
    };

    return (
        <section className="bg-base-200 py-16 px-6 lg:px-20 bg-gradient-to-r from-[#e8f5e9] via-[#f1f8e9] to-[#e3f2fd]">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-8">
                <h2 className="text-4xl font-bold text-primary text-center mb-8">📬 Contact Me</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block font-semibold mb-1">Your Name</label>
                        <input type="text" name="name" required className="input input-bordered w-full" />
                    </div>

                    <div>
                        <label className="block font-semibold mb-1">Your Email</label>
                        <input type="email" name="email" required className="input input-bordered w-full" />
                    </div>

                    <div>
                        <label className="block font-semibold mb-1">Your Message</label>
                        <textarea name="message" rows="5" required className="textarea textarea-bordered w-full" />
                    </div>

                    <div className="text-center">
                        <button type="submit" className="btn btn-primary hover:scale-105 duration-300">
                            🚀 Send Message
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
