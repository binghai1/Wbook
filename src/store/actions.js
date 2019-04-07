const actions={
    setFileName:({commit},newState)=>{
        return commit('SET_FILE_NAME',newState)
    },
    setShowMenu:({commit},newState)=>{
        return commit('SET_Show_Menu',newState)
    },
    setSettingVisible:({commit},newState)=>{
        return commit('SET_SETTING_VISIBLE',newState)
    },
    
    setDefaultFontSize:({commit},newState)=>{
        return commit('SET_DEFALUT_FONTSIZE',newState)
    }
}
export default actions