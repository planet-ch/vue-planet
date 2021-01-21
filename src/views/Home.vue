<template>
  <div class="home">
    <div class="pc">
      <div class="title-box">
        <h1 class="title">
          Planet-96
        </h1>
      </div>

      <div class="menu-list">
        <el-row :gutter="10">
          <el-col :lg="12" :sm="12" :xs="12">
            <div class="menu-left clearfix">
              <div class="menu-item fl" v-for="(item, index) in menus" :key="index">
                <el-tooltip placement="top">
                  <div slot="content">{{item.content}}</div>
                  <div :class="['menu-item-box', item.className]"></div>
                </el-tooltip>
              </div>
            </div>
          </el-col>
          <el-col :lg="12" :sm="12" :xs="12">
            <div class="menu-right">
              <div class="menu-right-item">首页</div>
              <div class="menu-right-item">文章</div>
              <div class="menu-right-item">我的</div>
              <div class="menu-right-item">关于</div>
            </div>
          </el-col>
        </el-row>
      </div>

      <div class="bg-box pc">
        <swiper
            effect="fade"
            ref="mySwiper"
            :options="swiperOptions"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
        >
          <swiper-slide class="bg-box-item" v-for="(b, i) in banners" :key="i">
            <img :src="b.bg" alt="">
            <div class="show-box">
              <div class="bg-title">{{b.title}}</div>
              <div class="bg-content">{{b.slogan}}</div>
<!--              <div class="bg-time">{{currentTime}}</div>-->
            </div>
          </swiper-slide>
        </swiper>
        <div class="bg-time">{{currentTime}}</div>
      </div>

      <div class="bg-box mobile">
        <swiper
            effect="fade"
            ref="mySwiperMobile"
            :options="swiperOptionsMobile"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
        >
          <swiper-slide class="bg-box-item" v-for="(b, i) in banners" :key="i">
            <img :src="b.bg" alt="">
            <div class="show-box">
              <div class="bg-title">{{b.title}}</div>
              <div class="bg-content">{{b.slogan}}</div>
<!--              <div class="bg-time">{{currentTime}}</div>-->
            </div>
          </swiper-slide>
        </swiper>
      </div>

      <div class="content" v-loading="loading">
        <el-row :gutter="20">
          <el-col :md="8" :sm="8"  :xs="24" class="mine">
            <div class="mine-info">
              <img :src="userInfo.ava" class="user-ava" alt="">

              <div class="user-name">Planet</div>

              <p class="user-slogan">YESTERDAY YOU SAID TOMORROW</p>

              <p class="user-cells">
                <span role="img" aria-label="contacts" class="anticon anticon-contacts" style="margin-right: 8px;"><svg viewBox="64 64 896 896" focusable="false" data-icon="contacts" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M594.3 601.5a111.8 111.8 0 0029.1-75.5c0-61.9-49.9-112-111.4-112s-111.4 50.1-111.4 112c0 29.1 11 55.5 29.1 75.5a158.09 158.09 0 00-74.6 126.1 8 8 0 008 8.4H407c4.2 0 7.6-3.3 7.9-7.5 3.8-50.6 46-90.5 97.2-90.5s93.4 40 97.2 90.5c.3 4.2 3.7 7.5 7.9 7.5H661a8 8 0 008-8.4c-2.8-53.3-32-99.7-74.7-126.1zM512 578c-28.5 0-51.7-23.3-51.7-52s23.2-52 51.7-52 51.7 23.3 51.7 52-23.2 52-51.7 52zm416-354H768v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H548v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H328v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H96c-17.7 0-32 14.3-32 32v576c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V256c0-17.7-14.3-32-32-32zm-40 568H136V296h120v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h120v496z"></path></svg>
                </span>
                前端開發
              </p>

              <p class="user-cells">
                <span role="img" aria-label="cluster" class="anticon anticon-cluster" style="margin-right: 8px;"><svg viewBox="64 64 896 896" focusable="false" data-icon="cluster" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M888 680h-54V540H546v-92h238c8.8 0 16-7.2 16-16V168c0-8.8-7.2-16-16-16H240c-8.8 0-16 7.2-16 16v264c0 8.8 7.2 16 16 16h238v92H190v140h-54c-4.4 0-8 3.6-8 8v176c0 4.4 3.6 8 8 8h176c4.4 0 8-3.6 8-8V688c0-4.4-3.6-8-8-8h-54v-72h220v72h-54c-4.4 0-8 3.6-8 8v176c0 4.4 3.6 8 8 8h176c4.4 0 8-3.6 8-8V688c0-4.4-3.6-8-8-8h-54v-72h220v72h-54c-4.4 0-8 3.6-8 8v176c0 4.4 3.6 8 8 8h176c4.4 0 8-3.6 8-8V688c0-4.4-3.6-8-8-8zM256 805.3c0 1.5-1.2 2.7-2.7 2.7h-58.7c-1.5 0-2.7-1.2-2.7-2.7v-58.7c0-1.5 1.2-2.7 2.7-2.7h58.7c1.5 0 2.7 1.2 2.7 2.7v58.7zm288 0c0 1.5-1.2 2.7-2.7 2.7h-58.7c-1.5 0-2.7-1.2-2.7-2.7v-58.7c0-1.5 1.2-2.7 2.7-2.7h58.7c1.5 0 2.7 1.2 2.7 2.7v58.7zM288 384V216h448v168H288zm544 421.3c0 1.5-1.2 2.7-2.7 2.7h-58.7c-1.5 0-2.7-1.2-2.7-2.7v-58.7c0-1.5 1.2-2.7 2.7-2.7h58.7c1.5 0 2.7 1.2 2.7 2.7v58.7zM360 300a40 40 0 1080 0 40 40 0 10-80 0z"></path></svg>
                </span>
                SKG－组织运营部－IT－前端开发
              </p>

              <p class="user-cells">
                <span role="img" aria-label="home" class="anticon anticon-home" style="margin-right: 8px;"><svg viewBox="64 64 896 896" focusable="false" data-icon="home" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path></svg>
                </span>
                安徽省-合肥市
              </p>


              <p class="beian"><a target="_blank" href="https://beian.miit.gov.cn">粤ICP备18033086号</a> <img src="" alt=""></p>
            </div>
          </el-col>
          <el-col :md="16" :sm="16" :xs="24" class="main">
            <ul class="art-list">
              <li class="art-item" v-for="(item, index) in articleList" :key="index">
                <el-card shadow="hover" class="art-item-card">
                  <div class="card-content">
                    <h4>
                      <a href="">{{item.title}}</a>
                    </h4>

                    <div class="art-tags">
                      <el-tag type="success" size="mini">vue</el-tag>
                      <el-tag type="success" size="mini">node</el-tag>
                      <el-tag type="success" size="mini">egg</el-tag>
                    </div>

                    <div class="art-conetnt" v-html="item.content">

                    </div>

                    <div class="art-info">
                      <span class="art-avatar">
                        <img :src="userInfo.ava" alt="">
                      </span>

                      <span class="art-author-name">{{item.author}}</span>
                      发布在
                      <span class="art-www">
                        <a href="http:www.midawch.com">www.midawch.com</a>
                      </span>

                      <em class="atr-time">{{item.create_time | getTime}}</em>
                    </div>
                  </div>
                </el-card>
              </li>
            </ul>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="mobile">

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import 'swiper/swiper.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import { getArticleList } from '@/service'
import SwiperCore, {
  Autoplay,
  Navigation,
  EffectFade
} from 'swiper';
SwiperCore.use([Autoplay, EffectFade]);
// eslint-disable-next-line @typescript-eslint/no-var-requires
const moment = require('moment');

@Component({
  filters: {
    getTime(time: any = '') {
      return moment(time).format('YYYY-MM-DD HH:mm')
    }
  },
  components: {
    HelloWorld,
    Swiper,
    SwiperSlide
  },
})
export default class Home extends Vue {
  swiperOptions = {
    effect: 'fade',
    autoplay: {
      delay: 3000
    },
    loop: true,
  }
  swiperOptionsMobile = {
    effect: 'fade',
    autoplay: {
      delay: 3000
    },
    fadeEffect: {
      crossFade: true,
    },
    loop: true,
  }

  loading = false
  menus: Array<any> = [
    {
      title: 'wx',
      url: 'adsadsasdasd',
      className: 'wx',
      content: 'wch662688'
    },
    {
      title: 'qq',
      url: 'adsadsasdasd',
      className: 'qq',
      content: '454441207'
    },
    {
      title: 'github',
      url: 'adsadsasdasd',
      className: 'github',
      content: 'https://github.com/planet-ch'
    },
    {
      title: 'sina',
      url: 'adsadsasdasd',
      className: 'sina',
      content: '善战的朝源'
    }
  ]
  banners: Array<any> = [
    {
      title: '96号行星',
      bg: require('./../assets/img/bg.jpg'),
      slogan: 'Liberavi animam meam'
    },
    {
      title: '96号行星',
      bg: require('./../assets/img/bg_1.jpg'),
      slogan: 'Liberavi animam meam'
    },
    {
      title: '96号行星',
      bg: require('./../assets/img/bg_2.jpg'),
      slogan: 'Liberavi animam meam'
    },
    {
      title: '96号行星',
      bg: require('./../assets/img/bg_3.jpg'),
      slogan: 'Liberavi animam meam'
    }
  ]
  currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
  userInfo: any = {
    ava: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4021355728,2496228361&fm=26&gp=0.jpg'
  }
  artTime: any = moment().format('YYYY-MM-DD HH:mm')
  articleList: Array<any> = []


  created () {
    this.loading = true
    this.getClassList().then(() => {
      this.loading = false
    })
    setInterval(() => {
      this.currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
    }, 1000)
  }

  getClassList () {
    return getArticleList({}).then((res: any) => {
      this.articleList = res.data.data
    })
  }

  onSwiper(swiper: any) {
    console.log(swiper)
  }

  onSlideChange() {
    console.log('slide change')
  }

}
</script>

<style lang="scss" scoped>
$baseColor: rgb(36, 194, 203);
.home{
  .pc{
    width: 100%;
    .title-box{
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #FFF;
      width: 100%;
      height: 200px;
      h1{
        font-size: 40px;
        color: rgb(36, 194, 203);
        font-weight: 300;
        text-transform: uppercase;
        font-family: "Josefin Sans";
      }
    }
    .menu-list{
      height: 100px;
      border-top: 1px solid rgb(232, 232, 232);
      border-bottom: 1px solid rgb(232, 232, 232);
      background: #fff;
      .menu-left{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100px;
        .menu-item{
          cursor: pointer;
          display: inline-flex;
          width: 40px;
          align-items: center;
          justify-content: center;
          .menu-item-box{
            width: 20px;
            height: 20px;
            background-repeat: no-repeat;
            background-size: 20px;
            background-position: center;
            &.wx{
              background-image: url("./../assets/img/wx.png");
              &:hover{
                background-image: url("./../assets/img/wx_h.png");
              }
            }
            &.qq{
              background-image: url("./../assets/img/qq.png");
              &:hover{
                background-image: url("./../assets/img/qq_h.png");
              }
            }
            &.github{
              background-image: url("./../assets/img/github.png");
              &:hover{
                background-image: url("./../assets/img/github_h.png");
              }
            }
            &.sina{
              background-image: url("./../assets/img/sina.png");
              &:hover{
                background-image: url("./../assets/img/sina_h.png");
              }
            }
          }
        }
      }
      .menu-right{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100px;
        .menu-right-item{
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 100%;
          margin: 0 20px;
          &:hover{
            color: $baseColor;
          }
        }
      }
    }
    .bg-box{
      position: relative;
      width: 100%;
      height: 400px;
      overflow: hidden;
      &.mobile{
        display: none;
      }
      &.pc{
        display: block;
      }
      .bg-box-item{
        width: 100%;
        height: 100%;
      }
      img{
        width: 100%;
        height: auto;
        -webkit-filter: grayscale(60%); /* Chrome, Safari, Opera */
        filter: grayscale(60%);
        min-height: 400px;
      }
      color: #fff;
      .bg-title, .bg-content, .bg-time{
        position: absolute;
        top: 160px;
        left: 0;
        width: 100%;
        text-align: center;
        font-size: 18px;
        font-family: "Josefin Sans", sans-serif;
        &.bg-title:after{
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          bottom: -30px;
          display: block;
          content: '';
          width: 50px;
          height: 2px;
          background: #fff;
        }
      }
      .bg-content{
        top: 240px;
        font-size: 40px;
      }
      .bg-time{
        z-index: 9;
        top: 320px;
        font-size: 20px;
      }
    }
    .content{
      padding: 100px;
      background: #f0f2f5;
      .container{
        display: flex;
      }
      .mine{
        height: 1200px;
        .mine-info{
          width: 100%;
          height: 100%;
          background: #FFF;
          overflow: hidden;
          position: relative;
          .user-ava{
            margin: 40px auto 20px;
            width: 110px;
            height: 110px;
            border-radius: 50%;
          }
          .user-name{
            margin-bottom: 4px;
            color: rgba(0, 0, 0, 0.85);
            font-weight: 500;
            font-size: 20px;
            line-height: 28px;
          }
          .user-slogan{
            margin-bottom: 40px;
          }
          .user-cells{
            margin-top: 20px;
            text-align: left;
            padding-left: 40px;
          }
          .beian{
            width: 100%;
            text-align: center;
            position: absolute;
            bottom: 40px;
          }
        }
      }
      .main{
        .art-list{
          width: 100%;
          .art-item{
            display: block;
            width: 100%;
            //background: #ff6600;
            margin-bottom: 20px;
            ::v-deep .art-item-card{
              text-align: left;
              min-height: 240px;
              width: 100%;
              height: 100%;
              .card-content{
                box-sizing: border-box;
                padding-left: 20px;
                h4{
                  margin-bottom: 12px;
                  color: rgba(0, 0, 0, 0.85);
                  font-size: 16px;
                  line-height: 24px;
                  text-align: left;
                  transition: all 0.3s;
                  a:hover{
                    color: #1890ff;
                  }
                }

                .art-tags{
                  display: flex;
                  align-items: center;
                  justify-content: flex-start;
                  margin-bottom: 16px;
                  .el-tag{
                    margin-right: 8px !important;
                    padding: 0 7px;
                    border-radius: 0;
                  }
                }

                .art-conetnt{
                  text-indent: 2em;
                  max-width: 720px;
                  line-height: 22px;
                  margin-bottom: 16px;
                }

                .art-info{
                  .art-avatar{
                    display: inline-block;
                    width: 22px;
                    height: 22px;
                    margin-right: 10px;
                    cursor: pointer;
                    img{
                      width: 100%;
                      height: 100%;
                      border-radius: 50%;
                    }
                  }

                  .art-author-name, .art-www{
                    color: #1890ff;
                    margin: 0 4px;
                    cursor: pointer;
                    a{
                      color: #1890ff;
                    }
                  }

                  .atr-time{
                    margin-left: 10px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
@media screen and (min-width: 220px) and (max-width: 767px) {
  .home{
    .content{
      padding: 24px !important;
    }
    .bg-box{
      box-sizing: border-box;
      height: 200px !important;
      margin-top: 20px !important;
      .show-box{
        display: none;
      }
      &.mobile{
        display: block !important;
      }
      &.pc{
        display: none !important;
      }
      img{
        object-fit: contain;
        min-height: 200px !important;
        height: 200px !important;
      }
    }
    .mine{
      height: 600px !important;
      margin-bottom: 24px;
    }
  }
}
</style>
