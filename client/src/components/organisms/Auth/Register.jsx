import React, { useState } from "react";
import RegisterItem from "../../m/RegisterItem";
import styled from "styled-components";
import axios from "axios";

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
    options: [
      { value: "male", label: "male" },
      { value: "female", label: "female" },
    ],
  },
  phone: {
    id: "phone",
    title: "모바일 번호를 입력해주세요.",
    type: "text",
    label: "",
  },
};
const { email, password, userName, gender, phone } = registerData;

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: center;

  & article {
    display: flex;
  }
`;
const ItemBox = styled.article`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  background-color: tomato;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & input {
    display: block;
  }
`;
// const [getEmail, setEmail] = useState() // 받아온 이메일
const checkEmail = async ()=>{
  console.log('email: ',registerData.email)
  // await axios.post('http://localhost:8000/signup/checkemail',{email: getEmail})
  // .then((res)=>{
  //   console.log(res)
  // })
  // .catch((err)=>{
  //   console.log(err)
  // })
}

const Register = () => {
  return (
    <>
      {/* userEmail*/}
      <Wrapper>
        <ItemBox>
          <RegisterItem data={email} />
          <button onClick={checkEmail}>아이디 중복 버튼 확인</button>
          <button>다음으로</button>
          <aritcle>
            <button>test</button>
            <button>test</button>
            <button>test</button>
            <button>test</button>
            <button>test</button>
          </aritcle>
        </ItemBox>
        {/*<ItemBox>*/}
        {/*  /!* userPassword*!/*/}
        {/*  <div>*/}
        {/*    <RegisterItem data={password} />*/}
        {/*    <button>비밀번호 보이기</button>*/}
        {/*    <button>다음으로</button>*/}
        {/*  </div>*/}
        {/*</ItemBox>*/}
        {/*/!* userGender*!/*/}
        {/*<div>*/}
        {/*  <RegisterItem data={userName} />*/}
        {/*  <button>다음으로</button>*/}
        {/*</div>*/}
        {/*<ItemBox>*/}
        {/*  /!* userName*!/*/}
        {/*  <div>*/}
        {/*    <RegisterItem data={gender} />*/}
        {/*    <button>다음으로</button>*/}
        {/*  </div>*/}
        {/*</ItemBox>*/}
        {/*<ItemBox>*/}
        {/*  /!* userPhone*!/*/}
        {/*  <div>*/}
        {/*    <RegisterItem data={phone} />*/}
        {/*    <button>회원가입 하기</button>*/}
        {/*  </div>*/}
        {/*</ItemBox>*/}
      </Wrapper>
    </>
  );
};

export default Register;
