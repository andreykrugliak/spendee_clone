import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center'
  },
  styleBtnActive: {
    backgroundColor: Colors.charcoal,
    borderWidth: 1,
    borderColor: Colors.charcoal
  },
  styleBtnNonActive: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.charcoal
  },
  typesContainer: {
    flex: 1,
    padding: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center'
  }

})
