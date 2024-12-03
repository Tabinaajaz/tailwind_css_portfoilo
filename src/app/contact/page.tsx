import ButtonComponent from "@/component/button";


export default function Contact() {
  // array of input fields
  const inputFields = [
    { id: "name", label: "Name", placeholder: "Enter here", size: 20 },
    { id: "email", label: "Email", placeholder: "Enter here", size: 20 },
    { id: "message", label: "Message", placeholder: "Enter here", size: 20 },
  ];
  return (
    <form className="bg-black text-white">
      <div className="space-y-1 text-center md:space-y-8 lg:space-y-10">
        <div className="text-3xl font-semibold md:text-4xl lg:text-7xl">
          <h1 className="underline">GET IN TOUCH</h1>
        </div>

        {/* Render input fields dynamically */}
        {inputFields.map((field) => (
          <div key={field.id} className="mt-10 pt-2 text-2xl">
            <label htmlFor={field.id} className="text-1xl mt-1 pt-1">
              <h2 className="mb-2">{field.label}</h2>
              <input
                id={field.id}
                placeholder={field.placeholder}
                size={field.size}
                name={field.id}
                className="text-black"
              />
            </label>
          </div>
        ))}

        <div className="text-2xl text-center font-extrabold lg:text-3xl text-blue-500">
          <ButtonComponent />
        </div>
      </div>
    </form>
  );

}
