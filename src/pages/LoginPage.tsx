// import loginBg from "./"
export const LoginPage = () => {
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("formsubmitted");
  };
  return (
    <div className="grid place-items-center h-screen">
       {/* <img
          alt="abstract background on currency symbols"
          className="object-cover w-full h-screen"
          src={loginBg}
        />  */}

      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleFormSubmit}
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight  focus:outline-blue-400"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            className="shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-blue-400"
            id="password"
            type="password"
            placeholder="************"
          ></input>
        </div>
        <div className="flex items-center justify-between ">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
        </div>
        <p
          className="text-center text-gray-500 text-xs pt-6 text-lg cursor-pointer"
          onClick={() => {
            console.log("clicked");
          }}
        >
          Create a new account?
        </p>
      </form>
    </div>
  );
};
