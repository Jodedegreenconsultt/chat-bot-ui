type SlickSettingProps = {
  dots: boolean;
  infinite: boolean;
  slidesToShow: number;
  slidesToScroll: number;
  fade: boolean;
  autoplay: boolean;
  speed: number;
  autoplaySpeed: number;
  pauseOnHover: boolean;
  cssEase: string;
};

export const SlickSetting: SlickSettingProps = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  autoplay: true,
  speed: 700,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  cssEase: 'linear'
};
