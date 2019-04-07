import {mapGetters,mapActions} from 'vuex'
export const eBookMixin={
    computed: {
        ...mapGetters(['fileName','showMenu','settingVisible','defaultFontSize'])
    },
    methods:{
        ...mapActions(['setFileName','setShowMenu','setSettingVisible','setDefaultFontSize'])
    }
}
