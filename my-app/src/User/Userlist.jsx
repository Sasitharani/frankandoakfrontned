import React from 'react';

export default function Userlist({ userInfo }) {
  const { data: userData, setData: setUserData } = userInfo;
  console.log('UserList:', userInfo);
  console.log('UserData:', userData);

  function deleteUser(IndexToBeDeleted){
        console.log(IndexToBeDeleted);
        let afterDeleteData=userData.filter((v,i)=>i!==IndexToBeDeleted)
        console.log(afterDeleteData);
        setUserData(afterDeleteData)
    
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 shadow-2xl">
      <div className="w-full max-w-4xl p-8 bg-white rounded shadow-md">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sr No</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Password</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delete</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {
                userData.length === 0 ? <div className="text-center font-semibold text-[40px] text-red-500">User not found</div> : 
            
            userData.map((user, index) => (
              <tr key={index}>
 
                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.uname}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.uemail}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.uphone}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.password}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button onClick = {()=>deleteUser(index)} className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
