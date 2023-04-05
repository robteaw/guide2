export default function Form() {
  return (
    <>
      <h3>Input</h3>
      <p>type, name, id, class, placeholder, required</p>
      <img src="images/code_input.png" alt="" className="img5" />
      <h3>Textarea</h3>
      <p>name, id, class, cols, row, placeholder</p>

      <h3>Code</h3>
      <img src="images/code_form.png" alt="" className="img4" />
      <form
        name="contact"
        action="/pages/success/"
        // onsubmit="submit"
        method="POST"
        data-netlify="true"
        // netlify
        netlify-honeypot="bot-field"
        hidden
      >
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <input
            type="text"
            name="fname"
            id="fname"
            placeholder="First Name"
            className="form-element"
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="lname"
            id="lname"
            placeholder="Last Name"
            className="form-element"
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="form-element"
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Phone"
            className="form-element"
          />
        </div>
        <textarea
          name="message"
          id="message"
        //   cols="30"
        //   rows="10"
          placeholder="How can I help you?"
          className="form-element"
        ></textarea>
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

