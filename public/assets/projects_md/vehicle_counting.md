# Index

[[toc]]

---

# Summary

-   컴퓨터 비전 분야의 차량 계수 모델인 FCN-rLSTM 모델에 기반하여 시간 역학적 정보를 더 효율적으로 참조할 수 있는 FCN-BLA 모델 고안
-   국가 교통 정보 센터(ITS)의 OpenAPI를 통해 실시간 국내 고속도로 CCTV 영상을 수집 후 FCN-BLA 모델을 통해 교통량 분석
-   실시간 국내 고속도로 교통량 분석 정보를 사용자에게 제공하기 위한 웹, 앱 애플리케이션 개발

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

# Application (Web & App)

## 시스템 아키텍처

<figure>
<img src="/assets/img/vehicle_counting/system_architecture.png" style="width: 450px; height: 250px"/>
<figcaption>System Architecture</figcaption>
</figure>

> **CCTV 스트리밍 서버**: 국가 교통 정보 센터(ITS)에서 제공하는 OpenAPI 서버<br/> **클라이언트 주소 서버**: 실시간 고속도로 영상을 스트리밍하기 위한 HLS 주소 풀링 및 제공<br/> **데이터 API 서버**: 교통량 분석 정보 제공 및 저장<br/> **모델 서버**: FCN-BLA 모델에 기반한 교통량 분석 (1 frame per second)<br/>

## 메인 서버

<figure>
<img src="/assets/img/vehicle_counting/main_architecture.png" style="width: 450px; height: 250px"/>
<figcaption>Main Server Architecture</figcaption>
</figure>

&nbsp;&nbsp;메인 서버는 사용자에게 지원되는 웹/안드로이드에서 요청하는 CCTV에 대한 실시간 영상 및 예측 결과, 기간별 분석 데이터를 보여주는 기능을 제공하기 위한 서버다. HLS 스트리밍 환경은 각 웹/안드로이드 클라이언트 딴에서 제공되며 메인 서버는 특정 CCTV의 HLS 주소를 클라이언트에게 제공한다.
&nbsp;&nbsp;또한, 사용자가 분석 정보를 원하는 CCTV에 대한 기간별 분석 데이터 및 교통량 예측 결과를 모델 서버로부터 클라이언트에게 제공한다.

## 분석 서버

<figure>
<img src="/assets/img/vehicle_counting/FCN-BLA_input.png" style="width: 450px; height: 250px"/>
<figcaption>FCN-BLA Input Structure</figcaption>
</figure>

## 데이터 API 서버

<figure>
<img src="/assets/img/vehicle_counting/data_api_flow.png" style="width: 450px; height: 250px"/>
<figcaption>Data API Server Flow</figcaption>
</figure>

# Result

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
