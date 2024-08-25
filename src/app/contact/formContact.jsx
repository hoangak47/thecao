"use client";

export function FormContact() {
  const onsubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    // console.log(Object.fromEntries(data));
  };
  return (
    <form onSubmit={(e) => onsubmit(e)} className="flex flex-col gap-2">
      <div className="flex gap-2 md:flex-row flex-col">
        <input
          className="border border-gray-500 p-2 rounded-md"
          type="text"
          placeholder="Họ tên"
          name="name"
        />
        <input
          className="border border-gray-500 p-2 rounded-md"
          type="text"
          placeholder="Email"
          name="email"
        />
      </div>
      <input
        className="border border-gray-500 p-2 rounded-md"
        type="text"
        placeholder="Tiêu đề"
        name="title"
      />
      <textarea
        className="border border-gray-500 p-2 rounded-md h-40"
        placeholder="Nội dung"
        name="content"
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
