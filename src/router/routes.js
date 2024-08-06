import LayoutClient from '../Layout/LayoutClient'
import Contact from '../Pages/Contact'
import Home from '../Pages/Home'
import Introduce from '../Pages/Introduce'
import Notification from '../Pages/Notification'
import Service from '../Pages/Service'

const routes = [
    {path:"/", component: Home, layout: LayoutClient},
    {path:"/Introduce",component: Introduce, layout: LayoutClient},
    {path:"/Notification",component: Notification, layout: LayoutClient},
    {path:"/Service",component: Service, layout: LayoutClient},
    {path:"/Contact",component: Contact, layout: LayoutClient},
]

export {routes}