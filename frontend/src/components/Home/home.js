import React from "react";

export default function Home(props) {
  const scrollToTarget = () => {
    const targetElement = document.getElementById("target-element");
    if (targetElement) {
      const offset = 120;
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="homepage">
      <div className="div">
        <div className="whole">
          <div className="upper-section">
            <div className="left-side">
              <div className="section1">
                <div className="drive-reduce">
                  Drive &amp; <br />
                  Reduce
                  <br />
                  Emissions
                </div>
                <p className="text-wrapper-14 mt-5">
                  Your Guide to Electric and Hybrid Vehicles 
                  for a Greener Future.
                </p>
                <div className="mt-5" onClick={scrollToTarget}>
				  	<button type="button" className="text-wrapper-15 btn btn-custom-outline" onClick={scrollToTarget}>
						Learn More
						<i className="bi bi-arrow-down-short"></i>
  					</button>
                </div>
              </div>
              <div className="section2">
                <p className="why-should-you-care" id="target-element">
                  Why should you care
                  <br />
                  about carbon emissions?
                </p>
                <p className="text-wrapper-10">
                  Carbon emissions drive climate change, causing global warming, 
                  extreme weather, rising sea levels, and threats to ecosystems. 
                  This impacts food, water, and health. Caring about emissions 
                  lets you contribute to a sustainable and healthier future for 
                  yourself and the planet.
                </p>
              </div>
              <div className="section3">
                <p className="why-buy-a-fuel">
                  Why buy an EV or Hybrid?
                </p>
                <p className="text-wrapper-11">
                  Choosing a fuel-efficient or electric car reduces carbon emissions, 
                  saves on fuel costs, and benefits the environment, offering both 
                  economic and ecological advantages.
                </p>
                <iframe
                  className="video"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/J0tgtWbODXk?si=d24GCSgG9AKNJGZu"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="overlap-2">
              <p className="of-all-emissions">
                of urban CO2 come from vehicle exhaust
              </p>
              <p className="text-wrapper">
                fuel cost savings for EV drivers
              </p>
              <div className="text-wrapper-2">95%</div>
              <div className="text-wrapper-3">60%</div>
              <img
                className="tree-vector"
                alt="Tree vector"
                src="/imgs/tree.png"
              />
              
              <p className="text-wrapper-7">
                of CO2 emitted per passenger vehicle yearly
              </p>
              <p className="text-wrapper-8">
                annual premature deaths from air pollution
              </p>
              <p className="element-metric-tons">
                <span className="span">4.6</span>
                <span className="text-wrapper-9"> metric tons</span>
              </p>
              <p className="element-million">
                <span className="span">4.2</span>
                <span className="text-wrapper-9"> million </span>
              </p>
            </div>
          </div>

          <div className="bottom-section">
            <div>
              <p className="text-wrapper-12">
                How Do I Know What Vehicle to Buy?
              </p>
              <div className="row-container">
                <a href="/Search" className="button-link">
                  <div className="overlap-group-2">
                    <div className="text-wrapper-4">Search & Filter</div>
                    <p className="text-wrapper-13">
                      Look through cars to discover your ideal vehicle
                    </p>
                    <img
                      className="img"
                      alt="Group"
                      src="/imgs/search-icon.png"
                    />
                  </div>
                </a>

                <a href="/Quiz" className="button-link">
                  <div className="overlap-group-2">
                    <div className="text-wrapper-4">Take a Quiz</div>
                    <p className="text-wrapper-13">
                     Take our quiz to discover the perfect car for you
                    </p>
                    <img
                      className="target-icon"
                      alt="Target icon"
                      src="imgs/target-icon.png"
                    />
                  </div>
                </a>
                

                <a href="/Compare" className="button-link">
                  <div className="overlap-group-2">
                    <div className="overlap-group-3">
                      <div className="text-wrapper-5">Compare Cars</div>
                      <img
                        className="compare-icon"
                        alt="Compare icon"
                        src="imgs/compare-icon.png"
                      />
                    </div>
                    <p className="text-wrapper-6">
                      Effortlessly compare features between cars
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
