function App() {
  return (
    <div className="min-h-screen flex flex-col text-white">
      <main className="container mx-auto px-6 pt-16 flex-1 text-center">
        <h2 className="text-2xl md:text-4xl lg:text-6xl uppercase">
          Welcome to
        </h2>
        <h1 className="text-3xl md:text-6xl lg:text-8xl font-black uppercase">
          The coding club
        </h1>

        <div className="text-lg md:text-2xl lg:text-3xl py-2 px-4 md:py-4 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-30 w-fit mx-auto mb-8 rounded-full">
          We waiting for you!
        </div>

        <form
          action="https://www.getrevue.co/profile/fedor-nedbalskij/add_subscriber"
          method="post"
          target="_blank"
        >
          <div className="flex flex-col md:flex-row justify-center mb-4">
            <input
              class="revue-form-field"
              placeholder="E.g. ivan.ivanov@gmail.com"
              type="email"
              name="member[email]"
              className="text-lg placeholder:text-gray-800 placeholder:italic py-4 px-6 md:px-10 lg:py-6 lg:px-12 bg-white opacity-30 focus:bg-opacity-50 focus:text-gray-900 duration-150 rounded-full md:rounded-tr-none md:rounded-br-none md:mb-0 "
            />
            <input
              type="submit"
              value="Join today!"
              name="member[subscribe]"
              className="bg-primary rounded-full md:rounded-tl-none md:rounded-bl-none text-lg md:text-2xl py-4 px-6 md:px-10 lg:py-6 lg:px-12 cursor-pointer hover:opacity-75 duration-150"
            />
          </div>
          <div className="opacity-75 italic">
            By subscribing, you agree with Revue’s
            <a
              target="_blank"
              href="https://www.getrevue.co/terms"
              rel="noreferrer"
              className="hover:opacity-80 duration-150"
            >
              Terms of Service
            </a>
            ||
            <a
              target="_blank"
              href="https://www.getrevue.co/privacy"
              rel="noreferrer"
              className="hover:opacity-80 duration-150"
            >
              Privacy Policy
            </a>
            .
          </div>
        </form>
      </main>

      <footer className="container mx-auto p-6 flex flex-col md:flex-row items-center justify-between">
        <p>Built with love! By Fyodor Nedbalskiy</p>
        <div className="flex m-8">
          <a href="#" className="mx-3 hover:opacity-80 duration-150">
            About Us
          </a>{" "}
          |
          <a href="#" className="mx-3 hover:opacity-80 duration-150">
            Privacy
          </a>{" "}
          |
          <a href="#" className="mx-3 hover:opacity-80 duration-150">
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
