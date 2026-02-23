"use client";

import { useState } from "react";
import { FiHeadphones } from "react-icons/fi";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message sent successfully 🚀");
        setForm({ name: "", email: "", phone: "", message: "" });
    };

    return (
        <section id="contact" className="relative py-12 px-6 bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 transition-colors duration-300 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute w-96 h-96 bg-blue-200 dark:bg-blue-900/30 rounded-full blur-3xl opacity-20 -top-48 -left-48 animate-pulse"></div>
                <div className="absolute w-96 h-96 bg-yellow-200 dark:bg-yellow-900/30 rounded-full blur-3xl opacity-20 -bottom-48 -right-48 animate-pulse" style={{ animationDelay: '2s' }}></div>
                <svg className="absolute w-full h-full opacity-10 dark:opacity-5" viewBox="0 0 1000 1000">
                    <circle cx="100" cy="100" r="50" stroke="currentColor" fill="none" className="text-blue-400" />
                    <circle cx="900" cy="200" r="30" stroke="currentColor" fill="none" className="text-yellow-400" />
                </svg>
            </div>

            <div className="mb-2">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white flex items-center justify-center gap-3">
                   <span className="text-3xl">🎧</span> Get In Touch
                </h2>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="bg-white dark:bg-slate-800/50 rounded-3xl shadow-2xl overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-0 items-center">
                        {/* Left illustration (larger) */}
                        <div className="flex items-center justify-center bg-transparent">
                            <img src="/image/contact.png" alt="Contact illustration" className="w-72 md:w-96 lg:w-[500px] rounded-lg object-cover" />
                        </div>

                        {/* Right form area */}
                        <div className="p-6 md:p-10">
                            <div className="text-center mb-6">
                                <p className="text-gray-600 dark:text-gray-300 mt-2">Have a project or want to say hi? Fill out the form and I'll get back to you.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Your Name</label>
                                        <input name="name" value={form.name} onChange={handleChange} required placeholder="Your Name" className="p-3 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-black focus:outline-none focus:ring-2 focus:ring-purple-500 w-full" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Your Email</label>
                                        <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="Your Email" className="p-3 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-black focus:outline-none focus:ring-2 focus:ring-purple-500 w-full" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Phone (optional)</label>
                                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="p-3 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-black focus:outline-none focus:ring-2 focus:ring-purple-500 w-full" />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Your Message</label>
                                    <textarea name="message" rows={6} value={form.message} onChange={handleChange} required placeholder="Your Message" className="p-3 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-black focus:outline-none focus:ring-2 focus:ring-purple-500 w-full" />
                                </div>

                                <div className="flex items-center justify-between">
                                    <div />
                                    <div className="flex items-center gap-4">
                                        <button type="button" onClick={() => { setForm({ name: '', email: '', phone: '', message: '' }); }} className="px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200">Reset</button>
                                        <button type="submit" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-700 hover:bg-purple-800 text-white font-semibold transition-shadow shadow-lg">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
