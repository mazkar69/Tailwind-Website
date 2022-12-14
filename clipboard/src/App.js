
import './App.css';

function App() {
  return (
      <>
        <section id='hero'>
          <div className="max-w-6xl mx-auto text-center mb-40 px-10 pt-16">
            <img className='text-center mx-auto my-16' src="./images/logo.svg" alt="" />
            <h3 className='text-4xl font-bold mb-8 text-darkGrayishBlue'>A history of everything you copy.</h3>
            <p className="max-w-3xl mx-auto mb-10 text-2xl text-grayishBlue">
              Clipboard allow you to track and orgnise everything you copy.
              Instantly access your Clipboard on all your device.
            </p>
            <div className="flex flex-col justify-center w-full space-y-6 text-xl text-white md:flex-row md:space-y-0 md:space-x-4">
              <a href="" className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200  hover:opacity-80">Download for IOS</a>
              <a href="" className="p-4 px-8 rounded-full shadow-lg   bg-lightBlue duration-200  hover:opacity-80">Download for Mac</a>
            </div>

          </div>
        </section>

        <section id='snipet'>
          <div className="max-w-6xl mx-auto text-center my-20 px-10">
              <h3 className='text-4xl font-bold mb-8 text-darkGrayishBlue'>
                Keep track of your snippets
              </h3>
          </div>
        </section>
      </>
  );
}

export default App;
