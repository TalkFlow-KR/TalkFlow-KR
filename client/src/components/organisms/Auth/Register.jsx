// import React, { useState } from "react";
// import RegisterItem from "../../m/RegisterItem";
// import styled from "styled-components";
// import axios from "axios";
// import {
//   AiOutlineCheck,
//   AiOutlineQuestion,
//   AiOutlineClose,
// } from "react-icons/ai";
// import Lottie from "../../atoms/LottieComponent";
// import animationData from "../../../assets/1401-eye01.json";
//
// const registerData = {
//   email: {
//     id: "email",
//     title: "사용하실 이메일은 어떻게 되시나요 ?",
//     label: "",
//     type: "text",
//   },
//   password: {
//     id: "password",
//     title: "사용하실 비밀번호를 적어주세요. ",
//     label: "",
//     type: "password",
//   },
//   userName: {
//     id: "name",
//     title: "성함이 어떻게 되시나요 ?",
//     type: "text",
//     label: "",
//   },
//   gender: {
//     id: "gender",
//     title: "성별을 알려주세요 !",
//     type: "radio",
//     options: [
//       { value: "male", label: "male" },
//       { value: "female", label: "female" },
//     ],
//   },
//   phone: {
//     id: "phone",
//     title: "모바일 번호를 입력해주세요.",
//     type: "text",
//     label: "",
//   },
// };
// const { email, password, userName, gender, phone } = registerData;
//
// const Wrapper = styled.section`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: start;
//   align-items: center;
//
//   & article {
//     display: flex;
//   }
// `;
// const ItemBox = styled.article`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   display: flex;
//   background-color: #fff;
//   border-radius: 1.2rem;
//   flex-direction: column;
//   padding: 4rem;
//   & input {
//     display: block;
//   }
// `;
// const ButtonBox = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: flex-end;
//   & button {
//     padding: 0.4rem;
//     margin: 0.4rem;
//   }
// `;
// const CheckIdBtn = styled.button`
//   border-radius: 0.8rem;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: ${({ emailValue, theme }) =>
//     emailValue ? theme.color.primary100 : theme.color.bg300};
// `;
//
// const NextBtn = styled.button`
//   width: 80%;
//   border-radius: 0.4rem;
//   height: 4rem;
//   background-color: ${({ isOkay, theme }) =>
//     isOkay ? theme.color.primary100 : theme.color.bg300};
// `;
//
// const IndicatorBox = styled.article`
//   display: flex;
//   justify-content: center;
//   margin: 2rem;
// `;
// const IndicatorItem = styled.button`
//   background-color: ${({ theme }) => theme.color.bg300};
// `;
// const ShowPasswordBtn = styled.button`
//   background-color: #fff;
// `;
//
// const Register = () => {
//   const [checkEmoji, setCheckEmoji] = useState("s");
//   const [isLoading, setIsLoading] = useState(false);
//   const [isValid, setIsValid] = useState(-1);
//   const [position, setPosition] = useState(1);
//   // email state
//   const [emailValue, setEmailValue] = useState("smurf@kakao.com");
//   // 이메일 유효성
//   const [isValidEmail, setIsValidEmail] = useState(false);
//   // password state
//   const [passwordValue, setPasswordValue] = useState("test");
//   const [showPassword, setShowPassword] = useState(false);
//   // userName state
//   const [userNameValue, setUserNameValue] = useState("smurf");
//   // gender state
//   const [genderValue, setGenderValue] = useState("male");
//   // phone state
//   const [phoneValue, setPhoneValue] = useState("0100000000");
//   // 폰 유효성
//   const [isValidPhone, setIsValidPhone] = useState(false);
//   const [isDisable, setIsDisable] = useState(false);
//   const [registerText, setRegisterText] = useState("가입하기");
//   // 회원가입 성공/실패
//   const [isSuccess, setIsSuccess] = useState(false);
//
//   const emailRageX = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
//   const phoneRageX = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
//
//   const onShow = () => {
//     setShowPassword(!showPassword);
//   };
//   const onChange = (value, setState) => {
//     // value = e.target.value;
//     if (valid) {
//       setd(valid.test(value));
//     }
//     setState(value);
//   };
//   // const [getEmail, setEmail] = useState() // 받아온 이메일
//   const checkEmail = async () => {
//     console.log("email: ", emailValue);
//     await axios
//       .post("http://localhost:8000/signup/checkemail", { email: emailValue })
//       .then((res) => {
//         console.log(res);
//         setIsValidEmail(true);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
//   return (
//     <>
//       {/* userEmail*/}
//       <Wrapper>
//         <ItemBox>
//           <RegisterItem
//             data={email}
//             onChange={(e) =>
//               onChange(e, setEmailValue, emailRageX, setIsValidEmail)
//             }
//             value={emailValue}
//             required={true}
//             onKeyPress={(e) => {
//               if (e.key === " ") e.preventDefault();
//             }}
//           />
//           <ButtonBox>
//             <CheckIdBtn onClick={checkEmail} emailValue={emailValue}>
//               {checkEmoji}
//             </CheckIdBtn>
//             <NextBtn isOkay={isValidEmail}>
//               {isValidEmail ? (
//                 <p>Good.</p>
//               ) : (
//                 <p>please enter a valid email. Bad</p>
//               )}
//             </NextBtn>
//           </ButtonBox>
//           <IndicatorBox>
//             <IndicatorItem>1</IndicatorItem>
//             <IndicatorItem>2</IndicatorItem>
//             <IndicatorItem>3</IndicatorItem>
//             <IndicatorItem>4</IndicatorItem>
//             <IndicatorItem>5</IndicatorItem>
//           </IndicatorBox>
//         </ItemBox>
//         <ItemBox>
//           {/* userPassword*/}
//           <div>
//             <RegisterItem
//               data={password}
//               onChange={(e) => onChange(e, setPasswordValue)}
//               value={passwordValue}
//               required={true}
//               onKeyPress={(e) => {
//                 if (e.key === " ") e.preventDefault();
//               }}
//             />
//             <button>
//               <ShowPasswordBtn onClick={onShow}>
//                 <Lottie
//                   onMouseEnter={() => setIsHover(true)}
//                   onMouseLeave={() => setIsHover(false)}
//                   animationData={animationData}
//                   isPaused={!isHover}
//                   style={{ width: "2rem", height: "2rem" }}
//                   speed={0.8}
//                 />
//               </ShowPasswordBtn>
//             </button>
//             <NextBtn
//               isOkay={
//                 !(passwordValue.length >= 8 || passwordValue.length === 0)
//               }>
//               {!isOkay ? "패스워드는 8글자 미만입니다." : "다음으로"}
//             </NextBtn>
//           </div>
//         </ItemBox>
//         {/*/!* userGender*!/*/}
//         {/*<div>*/}
//         {/*  <RegisterItem data={userName} />*/}
//         {/*  <button>다음으로</button>*/}
//         {/*</div>*/}
//         {/*<ItemBox>*/}
//         {/*  /!* userName*!/*/}
//         {/*  <div>*/}
//         {/*    <RegisterItem data={gender} />*/}
//         {/*    <button>다음으로</button>*/}
//         {/*  </div>*/}
//         {/*</ItemBox>*/}
//         {/*<ItemBox>*/}
//         {/*  /!* userPhone*!/*/}
//         {/*  <div>*/}
//         {/*    <RegisterItem data={phone} />*/}
//         {/*    <button>회원가입 하기</button>*/}
//         {/*  </div>*/}
//         {/*</ItemBox>*/}
//       </Wrapper>
//     </>
//   );
// };
//
// export default Register;
