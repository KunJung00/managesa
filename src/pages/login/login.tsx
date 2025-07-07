import { Link } from "react-router-dom";
import "./login.css";

function LoginPage() {
  return (
    <div className="flex h-screen w-screen bg-teal-50">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-6">
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
            <p className="text-lg text-gray-600 mb-8">
              จัดการรายรับรายจ่ายของคุณอย่างมีประสิทธิภาพ ติดตามค่าใช้จ่าย
              และวางแผนการเงินได้อย่างชาญฉลาด
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="card text-center">
                <div className="icon-blue mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  ติดตามค่าใช้จ่าย
                </h3>
                <p className="text-gray-600">
                  บันทึกและติดตามรายรับรายจ่ายทั้งหมดของคุณในที่เดียว
                </p>
              </div>

              <div className="card text-center">
                <div className="icon-green mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  บรรลุเป้าหมาย
                </h3>
                <p className="text-gray-600">
                  ตั้งเป้าหมายการออมและติดตามความคืบหน้าของคุณ
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                ></path>
              </svg>
              <span>ข้อมูลของคุณปลอดภัยและเป็นส่วนตัวเสมอ</span>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full md:w-1/2 max-w-md">
          <div className="card-form">
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
                  <input
                    className="input-field pl-1"
                    id="name"
                    type="text"
                    placeholder="your name"
                  />
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    ></path>
                  </svg>
                  เข้าสู่ระบบ
                </button>
              </div>
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">
                ยังไม่มีบัญชี?{" "}
                <Link
                  to="/register"
                  className="text-blue-600 hover:text-blue-800"
                >
                  สมัครสมาชิก
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
