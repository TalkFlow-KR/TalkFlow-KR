let flag = 0;

function recordAudio(filename) {
    return new Promise((resolve, reject) => {
      const micInstance = mic({
        rate: "16000",
        channels: "1",
        fileType: "wav",
      });
  
      const micInputStream = micInstance.getAudioStream();
      const output = fs.createWriteStream(filename);
      const writable = new Readable().wrap(micInputStream);
  
      writable.pipe(output);
      console.log("녹음을 시작합니다..");
      micInstance.start();
  
      // 녹음이 언제 종료되는지 알려준 뒤, 녹음을 종료함.
      async function waitForFlag() {
        while (flag === 0) {
          await new Promise((resolve) => setTimeout(resolve, 1000)); // while 루프 내에서 플래그 변수를 다시 확인하기 전에 1초의 지연을 도입하는 데 사용됩니다. 이렇게 하면 루프에서 과도한 CPU 사용을 방지하고 프로그램이 플래그가 변경되기를 기다리는 동안 다른 작업을 수행할 수 있습니다
          recFlag = 1;
          console.log("녹음 중 입니다. : flag =", flag);
        }
  
        console.log("녹음을 종료합니다. : flag =", flag);
        recFlag = 0;
        micInstance.stop();
  
        deleteRecordedAudio(filename); // 녹음이 종료되면 생성된 파일을 삭제함
        resolve();
      }
      waitForFlag();
  
      micInputStream.on("error", (err) => {
        reject(err);
      });
    });
  }
  
  // Transcribe Audio
  async function transcribeAudio(filename) {
    const transcript = await openai.createTranscription(
      fs.createReadStream(filename), //번역할 파일
      "whisper-1", //사용할 모델
      undefined, // the prompt to use for transcription
      "json", // the format of the transcription
      1, // temperture
      "en" //language en, es, fr, it, de, ja, ko, nl, pl, pt , ru ,zh-cn, zh-tw
    );
    return transcript.data.text;
  }
  
  function deleteRecordedAudio(filename) {
    fs.unlink(filename, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`성공적으로 파일을 삭제했습니다. ${filename}`);
      }
    });
  }
