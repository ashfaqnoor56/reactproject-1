import { useFormData } from 'herotofu-react';

const Contact = () => {
  // TODO - update to the correct endpoint
  const { formState, getFormSubmitHandler } = useFormData('https://herotofu.com/start');

  return (
    <>
    <div className='fs-1 text-center mt-5'>We are here for you</div>
      {/* {!!formState.status && <div className="py-2 fs-5 mb-3 d-flex justify-content-center align-items-center" style={{marginTop:'50px'}}>Current form status is: {formState.status}</div>} */}
      <form onSubmit={getFormSubmitHandler()}>
        <div className="pt-0 mt-5 mb-3 d-flex justify-content-center align-items-center">
       
          <input
            type="text"
            placeholder="Your name"
            name="name"
            className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
            required
          />
        </div>
        <div className="pt-0 mb-3 d-flex justify-content-center align-items-center">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
            required
          />
        </div>
        <div className="pt-0 mb-3 d-flex justify-content-center align-items-center">
          <textarea
            placeholder="Your message"
            name="message"
            className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
            required
          />
        </div>
        <div className="pt-0 mb-3 d-flex justify-content-center align-items-center">
          <button
          
            className="active:bg-blue-600 hover:shadow-lg focus:outline-none px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 rounded shadow outline-none bg-primary mt-3"
            type="submit"
          >
            Send a message
          </button>
        </div>
      </form>
    </>
  );
};

export default Contact;