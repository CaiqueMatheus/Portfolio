export default function Form(req, res) {
  function Submit() {
    const submitForm = async (event) => {
      event.preventDefault();

      const res = await fetch("/api/submitForm", {
        body: JSON.stringify({
          firstName: event.target.firstName.value,
          lastName: event.target.lastName.value,
          email: event.target.email.value,
          whatsapp: event.target.whatsapp.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const result = await res.json()
    }

    return (
      <form
        className="grid m-4 p-16 rounded-lg shadow-md bg-gray"
        method="POST"
        onSubmit={submitForm}>
        <div className="form-content grid gap-2">
          <div className="grid col-span-3 gap-2">
            <label className="col" htmlFor="firstName">
              First Name <span>*</span>
            </label>
            <input
              className="col"
              id="firstName"
              type="text"
              name="firstName"
              placeholder="Adam Sandler"
              required
            />
          </div>
          <div className="grid col-span-3 gap-2">
            <label className="col" htmlFor="lastName">
              Last Name
            </label>
            <input
              className="col"
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Corno Manso"
              required
            />
          </div>
        </div>
        <div className="form-content grid gap-2">
          <div className="grid col-span-3 gap-2">
            <label className="col" htmlFor="email">
              E-mail <span>*</span>
            </label>
            <input
              className="col"
              id="email"
              type="email"
              name="email"
              placeholder="adamSandler@mail.com"
              required
            />
          </div>
          <div className="grid col-span-3 gap-2">
            <label className="col" htmlFor="phone">
              Whatsapp <span></span>
            </label>
            <input
              className="col"
              id="phone"
              type="number"
              name="phone"
              placeholder="+55 123456789"
              required
            />
          </div>
        </div>
        <div className="form-content col grid gap-2">
          <div>
            <h3 className="my-4 text-lg text-gray-200">
              What you need? <span>*</span>
            </h3>
            <div>
              <input type="checkbox" />
              <label>Design</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Web Development</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>System</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>App</label>
            </div>
            <div>
              <input type="checkbox" name="others" />
              <label htmlFor="others">Others</label>
            </div>
          </div>
        </div>
        <div className="form-content col grid grid-cols-3 gap-2">
          <label htmlFor="message col-span-3">
            Message <span>*</span>
          </label>
          <textarea
            className="col-span-3 p-4
            border rounded-md
            overflow-ellipsis focus:outline-none resize-none 
            bg-gray-500 border-gray text-gray-200 bg-opacity-100"
            id="message"
            name="message"
            placeholder="Your message"
          />
          <button
            type="submit"
            className="col-start-2 mt-4 p-2
            border-none rounded-md
            focus:outline-none shadow-md
            bg-gray-300 hover:bg-violet active:bg-violet-600 hover:text-gray"
          >
            Send
          </button>
        </div>
      </form>
    );
  }

  return Submit();
}
