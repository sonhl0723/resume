<template>
  <div
    class="r-component"
  >
    <el-descriptions
      title="경력 사항"
    />
    <el-steps
      direction="vertical"
      :active="1"
      style="--el-step__description-white-space: pre-line;"
    >
      <el-step
        :icon="CircleCheck"
        :title="ngl.title"
        :description="ngl.description"
      />
      <el-step
        :icon="CircleCheck"
        :title="ktds.title"
        :description="ktds.description"
      />
    </el-steps>
  </div>
</template>
  
<script setup>
import { CircleCheck } from '@element-plus/icons-vue'

const ngl = {
  "title": "NGL Transportation",
  "description": `2022.09~2022.12
  인턴
  
  ◉ 차세대 First-Mile 운송 관리 시스템 구축/개발
  ▏PostgreSQL, MongoDB, React.js
   ╺ 운송 관리 시스템 데이터베이스 설계
   ╺ 운송 관리 시스템 프론트엔드 개발`
}

const ktds = {
  "title": "KT ds",
  "description": `2023.01~
  정규직

  ◉ SmartX 솔루션 기반 디지털트윈 대시보드 개발
  ▏Kafka, Spring Boot, Burrow, telegraf, grafana
   ╺ IoT 플랫폼 카프카 연동 개발
   ╺ IoT 플랫폼 성능 모니터링 구축
   ╺ 디지털트윈 대시보드 개발을 위한 데이터 에뮬레이터 개발

  ◉ 지능형 스마트부대(1-3단계) 시범구축 사업
  ▏Spring Boot, PostgreSQL, Spring Security, Linux(rocky linux8.9), Wildfly, Jenkins, MyBatis
   ╺ 지능형 스마트부대 통합플랫폼 백엔드 개발
   ╺ 각 국방 체계 - IoT 플랫폼 연동
   ╺ 카메라 - IoT 플랫폼 연동을 위한 Digest 인증 방식 기능 개발
   ╺ CI/CD 파이프라인 구축 및 관리`
}

</script>