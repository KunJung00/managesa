import { Link } from "react-router-dom";

function RegisterPage() {
  return (
    <>
      <div className="flex h-screen w-screen bg-teal-50">
        <div className="container mx-auto flex md:flex-row items-center justify-center">
          <div className="w-full">
            <div className="flex items-center justify-center mb-6">
              <div className="card-form">
                <div className="flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-blue-600 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <h1 className="text-3xl md:text-4xl font-bold text-blue-700">
                    ระบบจัดการเงินเดือน
                  </h1>
                </div>
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-800">
                    ยินดีต้อนรับกลับ
                  </h2>
                  <p className="text-gray-600">
                    เข้าสู่ระบบเพื่อจัดการการเงินของคุณ
                  </p>
                </div>

                <form id="login-form">
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      ชื่อผู้ใช้
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          ></path>
                        </svg>
                      </div>
                      <input
                        className="input-field pl-10 shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none"
                        id="fullname"
                        type="text"
                        placeholder="กรอกชื่อ-นามสกุล"
                      ></input>
                      <div
                        id="name-error"
                        className="text-red-500 text-xs mt-1 hidden"
                      >
                        กรุณากรอกชื่อ-นามสกุล
                      </div>
                    </div>
                  </div>
                  <div className="mb-6">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        type="checkbox"
                        className="checkbox-blue"
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-2 block text-sm text-gray-700"
                      >
                        จดจำฉันไว้ในระบบ
                      </label>
                    </div>
                  </div>
                  <div className="mb-6">
                    <button
                      id="login-btn"
                      type="button"
                      className="btn-primary w-full flex items-center justify-center"
                    >
                      ยืนยันการสมัคร
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </form>

                <div className="mt-8 text-center">
                  <p className="text-sm text-gray-600">
                    มีบัญชีอยู่แล้ว?{" "}
                    <Link
                      to="/login"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      เข้าสู่ระบบ
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default RegisterPage;
