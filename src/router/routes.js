import LayoutClient from '../Layout/LayoutClient'
import Home from '../Pages/Home'
import Introduce from '../Pages/Introduce'

const routes = [
    {path:"/", component: Home, layout: LayoutClient},
    {path:"/Introduce",component: Introduce, layout: LayoutClient},
    {path:"/Notification",component: Introduce, layout: LayoutClient},
    {path:"/Service",component: Introduce, layout: LayoutClient},
    {path:"/Contact",component: Introduce, layout: LayoutClient},
]

export {routes}