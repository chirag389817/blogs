import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
    return (
        <footer className="font-sans relative pt-5 pb-3 md:pb-6 bg-gray-800">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap">
                    <div className="flex w-full md:w-5/12">
                        <div className="text-2xl px-4">
                            <h3 className="font-bold text-gray-100">
                                CSP Blogs
                            </h3>
                            <p className="mt-2 mb-4 text-gray-400 text-sm">
                                Skill needs to be{" "}
                                <span className="font-semibold">developed</span>
                                .
                            </p>
                        </div>
                    </div>
                    <div className="flex w-full md:w-5/12 px-4">
                        <div className="text-2xl">
                            <p className="font-bold text-gray-100">
                                Contact Us
                            </p>
                            <span className="text-sm text-gray-400">
                                {/* Email:{" "} */}
                                <a href="mailto:chirag389817@gmail.com">
                                    chirag389817@gmail.com
                                </a>
                            </span>
                            <div className="mt-2 grid grid-cols-4 gap-4 text-gray-400">
                                <a
                                    className="hover:bg-gray-700 p-1 rounded-sm"
                                    href="https://www.linkedin.com/in/chirag389817/"
                                >
                                    <FaLinkedin />
                                </a>
                                <a
                                    className="hover:bg-gray-700 p-1 rounded-sm"
                                    href="https://x.com/Chirag_0611"
                                >
                                    <FaTwitter />
                                </a>
                                <a
                                    className="hover:bg-gray-700 p-1 rounded-sm"
                                    href="https://github.com/chirag389817"
                                >
                                    <FaGithub />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full md:w-2/12 px-4">
                        <div className="flex flex-wrap items-top">
                            <div className="w-full  ml-auto">
                                <p className="font-bold text-2xl text-gray-100">
                                    Quick Links
                                </p>
                                <ul className="list-unstyled mt-2 mb-4">
                                    <li>
                                        <a
                                            className="text-gray-400 hover:underline py-1 text-sm"
                                            href="/blogs"
                                        >
                                            Blogs
                                        </a>
                                        <a
                                            className="text-gray-400 hover:underline py-1 text-sm"
                                            href="/categories"
                                        >
                                            Categories
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-gray-400 hover:underline py-1 text-sm"
                                            href="#"
                                        >
                                            Portfolio
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-gray-400 hover:underline py-1 text-sm"
                                            href="/#about"
                                        >
                                            About
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-3 md:my-6 border-gray-400" />
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div className="text-sm text-gray-400 py-1">
                            &copy; 2024 Chirag Patel
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
