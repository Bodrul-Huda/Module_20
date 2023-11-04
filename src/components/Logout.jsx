"use client";

import { useRouter } from "next/navigation";

const Logout = () => {
  const route = useRouter();

  async function deleteCookie() {
    await fetch("/api/logout");
    route.replace("/");
  }

  return (
    <div>
      <button
        onClick={deleteCookie}
        type="submit"
        className="flex mx-auto text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg"
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
