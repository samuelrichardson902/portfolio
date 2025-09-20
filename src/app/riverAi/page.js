import NavBar from "../components/navbar";

export default function RiverAi() {
  let shieldHeight = "28px";

  return (
    <div className="relative flex flex-col min-h-screen items-center justify-center overflow-hidden">
      {/* Blurred background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/topography.svg')",
          backgroundRepeat: "repeat",
          filter: "blur(0px)",
          WebkitFilter: "blur(0px)",
          backgroundAttachment: "fixed",
        }}
        aria-hidden="true"
      />
      {/* Main content */}
      <div className="relative z-10 w-8xl">
        <NavBar />
        <div className="px-8 py-8 md:px-20 md:py-20 w-full">
          <h2 className="text-3xl font-bold mb-8 heading-effect">
            River flow AI
          </h2>
          <div className="flex flex-col items-center gap-8 w-full">
            <div className="flex justify-center w-full">
              <img
                src="/project_images/river_ai.png"
                alt="River Predictor Analytics"
                className="rounded-2xl shadow-xl w-full max-w-7xl md:w-[80vw]"
              />
            </div>
            <div className="flex flex-col md:flex-row w-full max-w-7xl md:w-[80vw] gap-8">
              <p className="text-xl text-left md:w-2/3">
                A forecasting system built around a Multi-Layer Perceptron (MLP)
                implemented entirely from scratch in Python and NumPy that
                predicts daily river flow rates.
                <br />
                <br />A significant focus was placed on data preprocessing and
                feature engineering to prepare the historical sensor and weather
                data for the model. Raw environmental data was cleaned and
                normalized, and the feature set was enriched by engineering
                lag-based variables and cyclical (sin/cos) features for
                time-series data. To ensure model stability, multicollinearity
                was carefully reduced through weighted feature combination.
                <br />
                <br />
                The core of the project is the modular, object-oriented neural
                network. Designed for maximum flexibility, it supports:
                Customizable network architecture, including the number and size
                of layers. Switchable activation functions (sigmoid and tanh).
                Advanced training techniques implemented from scratch, such as
                momentum, annealing, bold driver, and weight decay.
                <br />
                <br /> During the training phase, six unique MLP configurations
                were rigorously evaluated over 7,000 to 15,000 epochs to
                identify the most effective architecture. The final model
                achieved a strong performance with an RMSE of 15.49 and an R² of
                0.826, significantly outperforming a baseline Adaline model. The
                model's ability to generalize was validated using unseen test
                data, where it demonstrated robust forecasting capability.
              </p>
              {/* Tech Stack Section */}
              <div className="flex flex-col items-start md:w-1/3">
                <h3 className="text-xl font-semibold mb-4">Tech Stack:</h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  <img
                    src="https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white"
                    alt="Python"
                    style={{ height: shieldHeight }}
                  />
                </div>
              </div>
            </div>
            {/* Action Buttons */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://github.com/samuelrichardson902/ANNs-coursework"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-lg bg-base-100 text-white font-semibold shadow hover:bg-base-200 transition-colors flex items-center gap-2 text-lg"
              >
                {/* GitHub Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
                </svg>
                View GitHub
              </a>
            </div>
          </div>
          {/* Back Button */}
          <div className="mt-12 flex justify-center">
            <a
              href="/#river-predictor"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
              Back to Portfolio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
