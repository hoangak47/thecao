import { ref, get, set, update, remove } from "firebase/database";
import db from "./firebase";

async function getData(root) {
  const ref_ = ref(db, root);
  const snapshot = await get(ref_);
  if (snapshot.exists()) {
    return snapshot.val();
  } else {
    return "No data available";
  }
}

async function postData(root, data) {
  const ref_ = ref(db, root);
  await set(ref_, data);
}

async function addData(root, data) {
  const ref_ = ref(db, root);
  await set(ref_, data); // Ghi đè nếu đường dẫn đã tồn tại, thêm mới nếu không
}

async function updateData(root, idToUpdate, newData) {
  const ref_ = ref(db, root);

  const snapshot = await get(ref_);
  if (snapshot.exists()) {
    const data = snapshot.val();

    for (const key in data) {
      if (data[key].id === idToUpdate) {
        // Cập nhật dữ liệu của mục với id tương ứng
        await set(ref(db, `${root}/${key}`), { ...data[key], ...newData });
        console.log(`Cập nhật thành công mục với id ${idToUpdate}`);
        return;
      }
    }
    console.log(`Không tìm thấy mục với id ${idToUpdate}`);
  } else {
    console.log("Không có dữ liệu.");
  }
}

async function deleteData(root, idToDelete) {
  const ref_ = ref(db, root);

  const snapshot = await get(ref_);
  if (snapshot.exists()) {
    const data = snapshot.val();

    for (const key in data) {
      if (data[key].id === idToDelete) {
        await remove(ref(db, `${root}/${key}`));
        console.log(`Xóa thành công mục với id ${idToDelete}`);
        return;
      }
    }
    console.log(`Không tìm thấy mục với id ${idToDelete}`);
  } else {
    console.log("Không có dữ liệu.");
  }
}

const saveToSessionStorage = (key, value) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

const getFromSessionStorage = (key) => {
  const data = sessionStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

export {
  getData,
  postData,
  updateData,
  addData,
  deleteData,
  saveToSessionStorage,
  getFromSessionStorage,
};
