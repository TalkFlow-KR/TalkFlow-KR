# TalkFlow-KR

## Installation
#1. Source
```c
git clone https://github.com/TalkFlow-KR/TalkFlow-KR.git
```
#2. SOX 다운로드 하기.
```c 
SoX (Sound eXchange) is a command-line tool for processing audio files on Linux and other Unix-like operating systems. It can be used to convert audio files between different formats, apply various digital signal processing (DSP) effects, and perform other operations such as mixing and concatenation.
```
- mac OS
```c
brew install sox
```
- linux
```c
sudo apt-get install sox
```
- window 


1. 아래의 사이트에 들어가서 가장 최신 버전의 파일을 다운로드 받는다.
```c
https://sourceforge.net/projects/sox/files/sox/
```

2. 다운로드 한 sox 파일의 위치를 파악한다. 본인의 경우 아래의 경로에 다운로드 되어있음을 확인했다. 이 경로는 이 다음의 환경 변수 등록에 사용된다.
```c
C:\Program Files (x86)\sox-14-4-2
```

3. 윈도우를 열고 `시스템 환경 변수 편집` 이라고 검색한뒤 열어준다.
![img1 daumcdn](https://github.com/TalkFlow-KR/TalkFlow-KR/assets/93633207/e30442b6-7f2b-4e6e-8214-2da38743e935)

4. 시스템 속성 창이 떴다면 `환경변수` 버튼을 눌러준다.
![img1 daumcdn](https://github.com/TalkFlow-KR/TalkFlow-KR/assets/93633207/390bf91f-0c8c-40c9-b09f-f7ff5f3ff113)


5. 본인의 컴퓨터 이름에 사용자 변수(U)와 그냥 시스템 변수(S)가 있다. 우선 사용자 변수(U) 칸에서 `Path` 변수를 찾고 더 블클릭 해준다.

![img1 daumcdn](https://github.com/TalkFlow-KR/TalkFlow-KR/assets/93633207/36a63282-333d-403c-9f4c-c8e002a53a23)



6. `환경 변수 편집` 창이 뜨면, `새로 만들기`를 클릭한 후, SOX가 다운로드된 경로를 `복사` 해서 `붙여넣기`해준다. 필자의 경우 경로는 C:\Program Files(x86)\sox-14-4-2 였다. 그리고 확인 버튼을 누른다.

![img1 daumcdn](https://github.com/TalkFlow-KR/TalkFlow-KR/assets/93633207/1150e0df-3bb3-46e3-9ac2-4744d4bbbe30)


7. 동일한 방법으로 `시스템 변수(S)`의 `Path` 설정을 한다.
![img1 daumcdn](https://github.com/TalkFlow-KR/TalkFlow-KR/assets/93633207/5cb56271-74fb-4621-a499-9b662fd54fdf)



8. 이후에 mic 모듈을 사용할 시 `spwan ` 관련 에러 메세지를 발견한다면, 위의 설정경로가 제대로 되지 않은것이다. 
