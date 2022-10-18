# portfolio_front
portfolio front vue
1. 도커 멀티 아키텍쳐 작성법
  - docker buildx build --platform:linux/amd64, linux/arm64/v8 blabla
  - FROM --platform:linux/amd64, linux/arm64/v8 blabla blabla
  - 하지만 docker compose를 이용할 경우는 플랫폼 지정을 할 수 없음...
  - 로컬 우분투 : linux/amd64
  - 오라클클라우드 : linux/arm64/v8
