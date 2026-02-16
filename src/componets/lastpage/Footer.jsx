
import React from 'react';
import { FOOTER_LINKS } from '../../Constants';

const TriplioFooter = () => {
    return (
        <footer className="w-full min-h-[60vh]  bg-[#1c2431] text-gray-400 pt-6 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8">
                    {/* Brand Info */}
                    <div className="md:col-span-2 space-y-6">
                        <div className="flex items-center overflow-hidden">
                            <div className="w- h-10 bg-white rounded-xl overflow-hidden flex items-center justify-center">
                                {/* <div className="w-5 h-5 border-2 border-black rounded-sm" /> */}
                                <img
                                    className="h-7.5 w-7.5"
                                    src="/websiteimages/logo.png"
                                    alt="logo"
                                />
                                <span className="text-black p-4 text-2xl font-bold tracking-tight">Triplio</span>
                            </div>
                        </div>
                        <p className="max-w-xs text-sm leading-relaxed">
                            Experience the magic of the desert with carefully crafted trips designed for adventure, relaxation, and unforgettable memories.
                        </p>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Navigation</h4>
                        <ul className="space-y-4 text-sm">
                            {FOOTER_LINKS.navigation.map(link => (
                                <li key={link}><a href="#" className="hover:text-white transition-colors">{link}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Destination</h4>
                        <ul className="space-y-4 text-sm">
                            {FOOTER_LINKS.destination.map(link => (
                                <li key={link}><a href="#" className="hover:text-white transition-colors">{link}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Social</h4>
                        <ul className="space-y-4 text-sm">
                            {FOOTER_LINKS.social.map(link => (
                                <li key={link}><a href="#" className="hover:text-white transition-colors">{link}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-10 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-60">
                    <p>© 2025 Triplio. All rights reserved.</p>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-white">Teams & Condition</a>
                        <span>|</span>
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default TriplioFooter;
