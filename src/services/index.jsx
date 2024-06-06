import { ref, get, set } from "firebase/database";
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

export { getData, postData };
