import useForm from "./useForm";

export default function Contact() {
  const { values, handleChange, resetForm } = useForm({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", values);
    resetForm();
  };

  return (
    <div>
      <h2>Custom Hook</h2>

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />

        <br />
        <br />

        <label>Phone:</label>
        <input
          type="text"
          name="phone"
          value={values.phone}
          onChange={handleChange}
        />

        <br />
        <br />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />

        <br />
        <br />

        <label>Message:</label>
        <textarea
          name="message"
          value={values.message}
          onChange={handleChange}
        ></textarea>

        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
