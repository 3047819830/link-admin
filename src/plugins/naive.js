import {
    // create naive ui
    create,
    // component
    NConfigProvider,
    NMessageProvider,
    NButton,
    NIcon,
} from 'naive-ui'

const naive = create({
    components: [
        NConfigProvider,
        NMessageProvider,
        NButton,
        NIcon,
    ],
})

export default naive
