import { Canvas, Easing, Path, useLoop } from '@shopify/react-native-skia';
import { View } from 'react-native';
import Animated, { BounceIn } from 'react-native-reanimated';

import { styles } from './styles';

import CoffeeSvg from '../../assets/coffee.svg';
import { THEME } from '../../styles/theme';

export function Coffee(){

  const smokeAnimated = useLoop({
    duration: 3000,
    easing: Easing.ease
  })

  const smoke2Animated = useLoop({
    duration: 3799,
    easing: Easing.ease
  })

  const smoke3Animated = useLoop({
    duration: 3339,
    easing: Easing.ease,
  })

  return(
    <View style={styles.container}>
      <Canvas style={styles.canvas}>
        <Path
          opacity={smokeAnimated}
          color={THEME.COLORS.GRAY_500}
          path="M40.1099 128.02C39.5257 125.027 37.3175 122.766 35.5107 120.408C33.7061 118.047 32.1658 114.886 33.242 112.042C34.2896 109.27 37.3477 108.104 40.1037 107.745C42.8605 107.38 45.835 107.418 48.0579 105.806C51.8242 103.094 51.3508 96.4394 47.9835 92.6068C44.617 88.7916 39.3878 87.6688 34.6281 88.2674C33.2335 88.432 31.5855 88.9699 31.1942 90.406C30.6968 92.229 32.6353 93.6203 34.3182 94.2158C36.0019 94.803 38.0652 95.6026 38.3379 97.4704C36.4466 98.1949 34.5197 98.9847 32.9561 100.366C31.3918 101.747 30.2257 103.835 30.3776 105.966C30.4976 107.645 31.4034 109.294 30.9594 110.925C30.0413 114.266 24.7261 114.018 23.4872 117.276C22.6357 119.494 24.2504 121.715 25.115 123.883C25.9619 126.001 26.1014 128.374 26.5701 130.639C27.0397 132.905 27.9679 135.251 29.822 136.436C33.7216 138.928 41.0009 132.627 40.1099 128.02Z"
        />

        <Path 
          opacity={smoke3Animated}
          color={THEME.COLORS.GRAY_500}
          path="M19.0628 94.756C16.1882 95.0436 13.1657 93.7789 12.5327 91.0144C11.8361 87.9867 14.0978 84.0668 12.9263 81.2872C11.9671 79.0227 9.24207 78.7571 7.24617 77.9075C4.33444 76.6595 2.75538 73.826 1.31656 71.1943C0.499136 69.696 -0.312083 68.1028 0.12026 65.8649C0.762576 62.4995 3.88815 59.2329 6.86342 57.4614C9.77592 55.6923 13.0875 54.6727 15.6986 55.8167C18.3112 56.9554 19.7586 60.7137 18.1012 63.8757C17.0552 65.8853 15.126 67.2532 13.5872 68.9389C12.0453 70.6245 10.7762 73.1811 11.6494 74.7796C12.8992 77.0714 17.3094 75.4115 18.7374 77.8619C19.733 79.5712 18.6018 82.2613 19.5416 84.0221H19.5424C21.047 86.826 26.9364 84.9446 27.5949 88.6983C28.269 92.5757 21.4794 94.4435 19.0628 94.756Z"
        />

        <Path 
          opacity={smoke2Animated}
          color={THEME.COLORS.GRAY_500}
          path="M55.7095 53.5947C58.3183 55.1461 61.5345 57.2156 63.2166 55.7894C64.8042 54.4512 63.6776 50.9462 62.4921 48.1135C59.5285 41.1545 55.99 33.185 49.6745 29.6604C46.5993 27.9732 43.2281 27.7069 39.9646 26.9748C36.7011 26.2147 33.2129 24.7171 32.0561 21.6454C30.6956 18.0381 33.0657 13.8846 35.3537 10.6535C37.8223 10.429 40.4853 10.3372 42.3068 8.88589C44.1261 7.44903 44.3051 3.87129 42.0496 2.56416C40.4287 1.6409 38.5142 2.49588 37.2969 3.77646C36.0789 5.054 35.2359 6.70177 33.8986 7.92166C31.5943 10.0178 28.2534 10.6065 25.2626 10.8826C22.2719 11.1406 19.3431 11.1626 16.4724 12.4704C12.2164 14.3852 8.46555 19.2193 6.60678 24.1246C5.3454 27.4899 5.2222 31.3378 7.61636 31.2968C8.5748 31.2907 9.72306 30.6717 10.7722 30.5556C13.3368 30.2901 14.7306 32.8816 17.2 33.5029C19.6584 34.1318 22.7305 32.852 25.5276 31.6579C28.3208 30.4539 31.317 29.2758 34.1202 30.0898C36.925 30.9053 39.0844 34.5976 37.4682 37.0275C36.3726 38.6882 34.1349 39.1123 32.1561 39.2094C30.1788 39.2951 28.11 39.2147 26.3218 40.2851C24.5335 41.3586 23.3248 44.095 24.5622 45.4439C22.6724 44.9538 20.4611 47.062 20.0636 49.1938C19.6646 51.324 20.6928 53.2062 22.1928 54.3389C27.4786 58.3991 31.7354 52.327 37.3481 50.7027C43.4094 48.9768 49.9867 50.1216 55.7095 53.5947Z"
        />

        <Path 
          opacity={smoke2Animated}
          color={THEME.COLORS.GRAY_500}
          path="M29.6818 4.25056C30.7139 3.31896 31.2136 1.83431 30.9022 0.573454C28.8714 -0.117664 26.6508 -0.190488 24.4798 0.389869C22.8643 0.80712 20.9126 2.14762 20.8645 3.79538C20.8335 4.81347 21.6285 5.45453 22.5497 5.59033C23.4547 5.63736 28.6575 4.31353 29.6818 4.25056Z"
        />
      </Canvas>
      
      <Animated.View entering={BounceIn}>
        <CoffeeSvg />
      </Animated.View>
    </View>
  )
}