<template>
  <div class="final">
    <div class="final__title">
      <h1>{{ $t("final.title", { plan: $final() }) }}</h1>
    </div>
    <div class="final__content">
      <div class="flex justify-between">
        <div class="flex flex-col score">
          <div class="score__text">{{ $t('final.score') }}</div>
          <div class="score__img">
            <div class="relative">
              <div class="progress-circle">
                <svg viewBox="0 0 100 100">
                  <circle class="progress-circle-trail" cx="50" cy="50" r="40" fill="none" :style="trailStyle"></circle>
                  <circle class="progress-circle-path" cx="50" cy="50" r="40" fill="none" :style="strokeStyle"></circle>
                </svg>
              </div>
              <div class="absolute">
                <p class="big">{{ score }}</p>
                <p>{{ $t('final.required') }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-col">
          <div class="score__result">
            {{ $t('final.result') }}
            <span></span>
          </div>
          <div class="score__bg">
            <img
                :src="`/images/slides/age-picker/${gender.gender}/${age.activeAge}.png`"
                alt=""
            />
          </div>
        </div>
      </div>
      <div class="diagram">
        <div class="diagram__inner">
          <div class="diagram__col">
            <div class="diagram__item">
              <div class="num"><i>8.7</i>/10</div>
              <span></span>
            </div>
            <div class="diagram__text">
              <span>{{ $t('final.variant1') }}</span>
              {{ $t('final.answer1') }}
            </div>
          </div>
          <div class="diagram__col">
            <div class="diagram__item">
              <div class="num"><i>8.5</i>/10</div>
              <span></span>
            </div>
            <div class="diagram__text">
              <span>{{ $t('final.variant2') }}</span>
              {{ $t('final.answer2') }}
            </div>
          </div>
          <div class="diagram__col">
            <div class="diagram__item">
              <div class="num"><i>6.7</i>/10</div>
              <span></span>
            </div>
            <div class="diagram__text">
              <span>{{ $t('final.variant3') }}</span>
              {{ $t('final.answer3') }}
            </div>
          </div>
          <div class="diagram__col">
            <div class="diagram__item">
              <div class="num"><i>5</i>/10</div>
              <span></span>
            </div>
            <div class="diagram__text">
              <span>{{ $t('final.variant4') }}</span>
              {{ $t('final.answer4') }}
            </div>
          </div>
        </div>
        <div class="diagram__abs">
          <span>8</span>
        </div>
      </div>
    </div>
    <div class="final__bottom">
      <div class="final__bottom-img">
      </div>
      <div class="final__bottom-content">
        <p class="final__bottom-title">{{ $t('final.bottom_title') }}</p>
        <p class="final__bottom-text">{{ $t('final.bottom_text') }}</p>
      </div>
    </div>
    <div class="btn-wrapper">
      <a :href="goTo" class="btn big">{{ tradeText }}</a>
    </div>
  </div>
</template>
<script setup lang="ts">
import {useAgesStore} from "~/stores/ages";
import {useSlidesStore} from "~/stores/slides";
import {useGendersStore} from "~/stores/genders";
import {useTradesStore} from "~/stores/trades";
import {useUrlParamsStore} from "~/stores/urlParams";

const age = useAgesStore();
const slide = useSlidesStore();
const gender = useGendersStore();
const trade = useTradesStore();
const urlParams = useUrlParamsStore();
const len = Math.PI * 2 * 40;
const size = ref<number>(140);
let percent = ref<number>(0);
const strokeWidth:number = 10;
let strokeColor:string = '#80b918';
const trailWidth:number = 10;
const trailColor:string = '#f7f7f7';
const pathLen = 0;
const score = ref<number>(0);
const tradeText = ref<string>('');
const goTo = ref<string>('');

const innerStyle = computed(() => {
  return { width: `${size}px`, height: `${size}px` }
})

const strokeStyle = computed(() => {
  const currPercent = percent.value/100*len;
  return {
    stroke: strokeColor,
    strokeDasharray: `${currPercent}px,${len}px`,
    strokeDashoffset: `-${trailWidth}px`,
    strokeWidth: `${strokeWidth}px`,
    transition: 'stroke-dasharray 2s ease 0s, stroke 0.6s ease'
  }
})

const trailStyle = computed(() => {
  return {
    stroke: trailColor,
    strokeDasharray: `${len}px,${len}px`,
    strokeWidth: `${trailWidth}px`
  }
})

const pathStyle = computed(() => {
  const offset = percent.value === 100 ? 0 : pathLen;
  return {
    strokeDasharray: `${pathLen}px,${pathLen}px`,
  }
});

const circleFunc = (num:number) => {
  percent.value = num;
}

const { locale } = useI18n()
const $final = () => {
  if (locale.value === 'en') {
    return 'Wealth-Growth'
  } else if (locale.value === 'pt') {
    return 'crescimento de patrimônio'
  } else if (locale.value === 'es') {
    return 'crecimiento económico'
  }
}

const countdownToNumber = (start:number, end:number, duration:number) => {
  const intervalMs = 100; // Update every 100ms (adjust as needed)
  const steps = Math.abs(end - start);
  const stepSize = (steps / (duration / intervalMs)) * (end > start ? 1 : -1);

  let currentNumber = start;
  const timer = setInterval(() => {
    score.value = Number(currentNumber.toFixed(1));
    if ((end > start && currentNumber >= end) || (end < start && currentNumber <= end)) {
      clearInterval(timer);
    } else {
      currentNumber += stepSize;
    }
  }, intervalMs);
}

const getText = () => {
  if(trade.tradeType === 'signal') {
    if (locale.value === 'en') {
      tradeText.value = 'Get free signals';
    } else if (locale.value === 'pt') {
      tradeText.value = 'Obtenha sinais gratuitos';
    } else if (locale.value === 'es') {
      tradeText.value = 'Obtener indicadores gratis';
    }
  }
  else if(trade.tradeType === 'robot') {
    if (locale.value === 'en') {
      tradeText.value = 'Get free AI help';
    } else if (locale.value === 'pt') {
      tradeText.value = 'Obtenha ajuda gratuita sobre IA';
    } else if (locale.value === 'es') {
      tradeText.value = 'Obtenga ayuda de IA gratuita';
    }
  }
  else if(trade.tradeType === 'strategy') {
    if (locale.value === 'en') {
      tradeText.value = 'Get free $1000';
    } else if (locale.value === 'pt') {
      tradeText.value = 'Ganhe $1000 grátis';
    } else if (locale.value === 'es') {
      tradeText.value = 'Obtén $1000 gratis';
    }
  }
}

const getUrl = () => {
  if(trade.tradeType === 'signal') {
    goTo.value = 'https://t.me/exnovasignals';
  }

  else if(trade.tradeType === 'robot') {
    const temporaryUrl = 'https://app.appsflyer.com/com.exnova.bot?';
    if(urlParams.affParam || urlParams.affTrackParam) {
      goTo.value = temporaryUrl + 'pid=' + urlParams.affParam + '&c=' + urlParams.affTrackParam;
    }
    else {
      goTo.value = temporaryUrl + 'c=quiz';
    }
  }
  else if(trade.tradeType === 'strategy') {
    const temporaryUrl = 'https://trade.exnova.com/en/register?';
    if(urlParams.affParam || urlParams.affTrackParam) {
      goTo.value = temporaryUrl + 'pid=' + urlParams.affParam + '&c=' + urlParams.affTrackParam;
    }
    else {
      goTo.value = temporaryUrl + 'c=quiz';
    }
  }
}

onMounted(() => {
  age.loadAge();
  gender.loadGender();
  trade.loadTradeType();
  setTimeout(() => {
    circleFunc(80.9);
  }, 100);
  countdownToNumber(0.0, 80.9, 1800);
  getText();
  getUrl();
})

</script>

<style scoped lang="scss">
@import "@/assets/styles/components/final";

.progress-circle {
  transform: rotate(-100deg);
  &-inner{
    line-height: 1;
    background-color: transparent;
    display: inline-block;
    width: 100%;
    border-radius: 100px;
    vertical-align: middle;
    transform: rotate(-90deg);
  }
  &-trail,&-path{
    stroke-linecap: round;
    transition: stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s;
  }
  &-text {
    display: block;
    position: absolute;
    width: 100%;
    text-align: center;
    line-height: 1;
    font-size: 1.4em;
    color: rgba(0,0,0,.65);
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    font-family: tahoma;
    margin: 0;
  }
}

</style>
