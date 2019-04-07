const book={
    state: {
        fileName:'',
        showMenu:false,
        settingVisible:-1,//-1：不显示  0:字体 1:主题  3:跳转 4:目录
        defaultFontSize:16
    },
    mutations: {
        'SET_FILE_NAME':(state,newState)=>{
            state.fileName=newState
        },
        'SET_Show_Menu':(state,newState)=>{
            state.showMenu=newState
        },
        'SET_SETTING_VISIBLE':(state,newState)=>{
            state.settingVisible=newState
        },
        'SET_DEFALUT_FONTSIZE':(state,newState)=>{
            state.defaultFontSize=newState
        }
    }
   
}
export default book