import MyOrderPage from "./MyOrderPage";

const Profile = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div className="container mx-auto px-3 lg:px-0">
            <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/4 bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-2">Mohd Kayum</h2>
                    <p className="text-sm text-gray-600 mb-4">kayum.cool19@gmail.com</p>
                    <button className="w-full cursor-pointer text-sm py-2 bg-red-500 text-white px-4 rounded-md hover:bg-red-600">
                        Logout
                    </button>
                </div>
                <div className="w-full lg:w-3/4 bg-white p-4 rounded-lg shadow-md">
                    <MyOrderPage />
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Profile;