function App() {
    return (
        <div className="container md:max-w-5xl max-w-lg grid grid-cols-1 md:grid-cols-2">
            <div className="bg-dark-blue text-white md:p-10 p-4 order-2 md:order-1 text-center content-center justify-center md:justify-start md:text-start md:content-start rounded-l-md">
                <h1 className="text-4xl my-7 font-bold font-inter">
                    Get <span className="text-soft-violet">insights</span> that help your
                    business grow.
                </h1>
                <p className="text-trans--white-main mb-14 font-lexand font-light text-base md:pr-10">
                    Discover the benefits of data analytics and make better decisions
                    regarding revenue, customer experience, and overall efficiency.
                </p>
                <div className="stats grid md:grid-cols-3">
                    <div>
                        10k+ <span>companies</span>
                    </div>
                    <div>
                        314 <span>templates</span>
                    </div>
                    <div>
                        12m+ <span>queries</span>
                    </div>
                </div>
            </div>
            <div className="relative order-1 md:order-2">
                <img src="/images/image-header-desktop.jpg" className="rounded-r-md" />
                <div className="absolute inset-0 bg-img-soft-violet bg-opacity-50"></div>
            </div>
        </div>
    );
}

export default App;
