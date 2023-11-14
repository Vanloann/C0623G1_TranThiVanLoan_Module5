// 1. Tạo một mảng mới chứa các số lớn hơn 5 từ mảng ban đầu (map).
let array = [2, 4, 6, 15, 19];
let newArr = array.map(function (array) {
    if (array > 5) {
        return array;
    }
});
console.log(newArr);

let newArr = array.filter((array) => array>5);
console.log(newArr);


//2. Sử dụng arrow function và reduce để tính tổng các phần tử trong mảng.
let array = [2, 4, 6, 15, 19];
let sum = array.reduce((sum, array) => {
    return sum + array;
});
console.log(sum);


//3. Kiểm tra 1 mảng có chứa số V hay không nếu có trả về V không thì trả về "không tìm thấy" (some).
const arr = [3, 10, 18, 20];
let x = 20;
let result = arr.some(num => num === x);
if (result) {
    console.log(x);
} else {
    console.log("cannot find");
}


//4. Kiểm tra 1 mảng tất cả các phần tử trong mảng đó có lớn hơn 0 hay không? (every).
let arr = [3, 10, 18, 20];
console.log(arr.every(function (arr) {
    return arr > 0;
}));

//5. Tìm phần tử đầu tiên trong mảng lớn hơn 3.
let arr = [3, 10, 18, 20];
console.log(arr.find(num => num > 3));


// 6. Sử dụng destructuring với rest parameter để trích xuất phần tử đầu tiên vào biến "first" và các phần tử còn lại vào một mảng mới "rest".
let arr = [3, 10, 18, 20];
let [first, ...rest] = arr;
console.log(first);
console.log(...rest);


// 7. Sử dụng destructuring để trích xuất các giá trị "name" và "age" từ một mảng chứa các đối tượng "person".
let person = {
    name: 'loan',
    age: 22
};
let {name, age} = person;
console.log(name, age);

// 8. Sử dụng Rest parameter và Spread operator để tạo một hàm nhận vào danh sách các số và trả về tổng của chúng.
function sum(...numbers) {
    let sum = 0;
    for (let num of numbers) sum += num;
    return sum;
}

let num = sum(3, 10, 18, 20);
console.log(num);


// 9. Sử dụng Rest parameter để nhận vào một danh sách tên và trả về chuỗi định dạng "Welcome, [tên1], [tên2], [tên3], ..." cho tất cả các tên.
function welcome(...name) {
   let arr = ["Welcome",...name];
    console.log(arr.join(", "));
}
let nameList = welcome('loan', 'flo');


// 10. Tạo một đối tượng "book" với thuộc tính "title", "author" và "pages" bằng cách sử dụng Enhanced object literals. Đối tượng "book" cũng có phương thức "displayInfo" để in ra thông tin về sách.

let book = {
    title: 'Anne of Green Gable',
    author: 'abc',
    pages: 200,
    displayInformation() {
    let {title, author, pages} = book;
    console.log(title, author, pages);
},
};

book.displayInformation();