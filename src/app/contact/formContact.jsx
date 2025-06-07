"use client";

export function FormContact() {
  const onsubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    console.log(data);

    const send = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());

    if (send) {
      alert("Send successfully");
    } else {
      alert("Send failed");
      return;
    }

    e.target.reset();
  };

  return (
    <form onSubmit={(e) => onsubmit(e)} className="flex flex-col gap-2">
      <div className="flex gap-2 md:flex-row flex-col">
        <input
          className="border border-gray-500 p-2 rounded-md"
          type="text"
          placeholder="Họ tên"
          name="name"
          required
        />
        <input
          className="border border-gray-500 p-2 rounded-md"
          type="email"
          placeholder="Email"
          name="email"
          required
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
          title="Vui lòng nhập email hợp lệ (ví dụ: example@mail.com)"
        />
      </div>
      <input
        className="border border-gray-500 p-2 rounded-md"
        type="text"
        placeholder="Tiêu đề"
        name="subject"
        required
      />
      <textarea
        className="border border-gray-500 p-2 rounded-md h-40"
        placeholder="Nội dung"
        name="message"
        required
      />
      <button
        className="w-32 text-md font-normal text-[--color-primary] py-3 px-6 border border-[--color-primary] rounded-md flex items-center justify-center hover:bg-[--color-primary] hover:text-white transition-all duration-300 ease-in-out"
        type="submit"
      >
        Gửi
      </button>
    </form>
  );
}
