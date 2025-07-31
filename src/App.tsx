import { useState } from "react";
import "./App.css";

// 🚀 완전히 새로운 npm import 방식 - 데모와 동일한 성능!
import { useTwoDimensionScroll } from "two-dimension-scroll/react";

function App() {
  // 모달 상태 관리
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 🚨 데모와 완전히 동일한 옵션으로 초기화
  const { isReady, scrollPosition, scrollInfo, instance } =
    useTwoDimensionScroll({
      debug: true,
      ui: {
        hideScrollbar: false, // 스크롤바 표시
      },
      // 🔥 데모와 완전히 동일한 환경별 옵션
      desktop: {
        duration: 1000,
        horizontalSensitivity: 1.2,
        verticalSensitivity: 1.5,
        lerp: 0.1,
        wheelMultiplier: 1.1,
        precisionMode: true,
        keyboardScrollAmount: 0.8,
        prioritizeVertical: true, // 🆕 Y축 우선 모드 테스트!
      },
      mobile: {
        duration: 1000,
        horizontalSensitivity: 1.2,
        verticalSensitivity: 1.5,
        lerp: 0.15,
        touchMultiplier: 2.5,
        bounceEffect: true,
        flingMultiplier: 1.2,
        touchStopThreshold: 4,
        prioritizeVertical: true, // 🆕 Y축 우선 모드 테스트!
      },
      tablet: {
        duration: 900,
        horizontalSensitivity: 1.5,
        verticalSensitivity: 1.8,
        lerp: 0.12,
        wheelMultiplier: 1.05,
        touchMultiplier: 2.2,
        hybridMode: true,
        prioritizeVertical: true, // 🆕 Y축 우선 모드 테스트!
      },
    });

  // 모달 열기/닫기 함수 - 데모와 완전히 동일한 방식
  const openModal = () => {
    setIsModalOpen(true);
    // 🚨 데모와 완전히 동일한 모달 처리 - pauseForModal() 호출
    if (instance && typeof (instance as any).pauseForModal === "function") {
      (instance as any).pauseForModal();
      console.log("🎭 모달 열림 - pauseForModal() 호출 완료");
    } else {
      console.error("❌ pauseForModal 메서드를 찾을 수 없습니다");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // 🚨 데모와 완전히 동일한 모달 처리 - resumeFromModal() 호출
    if (instance && typeof (instance as any).resumeFromModal === "function") {
      (instance as any).resumeFromModal();
      console.log("🎭 모달 닫힘 - resumeFromModal() 호출 완료");
    } else {
      console.error("❌ resumeFromModal 메서드를 찾을 수 없습니다");
    }
  };

  // 로딩 중 표시
  if (!isReady) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          fontSize: "2rem",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
        }}
      >
        🚀 npm import React Hook 로딩 중...
      </div>
    );
  }

  return (
    <div className="App">
      {/* 🚨 npm import 성공 표시 패널 */}
      <div
        className="fixed-panel"
        style={{
          position: "fixed",
          top: 10,
          right: 10,
          left: 10,
          background: "rgba(0,100,255,0.95)", // 🔵 파란색으로 npm import 표시!
          color: "white",
          padding: "1rem",
          borderRadius: "15px",
          fontFamily: "monospace",
          width: "auto",
          maxWidth: "calc(100vw - 20px)",
          border: "2px solid #0066ff",
          boxShadow: "0 0 20px rgba(0,100,255,0.6)",
          zIndex: 1000,
          fontSize: "0.7rem",
          lineHeight: "1.3",
        }}
      >
        <div style={{ marginBottom: "0.5rem", fontWeight: "bold" }}>
          🚀 npm import React Hook 성공!
        </div>
        <div>현재 위치: {scrollInfo.position.toFixed(1)}px</div>
        <div>최대 위치: {scrollInfo.maxPosition.toFixed(1)}px</div>
        <div>진행률: {scrollInfo.progress.toFixed(1)}%</div>
        <div>상태: {isReady ? "✅ 준비완료" : "⏳ 로딩중"}</div>
        <div>방식: 📦 npm import + React Hook</div>
      </div>

      {/* 🚨 데모와 동일한 메인 콘텐츠 */}
      <div
        style={{
          minHeight: "500vh",
          width: "100%",
          maxWidth: "100vw",
          overflow: "hidden",
          overflowX: "hidden",
          background:
            "linear-gradient(180deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)",
          position: "relative",
        }}
      >
        {/* 섹션 1 */}
        <section
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          }}
        >
          <div
            style={{ textAlign: "center", maxWidth: "800px", color: "white" }}
          >
            <h1
              style={{
                fontSize: "4rem",
                marginBottom: "1rem",
                textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
              }}
            >
              ✛ two-dimension-scroll
            </h1>
            <div
              style={{
                background: "rgba(255,255,255,0.1)",
                padding: "2rem",
                borderRadius: "20px",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <p
                style={{
                  fontSize: "1.4rem",
                  lineHeight: "1.8",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                  marginBottom: "2rem",
                }}
              >
                <strong>🎉 완전한 npm 모듈 형태로 작동!</strong>
              </p>
              <p>
                <strong>✨ 사용 방식:</strong>
              </p>
              <p>
                • import {`{ useTwoDimensionScroll }`} from
                "two-dimension-scroll/react"
              </p>
              <p>• TypeScript 완벽 지원</p>
              <p>• React Hook 형태의 깔끔한 API</p>
            </div>
          </div>
        </section>

        {/* 섹션 2 */}
        <section
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
          }}
        >
          <div
            style={{ textAlign: "center", maxWidth: "800px", color: "white" }}
          >
            <h2
              style={{
                fontSize: "3rem",
                marginBottom: "1rem",
                textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
              }}
            >
              📦 npm 모듈 완성!
            </h2>
            <div
              style={{
                background: "rgba(255,255,255,0.1)",
                padding: "2rem",
                borderRadius: "20px",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <p
                style={{
                  fontSize: "1.4rem",
                  lineHeight: "1.8",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                  marginBottom: "2rem",
                }}
              >
                이제 완전한 React 라이브러리 형태로 사용 가능합니다!
              </p>
              <p>
                <strong>사용법:</strong>
              </p>
              <p>1. npm install two-dimension-scroll</p>
              <p>
                2. import {`{ useTwoDimensionScroll }`} from
                "two-dimension-scroll/react"
              </p>
              <p>
                3. const {`{ isReady, scrollTo, scrollInfo }`} =
                useTwoDimensionScroll(options)
              </p>
            </div>
          </div>
        </section>

        {/* 섹션 3 */}
        <section
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
          }}
        >
          <div
            style={{ textAlign: "center", maxWidth: "800px", color: "white" }}
          >
            <h2
              style={{
                fontSize: "3rem",
                marginBottom: "1rem",
                textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
              }}
            >
              🎯 터치 스크롤 테스트
            </h2>
            <div
              style={{
                background: "rgba(255,255,255,0.1)",
                padding: "2rem",
                borderRadius: "20px",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <p
                style={{
                  fontSize: "1.4rem",
                  lineHeight: "1.8",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                  marginBottom: "2rem",
                }}
              >
                모바일에서 터치 드래그로 스크롤해보세요!
              </p>
              <p>데모와 완전히 동일한 반응성을 제공합니다.</p>
              <p>
                <strong>터치 기능:</strong>
              </p>
              <p>• 자연스러운 터치 드래그</p>
              <p>• 플링(Fling) 제스처 지원</p>
              <p>• 환경별 최적화된 민감도</p>
              <p>• 부드러운 애니메이션</p>
            </div>
          </div>
        </section>

        {/* 섹션 4 */}
        <section
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            background:
              "linear-gradient(135deg, hsl(240, 70%, 80%) 0%, hsl(270, 70%, 90%) 100%)",
          }}
        >
          <div
            style={{ textAlign: "center", maxWidth: "800px", color: "white" }}
          >
            <h2
              style={{
                fontSize: "3rem",
                marginBottom: "1rem",
                textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
              }}
            >
              🚀 섹션 4
            </h2>
            <div
              style={{
                background: "rgba(255,255,255,0.1)",
                padding: "2rem",
                borderRadius: "20px",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <p
                style={{
                  fontSize: "1.4rem",
                  lineHeight: "1.8",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                  marginBottom: "2rem",
                }}
              >
                npm import로 완벽하게 작동하는 React Hook!
              </p>
              <p>현재 위치: {Math.round(scrollPosition)}px</p>
              <p>진행률: {scrollInfo.progress.toFixed(1)}%</p>
            </div>
          </div>
        </section>

        {/* 섹션 5 - 모달 테스트 */}
        <section
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            background: `linear-gradient(135deg, hsl(300, 70%, 80%) 0%, hsl(330, 70%, 90%) 100%)`,
          }}
        >
          <div
            style={{ textAlign: "center", maxWidth: "800px", color: "white" }}
          >
            <h2
              style={{
                fontSize: "3rem",
                marginBottom: "1rem",
                textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
              }}
            >
              🎭 모달 테스트
            </h2>
            <div
              style={{
                background: "rgba(255,255,255,0.1)",
                padding: "2rem",
                borderRadius: "20px",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <p
                style={{
                  fontSize: "1.4rem",
                  lineHeight: "1.8",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                  marginBottom: "2rem",
                }}
              >
                데모와 동일한 모달 스크롤 처리를 테스트해보세요!
              </p>
              <p>
                <strong>모달 기능:</strong>
              </p>
              <p>• 모달 열림 시 body 스크롤 차단</p>
              <p>• 모달 내부에서만 일반 스크롤 작동</p>
              <p>• 모달 닫힘 시 body 스크롤 복원</p>
              <p>• 터치 이벤트 올바른 처리</p>

              <button
                onClick={openModal}
                style={{
                  background:
                    "linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)",
                  color: "white",
                  border: "none",
                  padding: "1rem 2rem",
                  margin: "2rem 0.5rem",
                  borderRadius: "25px",
                  cursor: "pointer",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  boxShadow: "0 4px 15px rgba(255,107,107,0.4)",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => {
                  (e.target as HTMLElement).style.transform =
                    "translateY(-2px)";
                  (e.target as HTMLElement).style.boxShadow =
                    "0 6px 20px rgba(255,107,107,0.6)";
                }}
                onMouseOut={(e) => {
                  (e.target as HTMLElement).style.transform = "translateY(0)";
                  (e.target as HTMLElement).style.boxShadow =
                    "0 4px 15px rgba(255,107,107,0.4)";
                }}
              >
                🎭 모달 열기
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* 🚨 데모와 동일한 모달 - 클래스명 기반 감지 */}
      {isModalOpen && (
        <div
          className="modal-overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 10000,
            backdropFilter: "blur(5px)",
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeModal();
            }
          }}
        >
          <div
            className="modal modal-content"
            role="dialog"
            aria-modal="true"
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              borderRadius: "20px",
              padding: "2rem",
              maxWidth: "90vw",
              maxHeight: "80vh",
              overflow: "auto",
              color: "white",
              boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
              <h3
                style={{
                  fontSize: "2rem",
                  marginBottom: "1rem",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                }}
              >
                🎭 모달 스크롤 테스트
              </h3>
              <p style={{ fontSize: "1.2rem", opacity: 0.9 }}>
                데모와 완전히 동일한 모달 처리!
              </p>
            </div>

            <div
              className="modal-content"
              style={{
                background: "rgba(255,255,255,0.1)",
                padding: "1.5rem",
                borderRadius: "15px",
                marginBottom: "2rem",
                border: "1px solid rgba(255,255,255,0.2)",
                maxHeight: "300px",
                overflow: "auto",
              }}
            >
              <h4 style={{ marginBottom: "1rem", color: "#ffd700" }}>
                📋 테스트 가이드:
              </h4>
              <div style={{ textAlign: "left", lineHeight: "1.8" }}>
                <p>
                  <strong>1. Body 스크롤 차단 확인:</strong>
                </p>
                <p>• 모달이 열린 상태에서 휠/터치로 스크롤 시도</p>
                <p>• Body가 스크롤되지 않아야 함</p>
                <br />
                <p>
                  <strong>2. 모달 내부 스크롤 확인:</strong>
                </p>
                <p>• 이 텍스트 영역에서 스크롤 시도</p>
                <p>• 모달 내부에서만 스크롤 작동</p>
                <br />
                <p>
                  <strong>3. 터치 이벤트 확인:</strong>
                </p>
                <p>• 모바일에서 터치 드래그로 테스트</p>
                <p>• 모달 내부/외부 올바른 구분 처리</p>
                <br />
                <div
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    padding: "1rem",
                    borderRadius: "10px",
                    margin: "1rem 0",
                  }}
                >
                  <p>
                    <strong>🔄 스크롤 테스트용 긴 텍스트:</strong>
                  </p>
                  {Array.from({ length: 20 }, (_, i) => (
                    <p key={i} style={{ margin: "0.5rem 0" }}>
                      {i + 1}. 이것은 모달 내부 스크롤 테스트용 텍스트입니다.
                      데모와 동일하게 모달 내부에서만 스크롤이 작동해야 합니다.
                      Body 스크롤은 완전히 차단되어야 합니다. npm import React
                      Hook 버전에서도 완벽하게 작동합니다! 🚀
                    </p>
                  ))}
                </div>
                <br />
                <p>
                  <strong>4. 모달 닫기 후 확인:</strong>
                </p>
                <p>• 모달을 닫은 후 Body 스크롤 복원 확인</p>
                <p>• 라이브러리 스크롤이 정상 작동하는지 확인</p>
              </div>
            </div>

            <div style={{ textAlign: "center" }}>
              <button
                onClick={closeModal}
                style={{
                  background:
                    "linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)",
                  color: "white",
                  border: "none",
                  padding: "0.8rem 2rem",
                  borderRadius: "25px",
                  cursor: "pointer",
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  boxShadow: "0 4px 15px rgba(255,107,107,0.4)",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => {
                  (e.target as HTMLElement).style.transform =
                    "translateY(-2px)";
                  (e.target as HTMLElement).style.boxShadow =
                    "0 6px 20px rgba(255,107,107,0.6)";
                }}
                onMouseOut={(e) => {
                  (e.target as HTMLElement).style.transform = "translateY(0)";
                  (e.target as HTMLElement).style.boxShadow =
                    "0 4px 15px rgba(255,107,107,0.4)";
                }}
              >
                ✖️ 모달 닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
