const ADMIN_USER = "admin";
const ADMIN_PASS = "12345";

let attempts = 0;
let isAuthenticated = false;

while (attempts < 3) {
  let user = prompt("Nhập tài khoản:");
  let pass = prompt("Nhập mật khẩu:");

  if (user === ADMIN_USER && pass === ADMIN_PASS) {
    alert("Đăng nhập thành công!");
    isAuthenticated = true;
    break;
  } else {
    attempts++;
    let remaining = 3 - attempts;

    if (user !== ADMIN_USER && pass !== ADMIN_PASS) {
      alert(`Sai cả tài khoản và mật khẩu! Còn ${remaining} lần thử.`);
    } else if (user !== ADMIN_USER) {
      alert(`Sai tài khoản! Còn ${remaining} lần thử.`);
    } else {
      alert(`Sai mật khẩu! Còn ${remaining} lần thử.`);
    }
  }
}

if (!isAuthenticated) {
  alert("Tài khoản đã bị khóa!");
} else {
  let libraries = ["Toán", "Văn", "Anh"];
  let choice;

  do {
    let menu = "--- HỆ THỐNG QUẢN TRỊ THƯ VIỆN ---\n";
    menu += "1. Nhập thêm lô sách mới\n";
    menu += "2. Hiển thị danh sách sách\n";
    menu += "3. Tìm kiếm sách\n";
    menu += "4. Cập nhật tên sách\n";
    menu += "5. Đảo ngược thứ tự kệ sách\n";
    menu += "6. Nhập kho từ nguồn khác\n";
    menu += "7. Thoát chương trình\n";
    menu += "Vui lòng chọn (1-7):";

    choice = Number(prompt(menu));

    switch (choice) {
      case 1: {
        let input = prompt("Nhập danh sách tên sách (cách nhau bởi dấu phẩy):");
        if (input) {
          let newBooks = input.split(",");
          let countAdded = 0;

          for (let book of newBooks) {
            let bookName = book.trim();
            if (bookName !== "") {
              libraries.push(bookName);
              countAdded++;
            }
          }
          alert(`Đã thêm thành công ${countAdded} cuốn sách.`);
        }
        break;
      }

      case 2: {
        console.clear();
        console.log("--- DANH SÁCH SÁCH HIỆN CÓ ---");

        if (libraries.length === 0) {
          console.log("Thư viện hiện đang trống.");
        } else {
          let stt = 1;
          for (let book of libraries) {
            console.log(`${stt}. ${book}`);
            stt++;
          }
        }
        alert("Danh sách đã được in ra Console (F12).");
        break;
      }

      case 3: {
        let searchName = prompt("Nhập tên sách cần tìm:");
        if (libraries.includes(searchName)) {
          let index = libraries.indexOf(searchName);
          alert(`Sách "${searchName}" được tìm thấy tại vị trí ${index}`);
        } else {
          alert("Không tìm thấy sách.");
        }
        break;
      }

      case 4: {
        let oldName = prompt("Nhập tên sách cần sửa:");
        let index = libraries.indexOf(oldName);

        if (index !== -1) {
          let newName = prompt(`Nhập tên mới cho sách "${oldName}":`);
          if (newName) {
            libraries[index] = newName;
            alert("Cập nhật tên sách thành công!");
          }
        } else {
          alert("Sách không tồn tại trong kho.");
        }
        break;
      }

      case 5: {
        libraries.reverse();
        console.clear();
        console.log("--- KỆ SÁCH SAU KHI ĐẢO NGƯỢC ---");

        for (let index in libraries) {
          console.log(`Index ${index}: ${libraries[index]}`);
        }
        alert("Đã đảo ngược thứ tự kệ sách. Xem Console (F12).");
        break;
      }

      case 6: {
        let externalLibrary = ["Sách Kỹ Năng", "Truyện Tranh"];
        libraries = libraries.concat(externalLibrary);
        alert("Đã gộp kho sách thành công.");
        break;
      }

      case 7:
        alert("Hẹn gặp lại!");
        break;

      default:
        alert("Lựa chọn không hợp lệ!");
    }
  } while (choice !== 7);
}