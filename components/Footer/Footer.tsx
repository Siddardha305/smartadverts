import React from "react";

export const Footer = () => {
    return (
        <footer className="w-full py-8 px-4 md:px-16 bg-zinc-950 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between text-zinc-500 font-medium">
            <p>&copy; {new Date().getFullYear()} SmartAdverts. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0 uppercase tracking-wider text-sm">
                <a href="https://www.instagram.com/smartadverts_/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
                <a href="#home" className="hover:text-white transition-colors">Twitter</a>
                <a href="#home" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
        </footer>
    );
};
