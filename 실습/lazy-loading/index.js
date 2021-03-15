// const img = document.querySelectorAll('img'); // 모든 이미지 파일 선택
// console.log(img);
const images = document.getElementsByClassName('lazy'); // 모든 레이지 파일 선택
console.log(images);
const lazyLoad = (target) => {
  const io = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        console.log('reached!');
        if (entry.isIntersecting) {
          const img = entry.target; // 이미지 엘리멘트를 가져옵니다.
          const src = img.getAttribute('data-lazy');
          img.setAttribute('src', src);
          img.classList.add('fade');
          observer.disconnect();
        }
      });
    },
    { rootMargin: '0px 0px 256px 0px' }
  );
  io.observe(target);
};

for (let image of images) {
  lazyLoad(image);
}
// images.forEach(lazyLoad);
