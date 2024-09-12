import React from 'react';

export default function Register({ userInfo }) {
    const { data: userData, setData: setUserData } = userInfo;

  // Handle form submit
  const handleForm = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log('check');
    const form = event.target; // Get the entire form
    console.log(form);

    const userObj = { // Creating an object with all the user submitted data
      uname: form.username.value,
      uemail: form.email.value,
      uphone: form.phone.value,
      password: form.password.value
    };
    console.log(userObj);

    // Convert this object into array
    const data = [...userData, userObj]; // Spread existing userData and add the new userObj

    setUserData(data);
    console.log(data); // Log the updated data
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 shadow-2xl">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        <form onSubmit={handleForm} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input type="text" id="username" name="username" className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
            <input type="text" id="phone" name="phone" className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password" name="password" className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200" />
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="agree" name="agree" className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
            <label htmlFor="agree" className="ml-2 text-sm text-gray-600">I agree to the terms and conditions</label>
          </div>
          <button type="submit" className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">Sign Up</button>
        </form>
      </div>
    </div>
  );
}
