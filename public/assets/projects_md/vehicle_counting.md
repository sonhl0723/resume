---
## Index

[toc]
---

## Summary

> -   왜 이런 주제를 캡스톤 프로젝트 주제로 선정하였는지에 대한 이유를 써도 좋을 것 같음
> -   컴퓨터 비전 분야의 차량 계수 모델인 FCN-rLSTM 모델에 기반하여 시간 역학적 정보를 더 효율적으로 참조할 수 있는 FCN-BLA 모델 고안
> -   국가 교통 정보 센터(ITS)의 OpenAPI를 통해 실시간 국내 고속도로 CCTV 영상을 수집 후 FCN-BLA 모델을 통해 교통량 분석
> -   실시간 국내 고속도로 교통량 분석 정보를 사용자에게 제공하기 위한 웹, 앱 애플리케이션 개발

## FCN-BLA

-   FCN-rLSTM란

![FCN-rLSTM](/assets/img/vehicle_counting/FCN-rLSTM.png)

> FCN 은 기존 객체 검출이나 동작 감지 방식에 서 차량 자체를 인식하는 알고리즘과 다르게 객체 의 밀집도를 토대로 차량의 계수를 예측한다. 밀집도는 후처리 과정에서 입력 데이터와 같은 사이즈로 조정한 뒤 예측되기 때문에 픽셀 수준의 측정 정보를 포함하고 있어 기존 방식들에 비해 낮은 화질이나 프레임률에서 더욱 정확한 예측이 가능하다.

-   FCN-rLSTM 모델의 한계

![FCN-rLSTM Density Map](/assets/img/vehicle_counting/FCN-rLSTM_density.png)

> -   FCN-rLSTM에서 각 타임스탬프에 해당하는 LSTM FCN 은 을 통해 산출된 차량 밀집도의 모든 픽셀의 합을 입력으로 받아 시간 역학적 정보를 추출한다. 추출된 시간 정보는 마지막 단계에서 FCN 의 결과값과 병합되어 최종 차량 계수 예측 값을 산출한다.
> -   모델 구조상 의 결과가 FCN-rLSTM LSTM 하나의 고정된 크기의 벡터에 압축되어 전달 되는 병목이 존재하기 때문에 정보의 손실이 발생하고 직전의 정보만을 참조하기 때문에 성능이 저하되는 현상이 발생한다.

-   FCN-BLA의 특징

![FCN-BLA](/assets/img/vehicle_counting/FCN-BLA.png)

> -   FCN-rLSTM 에서 사용한 FCN과 LSTM에 추가적인 시간 역순 방향의 LSTM과 Attention 모듈을 접목하여 입력 이미지의 정보를 보다 효율적으로 추출하는 Encoder-Decoder 구조를 설계하였다.
> -   양방향 LSTM과 Attention 모듈을 통해 긴 입력 시퀸스와 다중 LSTM에도 복잡한 시간 연속적 정보를 잘 학습할 수 있다 판단하여 모델의 입력 배열 개수를 늘렸다.

-   FCN-rLSTM vs FCN-BLA

![FCN-BLA Loss](/assets/img/vehicle_counting/FCN-BLA_loss.png)
![Compare Table](/assets/img/vehicle_counting/model_compare.png)

> FCN-rLSTM 논문에 입각하여 학습을 진행하였고 Counter Error(MAE) 측면에서 FCN-BLA는 4.205, FCN-rLSTM은 4.38로 더 나은 결과를 얻을 수 있었다.

## Application (Web & App)

### 시스템 아키텍처

![System Architecture](/assets/img/vehicle_counting/system_architecture.png)

> -   CCTV 스트리밍 서버: 국가 교통 정보 센터(ITS)에서 제공하는 OpenAPI 서버
> -   클라이언트 주소 서버: 실시간 고속도로 영상을 스트리밍하기 위한 HLS 주소 가져오는걸 무슨 단어로 하지 및 제공
> -   데이터 API 서버: 교통량 분석 정보 제공 및 저장
> -   모델 서버: FCN-BLA 모델에 기반한 교통량 분석 (1 frame per second)

### 메인 서버

![Main Server Architecture](/assets/img/vehicle_counting/main_architecture.png)

### 분석 서버

![FCN-BLA Input Data Format](/assets/img/vehicle_counting/FCN-BLA_input.png)

### 데이터 API 서버

![Data API Server Flow](/assets/img/vehicle_counting/data_api_flow.png)

## Result