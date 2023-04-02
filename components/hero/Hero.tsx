import style from "./Hero.module.css";
const Hero = () => {
  return (
    <div className={style.container}>
      <div className={style.heroLeft}>
        <h4>Lorem ipsum dolor.</h4>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab
          accusamus, assumenda at consectetur cupiditate dolores enim fugiat
          inventore libero modi natus necessitatibus nostrum omnis quidem rerum
          sapiente unde, voluptate! Doloribus laborum porro quam reiciendis sit?
          Aspernatur ducimus in reiciendis!
        </p>
        <button className={style.buttonNews}>News</button>
      </div>
      <div className={style.logoContainer}>
        <img
          src="https://1000logos.net/wp-content/uploads/2019/12/East-Carolina-Pirates-Logo-2004.png"
          alt="logo"
        />
      </div>
    </div>
  );
};

export default Hero;
