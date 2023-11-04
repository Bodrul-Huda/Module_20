const Latest = (props) => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {props.latest.map((item, i) => {
              return (
                <div key={i} className="p-4 md:w-1/3">
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <div className="m-2">
                      <img
                        className="lg:h-48 md:h-36 w-full object-cover object-center"
                        src={item.img1}
                        alt="blog"
                      />
                      <div className="p-6">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                          {item.keywords}
                        </h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                          {item.title}
                        </h1>
                        <p className="leading-relaxed mb-3">{item.short_des}</p>
                        <div className="flex items-center flex-wrap ">
                          <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 docs-creator">
                            Learn More
                            <svg
                              className="w-4 h-4 ml-2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M5 12h14"></path>
                              <path d="M12 5l7 7-7 7"></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Latest;
