# Index

[[toc]]

---

<br/>

# Summary

> [라즈베리파이 스마트 스피커 소스 코드 Github 레포지토리](https://github.com/orgs/RaspGPT/repositories)

◉ 라즈베리파이3 b+ / ChatGPT를 활용한 스마트 스피커 구현<br/>
◉ 오픈 소스(EfficientWord-Net)을 활용한 Hotword Detection 기능 구현

<iframe src="/assets/video/raspgpt.mp4?autoplay=0" height="500px"/>

# 시스템 구성도

<br/>

<figure>
<img src="/assets/img/rasp_gpt/flowchart.png" style="width: 800px"/>
<figcaption>System Architecture</figcaption>
</figure>

<br/>

▶ 라즈베리파이는 마이크 스트림이 계속 열려있으며 Hotword로 등록된 단어를 인식하면 Hotword 인식 완료 wav 파일 스피커에 송출하며 1.5초 이후 사용자의 입력을 받을 준비가 완료된다.<br/>
▶ 사용자는 5초 동안 질문을 말하고 해당 질문은 Google Cloud의 STT로 텍스트로 변환되며 백엔드 서버를 통해 ChatGPT의 OpenAPI를 호출한다.<br/>
▶ ChatGPT의 답변을 받으면 Google Cloud의 TTS로 wav 파일로 변환되어 라즈베리파이의 스피커로 송출된다.

<br/>

# 라즈베리파이 설정

## OS 및 네트워크 설정

▶ **Ubuntu 20.04** 이미지로 개발 진행<br/>
▶ OS 설치 후 네트워크 세팅 필요<br/><br/>

[**-라즈베리파이 OS 드라이버 설치 링크-**](https://www.raspberrypi.com/software/)<br/>
[**-Ubuntu 20.04 LTS 이미지 설치 링크-**](https://releases.ubuntu.com/focal/)

<br/>

## Python 버전 변경

> 라이브러리 설치를 위한 Python 버전 변경 필요

<br/>

〇 Python 설치를 위한 라이브러리 설치

```bash
sudo apt-get install -y build-essential tk-dev libncurses5-dev libncursesw5-dev libreadline6-dev libdb5.3-dev libgdbm-dev libsqlite3-dev libssl-dev libbz2-dev libexpat1-dev liblzma-dev zlib1g-dev libffi-dev tar wget vim
```

<br/>

〇 Python 3.8.16 설치

```bash
wget https://www.python.org/ftp/python/3.8.16/Python-3.8.16.tgz

sudo tar zxf Python-3.8.16.tgz
cd Python-3.8.16

sudo ./configure --enable-optimizations
sudo make -j 4
sudo make altinstall
```

<br/>

〇 alias 설정

```bash
echo "alias python=/usr/local/bin/python3.8" >> ~/.bashrc
source ~/.bashrc
```

<br/>

# Hotword Detaction

> Hotword Detection 기능은 Ant-Brain/EfficientWord-Net 오픈 소스를 커스터마이징하여 개발<br/> [Ant-Brain/EfficientWord-Net Github 링크](https://github.com/Ant-Brain/EfficientWord-Net)

## 라이브러리 설치

〇 pyaudio (depends on portaudio)

```bash
// pyaudio 설치 시 portaudio.h import 문제 발생
sudo apt-get install portaudio19-dev

// sudo apt-get install python3-pyaudio
sudo python3.8 -m pip install pyaudio
=> libportaudio2, python3-pyaudio
```

<br/>

〇 tflite (tensorflow lightweight binaries)

```bash
echo "deb https://packages.cloud.google.com/apt coral-edgetpu-stable main" | sudo tee /etc/apt/sources.list.d/coral-edgetpu.list
curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -
// sudo apt-get update
// sudo apt-get install python3-tflite-runtime

sudo python3.8 -m pip install tflite-runtime
```

<br/>

〇 librosa => OS 64bit 필수

```bash
sudo apt-get install libblas-dev python3-scipy

// install llvm 10.0.1 install => 아직 llvm 11을 지원하는 numba가 없음
wget github.com/llvm/llvm-project/releases/download/llvmorg-10.0.1/clang+llvm-10.0.1-aarch64-linux-gnu.tar.xz
tar -xvf clang*.xz
cd clang+llvmpip
sudo cp -R * /usr/local
export LLVM_CONFIG=/usr/local/bin/llvm-config

// error while loading shared libraries: libtinfo.so.5: cannot open shared object file: No such file or directory
// 위에 오류나면 설치해줘야함
sudo apt install libncurses5

// sudo pip install llvmlite==0.36.0
// sudo pip install numba==0.51.2
// sudo pip install librosa==0.8.1

sudo python3.8 -m pip install llvmlite==0.36.0
sudo python3.8 -m pip install numpy==1.20.0
sudo python3.8 -m pip install numba==0.51.2
sudo python3.8 -m pip install librosa==0.8.1
```

<br/>

〇 EfficientWord-Net

```bash
// sudo pip install EfficientWord-Net
sudo python3.8 -m pip install EfficientWord-Net

// 추가 라이브러리 설치
sudo python3.8 -m pip install typer rich
```

## Hotword 모델 생성

〇 Training

```bash
// resnet_50_arc
python3.8 -m eff_word_net.generate_reference --input-dir={data_dir} --output-dir={output_dir} --wakeword={hotword} --model-type=resnet_50_arc
// first_iteration_siamese
python3.8 -m eff_word_net.generate_reference --input-dir={data_dir} --output-dir={output_dir} --wakeword={hotword} --model-type=first_iteration_siamese
```

<br/>

-   Copy output model to another dir

```bash
sudo cp -r target_file target_dir
```

output_ref.json을 사용하기 위해서 json 파일의 경로를 알아야하기 때문에 특정 경로로 이동시켜주는 것이 편하다.
<br/>
<br/>

-   Custom Hotword 모델 테스트

```python
import os
from eff_word_net.streams import SimpleMicStream
from eff_word_net.engine import HotwordDetector, MultiHotwordDetector
from eff_word_net.audio_processing import Resnet50_Arc_loss

base_model = Resnet50_Arc_loss()

model_dir = {model_path}

# 테스트 결과 MultiHotwordDetector만이 제대로 Detection되기 때문에 2개의 모델 생성
gpt_hw = HotwordDetector(
	hotword = "gpt",
	model = base_model,
	reference_file = os.path.join(model_dir, "output.json"),
	threshold = 0.6,
	relaxation_time = 2
)

gpt_hw2 = HotwordDetector(
	hotword = "gpt_yaa",
	model = base_model,
	reference_file = os.path.join(model_dir, "output2.json"),
	threshold = 0.6,
	relaxation_time = 2
)
--

multi_hotword_detector = MultiHotwordDetector(
	[gpt_hw, gpt_hw2],
	model = base_model,
	continuous = True,
)

mic_stream = SimpleMicStream(window_length_secs=1.5, sliding_window_secs=0.75)
mic_stream.start_stream()

print("Say GPT or GPT yaa")

while True:
	frame = mic_stream.getFrame()
	result = multi_hotword_detector.findBestMatch(frame)

	if None not in result:
		print(result[0],f",Confidence {result[1]:0.4f}")
	else:
		print("Any Detection Find")
```

-   EfficientWord-Net 소스 코드 수정

<img src="/assets/img/rasp_gpt/modify_code.png"/>

<br/>
<br/>

▶ EfficientWord-Net 코드 내부에서 특정 단어를 인식하면 마이크 스트림을 닫아버렸다.<br/>
▶ 개발하려는 스마트 스피커는 출시되어 있는 스마트 스피커와 동일하게 Input을 계속 받도록 설계하기 위해서 해당 코드를 삭제하였다.

# STT/TTS

> STT/TTS 기능은 Google Cloud의 기능을 사용하였다.

## STT/TTS 설정

〇 Library 설치

```bash
// tts
sudo python3.8 -m pip install google-cloud-texttospeech

export GOOGLE_APPLICATION_CREDENTIALS="KEY_PATH”

//stt
sudo python3.8 -m pip install SpeechRecognition
sudo apt-get install flac
```

## STT

```python
import io
import os

from google.cloud import speech

credential_path = ""
os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = credential_path

def stt():
    client = speech.SpeechClient()

    wav_path = ""

    with io.open(wav_path, 'rb') as audio_file:
        content = audio_file.read()
        audio = speech.RecognitionAudio(content=content)

    config = speech.RecognitionConfig(
        encoding = speech.RecognitionConfig.AudioEncoding.LINEAR16,
        sample_rate_hertz = 16000,
        language_code = "ko-KR",
        audio_channel_count = 1
    )

    response = client.recognize(config=config, audio=audio)

    stt_result = ""

    for result in response.results:
        stt_result += result.alternatives[0].transcript

    return stt_result
```

## TTS

```python
from google.cloud import texttospeech
import requests

import os

request_url = ""
response_path = ""

def tts(data):
    byte_data = data.encode("utf-8")

    response = requests.post(request_url, data=byte_data)

    client = texttospeech.TextToSpeechClient()

    synthesis_input = texttospeech.SynthesisInput(text=response.text)

    voice = texttospeech.VoiceSelectionParams(
        language_code = "ko-KR",
        ssml_gender = texttospeech.SsmlVoiceGender.FEMALE
    )

    audio_config = texttospeech.AudioConfig(
        audio_encoding = texttospeech.AudioEncoding.MP3
    )

    response = client.synthesize_speech(
        input = synthesis_input,
        voice = voice,
        audio_config = audio_config
    )

    with open(response_path, "wb") as out:
        out.write(response.audio_content)

    os.system('aplay '+response_path)
```

<br/>
<br/>

<style>
blockquote {
    font-size: 17px !important;
    border-left: 0.25rem solid #529b2e !important;
}

figure {
    text-align: center;
    font-style: italic;
    font-weight: bold;
    margin-bottom: 1rem;
}
</style>
