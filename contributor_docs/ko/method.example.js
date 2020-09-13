/**
 * "이것은 메소드의 인라인 문서 템플릿입니다. 이 템플릿을 사용하려면 큰 따옴표 
 * 사이의 모든 텍스트를 제거하십시오.  메소드에 대한 일부 설명은 여기에 들어갑니다.
 * 간단한 단어로 함수가 하는 일과 그에 대한 좋은/나쁜 사용 예를 설명하십시오.
 * 만약 비정상적인 케이스나 경고가 있다면 여기에서 설명해 주세요."
 *
 * 기본적으로, 배경색은 투명합니다.
 *
 * @method "메소드명"
 * @param {자료형} "변수명" "파라미터 설명"
 * @param {자료형} ["변수명"] "선택적 파라미터 설명"
 * @chainable
 *
 * @example
 * <div>
 * <code>
 * // "예시 설명을 씁니다."
 * "코드는 여기에 옵니다. "
 * </code>
 * </div>
 *
 * <div>
 * <code>
 * // "예시 설명을 씁니다."
 * "코드는 여기에 옵니다. "
 * </code>
 * </div>
 *
 * @alt
 * "첫 번째 예시를 명확히 설명하는 줄입니다"
 * "두 번째 예시를 명확히 설명하는 줄입니다"
 */

// "메소드에 둘 이상의 특징이 있으면, 각 특징은 다음과 같은 파라미터 설명과 함께 
// 자체 블록에 문서화할 수 있습니다."
/**
 * @method "메소드명"
 * @param {"자료형"} "변수명" "파라미터 설명"
 * @param {"자료형"} "변수명" "파라미터 설명"
 * @chainable
 */
p5.prototype.methodName = function() {
  // 코드 설명을 씁니다.
  '코드는 여기에 옵니다.';
};

// 이 부분은 템플릿을 채운 예시입니다.
/**
 *  <a href="#/p5/background">background()</a> 함수는 p5.js 캔버스의 배경 색상을 
 * 설정합니다. 이 함수는 일반적으로 draw()에서 각 프레임의 시작 부분에 디스플레이 
 * 윈도우를 지우는 데 사용되지만, 애니메이션의 첫 번째 프레임에 배경색을 설정하거나 
 * 배경을 한 번만 설정해야 할 경우 setup() 내에서 사용할 수 있습니다.
 * 
 * 배경색 기본 설정은 투명입니다.
 *
 * @method background
 * @param {Number} 회색은 흰색과 검은색 사이 값을 명시합니다
 * @param {Number} [a] 현재 색상 범위에 상대적인 배경 불투명도(기본값은 0-255)
 * @chainable
 *
 * @example
 * <div>
 * <code>
 * // 그레이 스케일 정수 값
 * background(0);
 * </code>
 * </div>
 *
 * <div>
 * <code>
 * // RGB 정수 값
 * background(0,255,0);
 * </code>
 * </div>
 *
 * @alt
 * 검은색 배경 캔버스
 * 녹색 배경 캔버스
 */

/**
 * @method background
 * @param {String} 문자열 형태의 색상 설정에 사용할 수 있는 형식:
                   정수, rgb(), rgba(), rgb() 비율, rgba() 비율, 
                   3자리 16진법, 6자리 16진법,
 * @param {Number} [a]
 * @chainable
 */
p5.prototype.background = function() {
  // 코드는 여기에 옵니다.
};