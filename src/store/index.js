import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state :{
    //social login token by userId
    userId :'-1',
    //videoStoreData
    mediaSrc: 'none',
    medType: 'video/mp4',
    subTitleContent: '',
    nativeSubTitleDataJson: [],
    subTitleDataJson: [],
    subTitleIndex: -1,
    selectFontStyleData: {
      fontName : "",
      fontStyleName : "",
      fontStyleData : ""
    },
    //selectFunctionData
    selectFunctionType: [],
    selectFunctionPlace: 0,
    videoFileNameStore: "",
    //video UPload Const
    sliceDefaultSize: 10000000, //10MB
    //Loading style
    isCheckLoadingPage: false
  },
  mutations :{
    setUser(user, userId){
      user.userId = userId
    }
  }
})
