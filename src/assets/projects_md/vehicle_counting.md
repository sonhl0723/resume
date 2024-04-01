# Index

[[toc]]

---

<br/>

# Summary

-   컴퓨터 비전 분야의 차량 계수 모델인 FCN-rLSTM 모델에 기반하여 시간 역학적 정보를 더 효율적으로 참조할 수 있는 FCN-BLA 모델 고안
-   국가 교통 정보 센터(ITS)의 OpenAPI를 통해 실시간 국내 고속도로 CCTV 영상을 수집 후 FCN-BLA 모델을 통해 교통량 분석
-   실시간 국내 고속도로 교통량 분석 정보를 사용자에게 제공하기 위한 웹, 앱 애플리케이션 개발

<br/>
<br/>

# FCN-BLA

## FCN-rLSTM란

<figure>
<img src="/assets/img/vehicle_counting/FCN-rLSTM.png" style="width: 450px; height: 250px"/>
<figcaption>FCN-rLSTM</figcaption>
</figure>

&nbsp;&nbsp;FCN 은 기존 객체 검출이나 동작 감지 방식에 서 차량 자체를 인식하는 알고리즘과 다르게 객체 의 밀집도를 토대로 차량의 계수를 예측한다.<br/>
밀집도는 후처리 과정에서 입력 데이터와 같은 사이즈로 조정한 뒤 예측되기 때문에 픽셀 수준의 측정 정보를 포함하고 있어 기존 방식들에 비해 낮은 화질이나 프레임률에서 더욱 정확한 예측이 가능하다.
<br/><br/>

## FCN-rLSTM 모델의 한계

<figure>
<img src="/assets/img/vehicle_counting/FCN-rLSTM_density.png" style="width: 450px; height: 250px"/>
<figcaption>FCN-rLSTM Density Map</figcaption>
</figure>

&nbsp;&nbsp;FCN-rLSTM에서 각 타임스탬프에 해당하는 LSTM FCN 은 을 통해 산출된 차량 밀집도의 모든 픽셀의 합을 입력으로 받아 시간 역학적 정보를 추출한다. 추출된 시간 정보는 마지막 단계에서 FCN 의 결과값과 병합되어 최종 차량 계수 예측 값을 산출한다.<br/>
&nbsp;&nbsp;모델 구조상 의 결과가 FCN-rLSTM LSTM 하나의 고정된 크기의 벡터에 압축되어 전달 되는 병목이 존재하기 때문에 정보의 손실이 발생하고 직전의 정보만을 참조하기 때문에 성능이 저하되는 현상이 발생한다.
<br/><br/>

## FCN-BLA의 특징

<figure>
<img src="/assets/img/vehicle_counting/FCN-BLA.png" style="width: 450px; height: 250px"/>
<figcaption>FCN-BLA</figcaption>
</figure>

&nbsp;&nbsp;FCN-rLSTM 에서 사용한 FCN과 LSTM에 추가적인 시간 역순 방향의 LSTM과 Attention 모듈을 접목하여 입력 이미지의 정보를 보다 효율적으로 추출하는 Encoder-Decoder 구조를 설계하였다.<br/>
&nbsp;&nbsp;양방향 LSTM과 Attention 모듈을 통해 긴 입력 시퀸스와 다중 LSTM에도 복잡한 시간 연속적 정보를 잘 학습할 수 있다 판단하여 모델의 입력 배열 개수를 늘렸다.
<br/><br/>

## FCN-rLSTM vs FCN-BLA

<figure>
<img src="/assets/img/vehicle_counting/FCN-BLA_loss.png" style="width: 1000px; height: 150px"/>
<figcaption>FCN-BLA Loss</figcaption>
</figure>
<figure>
<img src="/assets/img/vehicle_counting/model_compare.png" style="width: 250px; height: 60px"/>
<figcaption>FCN-rLSTM vs FCN-BLA</figcaption>
</figure>

&nbsp;&nbsp;FCN-rLSTM 논문에 입각하여 학습을 진행하였고 Counter Error(MAE) 측면에서 FCN-BLA는 4.205, FCN-rLSTM은 4.38로 더 나은 결과를 얻을 수 있었다.
<br/>

[**-FCN-BLA 코드-**](https://github.com/CapstonAIVC/IVCS/blob/serverBranch/IVCS_Server/pytorch/model.py)

<br/>
<br/>

# Application (Web & App)

## 시스템 아키텍처

<figure>
<img src="/assets/img/vehicle_counting/system_architecture.png" style="width: 450px; height: 250px"/>
<figcaption>System Architecture</figcaption>
</figure>

> **CCTV 스트리밍 서버**: 국가 교통 정보 센터(ITS)에서 제공하는 OpenAPI 서버<br/> **클라이언트 주소 서버**: 실시간 고속도로 영상을 스트리밍하기 위한 HLS 주소 풀링 및 제공<br/> **데이터 API 서버**: 교통량 분석 정보 제공 및 저장<br/> **모델 서버**: FCN-BLA 모델에 기반한 교통량 분석 (1 frame per second)<br/>

<br/>

## 메인 서버

<figure>
<img src="/assets/img/vehicle_counting/main_architecture.png" style="width: 450px; height: 250px"/>
<figcaption>Main Server Architecture</figcaption>
</figure>

&nbsp;&nbsp;메인 서버는 사용자에게 지원되는 웹/안드로이드에서 요청하는 CCTV에 대한 실시간 영상 및 예측 결과, 기간별 분석 데이터를 보여주는 기능을 제공하기 위한 서버다. HLS 스트리밍 환경은 각 웹/안드로이드 클라이언트 딴에서 제공되며 메인 서버는 특정 CCTV의 HLS 주소를 클라이언트에게 제공한다.<br/>
&nbsp;&nbsp;또한, 사용자가 분석 정보를 원하는 CCTV에 대한 기간별 분석 데이터 및 교통량 예측 결과를 모델 서버로부터 클라이언트에게 제공한다.

<br/>

## 분석 서버

<figure>
<img src="/assets/img/vehicle_counting/FCN-BLA_input.png" style="width: 450px; height: 250px"/>
<figcaption>FCN-BLA Input Structure</figcaption>
</figure>

&nbsp;&nbsp;분석 서버에서는 각 CCTV의 실시간 영상 프레임을 바탕으로 차량 개수를 분석한다.<br/>

```python
class ThreadedCamera(threading.Thread):
    def __init__(self, src, th_name, url_idx):
        threading.Thread.__init__(self)
        self.frame = None
        self.status = None
        self.th_name = th_name
        self.url_idx = url_idx
        self.flag = 2
        self.origin_src = src

        response=requests.get(self.origin_src)
        self.src = response.url

        self.capture = cv2.VideoCapture(self.src)
        self.FPS = 1/self.capture.get(cv2.CAP_PROP_FPS)
        self.FPS_MS = int(self.FPS * 1000)

        self.capture.set(cv2.CAP_PROP_BUFFERSIZE, 1)
        self.capture.set(cv2.CAP_PROP_FPS, self.FPS)

    def run(self):
        (self.status, tmp) = self.capture.read()
        self.frame = tmp
        q = []
        for _ in range(5): q.append(self.frame)
        while True:
            if self.flag >= 2:
                self.reset_src()
                self.flag = 0

            count = 100
            while count > 0:
                try: (self.status, f) = self.capture.read()
                except ZeroDivisionError: self.reset_src()
                if self.status:
                    tmp2 = f
                else:
                    break
                count -= 1
            self.frame = q.pop(0)
            q.append(tmp2)
            if np.array_equal(self.frame, tmp2): self.flag += 1
            time.sleep(1)

    def get_frame(self):
        return self.frame

    def reset_src(self):
        try:
            response = requests.get(self.origin_src)
        except (TimeoutError, requests.exceptions.ConnectionError) as e:
            try:
                time.sleep(1)
                response = requests.get(self.origin_src)
            except (TimeoutError, requests.exceptions.ConnectionError) as e:
                response = requests.get('http://localhost:3000/getUrl_web')
                total_info = eval(json.loads(response.text))

                self.origin_src = total_info['cctvurl'][self.url_idx]
                response = requests.get(self.origin_src)

        self.src = response.url

        try:
            self.capture = cv2.VideoCapture(self.src)
        except ZeroDivisionError:
            response = requests.get('http://localhost:3000/getUrl_web')
            total_info = eval(json.loads(response.text))

            self.origin_src = total_info['cctvurl'][self.url_idx]
            response = requests.get(self.origin_src)
            self.src = response.url

            self.capture = cv2.VideoCapture(self.src)

        self.FPS = 1/self.capture.get(cv2.CAP_PROP_FPS)
        self.FPS_MS = int(self.FPS * 1000)

        self.capture.set(cv2.CAP_PROP_BUFFERSIZE, 1)
        self.capture.set(cv2.CAP_PROP_FPS, self.FPS)
```

&nbsp;&nbsp;영상 프레임 추출은 python의 `cv2` 모듈을 사용하였다. 1초마다 프레임을 가져오는 방식으로 설정을 진행하였지만 내부적으로 딜레이가 발생하는 문제와 ITS의 OpenAPI에서 가져오는 HLS 주소가 불규칙한 주기로 만료되는 문제가 있었다.<br/>
&nbsp;&nbsp;두 가지 문제를 동시에 해결하기 위해 영상 프레임을 일정한 주기마다 계속 풀링하되 가장 최근 프레임을 모델 input 배열에다가 추가해주었다. 풀링하는 과정에서 HLS 주소가 만료되는 것을 체크하고 만료가 되면 API를 호출해서 HLS 주소를 갱신시켜주는 로직을 추가시켜주었다.

<br/>

```python
cctvname = []
cctvurl = []
streamingList = []
TOTAL_CCTV_NUM = 1
MAX_LEN = 5

if __name__ == '__main__':
    setInfo()
    setStreaming()
    model = setmodel()
    model.eval()  # set model to evaluation mode

    for cctv_idx in range(len(cctvname)):
        mask_tmp = Image.open('./'+cctvname[cctv_idx]+'_mask.png').convert('L')
        mask_tmp = np.array(mask_tmp)
        mask_tmp = (torch.Tensor(mask_tmp)) / 255
        if cctv_idx == 0:
            mask = mask_tmp
            for _ in range(MAX_LEN-1): mask = torch.cat((mask, mask_tmp), 0)
        else:
            for _ in range(MAX_LEN): mask = torch.cat((mask, mask_tmp), 0)

    mask = torch.reshape(mask, (TOTAL_CCTV_NUM, MAX_LEN, 1, 120, 160))
    print(mask.shape)

    for i in range(MAX_LEN):
        addFramesByTensor(-1)

    ## index는 tensorList 안의 list에 이번에 교체할 위치이다.
    index = 0
    while True:
        addFramesByTensor(index)
        if index == MAX_LEN-1:
            index = 0
        else:
            index += 1

        input_img = []
        result = []
        density_result = []
        for i in range(0, 2):
            # queue
            if i == 0:
                X = tensorList[i][index] ## 리스트 중 첫 프레임
                for j in range(index+1, MAX_LEN): ## 두번째부터 4까지
                    X = torch.cat((X,tensorList[i][j]), 0)
                for j in range(0, index): ## 0부터 index까지
                    X = torch.cat((X,tensorList[i][j]), 0)
            else:
                for j in range(index+1, MAX_LEN): ## 두번째부터 4까지
                    X = torch.cat((X,tensorList[i][j]), 0)
                for j in range(0, index+1): ## 0부터 index까지
                    X = torch.cat((X,tensorList[i][j]), 0)

        X = torch.reshape(X, (TOTAL_CCTV_NUM, MAX_LEN, 3, 120, 160))

        with torch.no_grad():
            density_pred, count_pred = model(X, mask=mask)

        for idx in range(TOTAL_CCTV_NUM):
            input_tmp = io.BytesIO()
            density_tmp = io.BytesIO()
            torchvision.utils.save_image(X[idx,-1,-1,:,:]*mask[idx,-1,:,:,:], input_tmp, format='png')
            torchvision.utils.save_image(density_pred[idx,-1,:,:,:]*5, density_tmp, format='png')

            input_img.append(input_tmp.getvalue())
            result.append(count_pred.tolist()[idx][0])
            density_result.append(density_tmp.getvalue())

        print(result)
        result_json = json.dumps(result)

        sio_saveData.emit('model_output', data=(result_json, input_img, density_result))
        time.sleep(1)
```

&nbsp;&nbsp;FCN-BLA 모델은 양방향 LSTM 구조를 사용하기 때문에 _FCN-BLA Input Structure_ 그림과 같은 형태의 연속된 이미지 입력을 요구한다. 많은 테스트 결과 연속된 8개의 프레임 정보를 input으로 줄 때 가장 좋은 퍼포먼스를 보여줬다. 하지만 서버 스펙을 고려하여 각 CCTV 마다 최근 5개의 프레임에 대한 분석을 진행하고 그 분석에 대한 정보를 사용자에게 제공했다.

<br/>

## 데이터 API 서버

<figure>
<img src="/assets/img/vehicle_counting/data_api_flow.png" style="width: 450px; height: 250px"/>
<figcaption>Data API Server Flow</figcaption>
</figure>

&nbsp;&nbsp;데이터 API 서버는 특정 CCTV에 대한 분석 정보를 분석 서버에서 가져와 클라이언트에게 제공하고 분석 정보를 배열에 저장하고 있다가 1시간 간격으로 CSV 파일로 저장한다.<br/>
&nbsp;&nbsp;사용자가 분석 정보를 요구하는 CCTV의 변동이 잦을 것이라 생각했으며 분석 정보 저장을 위한 데이터 수집을 위해 클라이언트 서버와 분석 서버 간의 connection을 socket으로 결정하였다.

[**-데이터 API 서버 코드-**](https://github.com/CapstonAIVC/IVCS/blob/serverBranch/IVCS_Server/pytorch/saveData.py)

<br/>
<br/>

# 프로젝트 결과

&nbsp;&nbsp;최종적으로 FCN-BLA 모델을 고안하여 졸업 프로젝트를 마무리했지만 논문 일정으로 인해 기존 시스템에 FCN-rLSTM 모델을 사용하여 논문을 작성하였다.<br/>
&nbsp;&nbsp;해당 2022 한국컴퓨터종합학술대회 학부생/주니어 논문경진대회 - 학부생/주니어 논문 경진대회 학부생 부문 장려상을 수상하였고 캡스톤 프로젝트 과목에서는 A+ 성적을 받았다.

<a href="/assets/img/vehicle_counting/capstone_poster.pdf" target="_blank">FCN-BLA 모델에 기반한 교통량 분석 시스템 - 캡스톤 프로젝트 포스터</a>

<br/>
<br/>

# 회고

&nbsp;&nbsp;학부생 시절에 웹 프로그래밍에 많은 시간을 투자하지 않았기 때문에 관련된 지식이 굉장히 부족하였다. 산학 협력 프로젝트였고 1년 이라는 기간 중 프로젝트의 방향성 문제로 6개월의 시간을 허비하였다. 핑계지만 짧은 시간 안에 많지 않은 지식으로 결과물을 만들기 위해서 지금 보면 부끄러운 설계와 코드라고 생각한다.<br/>
&nbsp;&nbsp;프로젝트 종료 이후 공백기 없이 인턴, 취직을 하여 시간적 여유가 없어 리팩토링을 하지 못했지만 현재(24.03.21) 만약 해당 프로그램을 설계한다면 아래와 같이 설계하지 않을까 싶다.

<style>
h2 {
    margin-left: 20px;
}
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
p {
    font-size: 17px !important;
}
ul {
    font-size: 17px !important;
}
hr {
    background-color: #808080 !important;
    display: block;
}
</style>
