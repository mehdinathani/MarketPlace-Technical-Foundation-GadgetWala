export default function Cancel() {
    return (
        <div className="w-full max-w-lg mx-auto p-6 bg-white shadow-md rounded-md text-center">
            <h1 className="text-3xl font-bold text-red-500 mb-4">Payment Canceled</h1>
            <p className="text-lg mb-4">Your payment has been canceled.</p>
            <button
                onClick={() => {
                    window.location.href = "/";
                }} className="w-[163px] h-[50px] bg-[#FB2E86] text-white font-bold rounded-md hover:bg-[#E0227A]">
                Back to Home
            </button>
        </div>
    );
}
