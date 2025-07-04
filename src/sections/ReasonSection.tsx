export default function ReasonSection() {
  return (
    <section
      id="reason"
      className="bg-white w-full py-20 px-4 text-gray-800 flex justify-center"
    >
      <div className="max-w-3xl text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">왜 ‘일하영’을 만들게 되었을까요?</h2>
        <p className="text-base sm:text-lg leading-relaxed">
          제주 지역의 소상공인은 계절성과 지역 특성으로 인해 단기 인력에 대한 수요가 높습니다.
          <br className="hidden sm:block" />
          그러나 사람을 구하기 위한 방법은 여전히 주변 지인을 통한 구두 추천에 머물러 있습니다.
          <br /><br />
          한편, 청년들은 단기간 경험과 수익을 동시에 얻고 싶지만, 정보를 탐색하고 지원하기가 번거로워
          쉽게 연결되지 못하는 경우가 많았습니다.
          <br /><br />
          이러한 문제를 해결하고자, 단기 인력 연결과 출결 관리가 가능한 간편한 플랫폼이 필요하다고 느꼈습니다.
          <br />
          그래서 태어났습니다. <strong>일하영</strong>이요.
        </p>
      </div>
    </section>
  );
}