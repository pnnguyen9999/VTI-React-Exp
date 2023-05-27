import React from "react";
import "../styles/style.scss";

export function Question1() {
  const heading = React.createElement("h1", null, "Hello World !");
  const paragraph = React.createElement("p", null, "My first paragraph. (1)");

  return (
    <div>
      {heading}
      {paragraph}
    </div>
  );
}

export function Question2a() {
  // normal function
  /* function handleClick() {
       console.log("Hello");
  } */

  // arrow function
  const handleClick = () => {
    console.log("Hello");
  };
  return (
    <div>
      <h1 onClick={handleClick}>Hello World !</h1>
      <p>My first paragraph. (2a)</p>
    </div>
  );
}

export function Question2b() {
  return (
    <div>
      <h2>Danh sách lớp học</h2>
      <ol>
        <li>Nguyễn Ngọc Duy</li>
        <li>Tống Quang Anh</li>
        <li>Đinh Thu Loan</li>
        <li>Hà Văn Tiến</li>
        <li>Nguyễn Hải Đăng</li>
      </ol>
      <h2>Danh sách thức ăn</h2>
      <ol>
        <li>
          Cơm trưa
          <ul>
            <li>Cơm chiên hải sản</li>
            <li>Cơm sườn non nấu cam</li>
            <li>Cơm canh chua cá lóc</li>
          </ul>
        </li>
        <li>
          Tráng miệng trái cây
          <ul>
            <li>Nho tươi</li>
            <li>Chuối</li>
            <li>Mận</li>
          </ul>
        </li>
      </ol>
    </div>
  );
}

/* 
FF7B63
69B4FF
F29FF2
*/
export function Question3() {
  const HelloWorld = (props) => {
    return (
      <>
        <div style={{ border: `1px solid #${props.color}` }}>Hello World</div>
        <br />
      </>
    );
  };
  return (
    <div>
      <HelloWorld color="FF7B63" />
      <HelloWorld color="69B4FF" />
      <HelloWorld color="F29FF2" />
    </div>
  );
}

export function Question3WithClassName() {
  return (
    <div>
      <div className="border-orange">Hello World</div>
      <br />
      <div className="border-blue">Hello World</div>
      <br />
      <div className="border-pink">Hello World</div>
      <br />
    </div>
  );
}

export function Question3b() {
  return (
    <div className="card">
      <h3>Học lập trình web có đơn giản không ?</h3>
      <img className="card-img" src="/img/img-1.png" />
      <h4 className="card-title">Đây là tiêu đề của bài viết</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <div className="card-btn-wrapper">
        <button className="card-btn">Đọc thêm</button>
      </div>
      <br />
    </div>
  );
}

export function Question3c() {
  return (
    <div className="login-form">
      <div className="login-form-title">Login Form</div>
      <input
        type="text"
        className="login-form-input"
        placeholder="Email or Username"
      />
      <input
        type="password"
        className="login-form-input"
        placeholder="Password"
      />
      <button className="login-form-login-btn">Login</button>
      <div className="login-form-method-text">Or login with</div>
      <div className="login-form-method">
        <button className="login-form-method-input facebook">
          <span className="fa fa-facebook-official"></span>
          &nbsp; Facebook
        </button>
        <button className=" login-form-method-input google">
          <span className="fa fa-google"></span>
          &nbsp; Google
        </button>
      </div>
      <div className="login-form-footer">
        Not a member? <span className="signup-now-text">Signup now</span>
      </div>
    </div>
  );
}

export function Question4a() {
  //   const firstName = "Nguyen Van";
  //   const lastName = "A";

  const [firstName, lastName] = ["Nguyen Van", "A"];

  function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
  }

  return (
    <div>
      <div>fName: {firstName}</div>
      <div>lName: {lastName}</div>
      <div>fullName: {fullName(firstName, lastName)}</div>
    </div>
  );
}

export function Question4c() {
  class User {
    avatarUrl;
    title;
    content;

    constructor(_avatarUrl, _title, _content) {
      this.avatarUrl = _avatarUrl;
      this.title = _title;
      this.content = _content;
    }
  }

  const joBloggs = new User(
    "/img/avatar-1.png",
    "Jo Bloggs",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
  );
  return (
    <div className="user-card">
      <div className="user-card-avatar">
        <img src={joBloggs.avatarUrl} />
      </div>
      <div className="user-card-info">
        <div className="user-card-info-title">{joBloggs.title}</div>
        <div className="user-card-info-content">{joBloggs.content}</div>
        <div className="user-card-info-more">more about me</div>
      </div>
    </div>
  );
}
