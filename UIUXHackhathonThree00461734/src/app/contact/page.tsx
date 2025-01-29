export default function Contact() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6 py-12">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg text-center">
                <h1 className="text-3xl font-bold text-[#151875] mb-4">Contact Us</h1>
                <p className="text-gray-600 text-lg mb-6">
                    Have any questions? We'd love to hear from you!
                </p>

                <div className="text-left space-y-4">
                    <p className="text-gray-700">
                        📩 <span className="font-medium">Email:</span>
                        <a href="mailto:mehdinathani@gmail.com" className="text-pink-500 hover:underline ml-1">
                            mehdinathani@gmail.com
                        </a>
                    </p>
                    <p className="text-gray-700">
                        🎓 <span className="font-medium">Student:</span> GIAIC
                    </p>
                </div>

                <button className="mt-6 bg-pink-500 text-white py-2 px-6 rounded-md hover:bg-pink-600 transition duration-300">
                    Get in Touch
                </button>
            </div>
        </div>
    );
}
