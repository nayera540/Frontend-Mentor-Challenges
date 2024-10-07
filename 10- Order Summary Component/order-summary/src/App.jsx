function App() {
    return (
        <div className="bg-white max-w-md rounded-2xl">
            <img
                src="images/illustration-hero.svg"
                alt="hero img"
                className="rounded-t-2xl"
            />
            <div className="py-8 px-12 justify-center content-center text-center">
                <Header />
                <Plan />
                <Payment />
            </div>
        </div>
    );
}

function Header() {
    return (
        <div className="mt-2 px-5 mb-5">
            <h1 className="text-2xl font-black mb-3 text-Dark-blue">Order Summary</h1>
            <p className="text-Desaturated-blue font-semibold">
                You can now listen to millions of songs, audiobooks, and podcasts on any
                device anywhere you like!
            </p>
        </div>
    );
}

function Plan() {
    return (
        <div className="flex flex-col bg-Very-pale-blue rounded-lg justify-between px-5 py-5 mb-7 min-[376px]:flex-row">
            <div className="flex flex-row">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
                    <g fill="none" fill-rule="evenodd">
                        <circle cx="24" cy="24" r="24" fill="#DFE6FB" />
                        <path
                            fill="#717FA6"
                            fill-rule="nonzero"
                            d="M32.574 15.198a.81.81 0 00-.646-.19L20.581 16.63a.81.81 0 00-.696.803V26.934a3.232 3.232 0 00-1.632-.44A3.257 3.257 0 0015 29.747 3.257 3.257 0 0018.253 33a3.257 3.257 0 003.253-3.253v-8.37l9.726-1.39v5.327a3.232 3.232 0 00-1.631-.441 3.257 3.257 0 00-3.254 3.253 3.257 3.257 0 003.254 3.253 3.257 3.257 0 003.253-3.253V15.81a.81.81 0 00-.28-.613z"
                        />
                    </g>
                </svg>
                <div className="flex flex-col ml-3">
                    <p className="text-Dark-blue font-black mb-1">Annual Plan</p>
                    <p className="text-Desaturated-blue font-semibold">$59.99/year</p>
                </div>
            </div>
            <button className="text-Bright-blue text-sm font-bold underline hover:text-hover-blue hover:no-underline duration-200">
                Change
            </button>
        </div>
    );
}

function Payment() {
    return (
        <div className="flex flex-col mb-3">
            <button className="bg-Bright-blue text-white font-semibold rounded-lg py-2.5 shadow-xl shadow-shadow-blue mb-6 hover:bg-hover-blue duration-200">
                Proceed to Payment
            </button>
            <button className="text-Desaturated-blue font-bold text-sm hover:text-Dark-blue duration-200">Cancel Order</button>
        </div>
    );
}

export default App;
