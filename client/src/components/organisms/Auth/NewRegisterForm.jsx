import React from "react";
import RegisterItem from "../../m/RegisterItem";

const registerData = {
  email: {
    id: "email",
    title: "사용하실 이메일은 어떻게 되시나요 ?",
    label: "",
    type: "text",
  },
  password: {
    id: "password",
    title: "사용하실 비밀번호를 적어주세요. ",
    label: "",
    type: "password",
  },
  userName: {
    id: "name",
    title: "성함이 어떻게 되시나요 ?",
    type: "text",
    label: "",
  },
  gender: {
    id: "gender",
    title: "성별을 알려주세요 !",
    type: "radio",
    male: { value: "male", label: "male" },
    female: { value: "female", label: "female" },
  },
  phone: {
    id: "phone",
    title: "모바일 번호를 입력해주세요.",
    type: "text",
    label: "",
  },
};

const { email, password, userName, gender, phone } = registerData;
const NewRegisterForm = () => {
  return (
    <>
      {/* userEmail*/}
      <RegisterItem data={email} />
      {/* userPassword*/}
      <RegisterItem data={password} />
      {/* userGender*/}
      <RegisterItem data={userName} />
      {/* userName*/}
      <RegisterItem data={gender} />
      {/* userPhone*/}
      <div>
        <RegisterItem data={phone} />
        <button>회원가입 하기</button>
      </div>
    </>
  );
};

export default NewRegisterForm;
