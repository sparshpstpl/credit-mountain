import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/',
    icon: 'icon-home'
  },{
    name: 'Users',
    url: '/users',
    icon: 'icon-people'
  },{
    name: 'Payments',
    url: '/payments',
    icon: 'icon-organization'
  },{
    name: 'Files',
    url: '/files',
    icon: 'icon-event'
  },
  {
    name: 'Logout',
    url: '/logout',
    icon: 'icon-logout'
  }
  
  /* 
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Theme'
  },
  {
    name: 'Users',
    url: '/users/list',
    icon: 'icon-people'
  },
  {
    name: 'Colors',
    url: '/layout/theme/colors',
    icon: 'icon-drop'
  },
  {
    name: 'Typography',
    url: '/layout/theme/typography',
    icon: 'icon-pencil'
  },
  {
    title: true,
    name: 'Components'
  },
  {
    name: 'Base',
    url: '/layout/base',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Cards',
        url: '/layout/base/cards',
        icon: 'icon-puzzle'
      },
      {
        name: 'Carousels',
        url: '/layout/base/carousels',
        icon: 'icon-puzzle'
      },
      {
        name: 'Collapses',
        url: '/layout/base/collapses',
        icon: 'icon-puzzle'
      },
      {
        name: 'Forms',
        url: '/layout/base/forms',
        icon: 'icon-puzzle'
      },
      {
        name: 'Navbars',
        url: '/layout/base/navbars',
        icon: 'icon-puzzle'

      },
      {
        name: 'Pagination',
        url: '/layout/base/paginations',
        icon: 'icon-puzzle'
      },
      {
        name: 'Popovers',
        url: '/layout/base/popovers',
        icon: 'icon-puzzle'
      },
      {
        name: 'Progress',
        url: '/layout/base/progress',
        icon: 'icon-puzzle'
      },
      {
        name: 'Switches',
        url: '/layout/base/switches',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tables',
        url: '/layout/base/tables',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tabs',
        url: '/layout/base/tabs',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tooltips',
        url: '/layout/base/tooltips',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Buttons',
    url: '/layout/buttons',
    icon: 'icon-cursor',
    children: [
      {
        name: 'Buttons',
        url: '/layout/buttons/buttons',
        icon: 'icon-cursor'
      },
      {
        name: 'Dropdowns',
        url: '/layout/buttons/dropdowns',
        icon: 'icon-cursor'
      },
      {
        name: 'Brand Buttons',
        url: '/layout/buttons/brand-buttons',
        icon: 'icon-cursor'
      }
    ]
  },
  {
    name: 'Charts',
    url: '/layout/charts',
    icon: 'icon-pie-chart'
  },
  {
    name: 'Icons',
    url: '/layout/icons',
    icon: 'icon-star',
    children: [
      {
        name: 'CoreUI Icons',
        url: '/layout/icons/coreui-icons',
        icon: 'icon-star',
        badge: {
          variant: 'success',
          text: 'NEW'
        }
      },
      {
        name: 'Flags',
        url: '/layout/icons/flags',
        icon: 'icon-star'
      },
      {
        name: 'Font Awesome',
        url: '/layout/icons/font-awesome',
        icon: 'icon-star',
        badge: {
          variant: 'secondary',
          text: '4.7'
        }
      },
      {
        name: 'Simple Line Icons',
        url: '/layout/icons/simple-line-icons',
        icon: 'icon-star'
      }
    ]
  },
  {
    name: 'Notifications',
    url: '/layout/notifications',
    icon: 'icon-bell',
    children: [
      {
        name: 'Alerts',
        url: '/layout/notifications/alerts',
        icon: 'icon-bell'
      },
      {
        name: 'Badges',
        url: '/layout/notifications/badges',
        icon: 'icon-bell'
      },
      {
        name: 'Modals',
        url: '/layout/notifications/modals',
        icon: 'icon-bell'
      }
    ]
  },
  {
    name: 'Widgets',
    url: '/layout/widgets',
    icon: 'icon-calculator',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    divider: true
  },
  {
    title: true,
    name: 'Extras',
  },
  {
    name: 'Pages',
    url: '/layout/pages',
    icon: 'icon-star',
    children: [
      {
        name: 'Login',
        url: '/layout/login',
        icon: 'icon-star'
      },
      {
        name: 'Register',
        url: '/layout/register',
        icon: 'icon-star'
      },
      {
        name: 'Error 404',
        url: '/layout/404',
        icon: 'icon-star'
      },
      {
        name: 'Error 500',
        url: '/layout/500',
        icon: 'icon-star'
      }
    ]
  },
  {
    name: 'Disabled',
    url: '/layout/dashboard',
    icon: 'icon-ban',
    badge: {
      variant: 'secondary',
      text: 'NEW'
    },
    attributes: { disabled: true },
  },
  {
    name: 'Download CoreUI',
    url: 'http://coreui.io/angular/',
    icon: 'icon-cloud-download',
    class: 'mt-auto',
    variant: 'success',
    attributes: { target: '_blank', rel: 'noopener' }
  },
  {
    name: 'Try CoreUI PRO',
    url: 'http://coreui.io/pro/angular/',
    icon: 'icon-layers',
    variant: 'danger',
    attributes: { target: '_blank', rel: 'noopener' }
  }
 */];
/* export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Theme'
  },
  {
    name: 'Users',
    url: '/users/list',
    icon: 'icon-people'
  },
  {
    name: 'Colors',
    url: '/layout/theme/colors',
    icon: 'icon-drop'
  },
  {
    name: 'Typography',
    url: '/layout/theme/typography',
    icon: 'icon-pencil'
  },
  {
    title: true,
    name: 'Components'
  },
  {
    name: 'Base',
    url: '/layout/base',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Cards',
        url: '/layout/base/cards',
        icon: 'icon-puzzle'
      },
      {
        name: 'Carousels',
        url: '/layout/base/carousels',
        icon: 'icon-puzzle'
      },
      {
        name: 'Collapses',
        url: '/layout/base/collapses',
        icon: 'icon-puzzle'
      },
      {
        name: 'Forms',
        url: '/layout/base/forms',
        icon: 'icon-puzzle'
      },
      {
        name: 'Navbars',
        url: '/layout/base/navbars',
        icon: 'icon-puzzle'

      },
      {
        name: 'Pagination',
        url: '/layout/base/paginations',
        icon: 'icon-puzzle'
      },
      {
        name: 'Popovers',
        url: '/layout/base/popovers',
        icon: 'icon-puzzle'
      },
      {
        name: 'Progress',
        url: '/layout/base/progress',
        icon: 'icon-puzzle'
      },
      {
        name: 'Switches',
        url: '/layout/base/switches',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tables',
        url: '/layout/base/tables',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tabs',
        url: '/layout/base/tabs',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tooltips',
        url: '/layout/base/tooltips',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Buttons',
    url: '/layout/buttons',
    icon: 'icon-cursor',
    children: [
      {
        name: 'Buttons',
        url: '/layout/buttons/buttons',
        icon: 'icon-cursor'
      },
      {
        name: 'Dropdowns',
        url: '/layout/buttons/dropdowns',
        icon: 'icon-cursor'
      },
      {
        name: 'Brand Buttons',
        url: '/layout/buttons/brand-buttons',
        icon: 'icon-cursor'
      }
    ]
  },
  {
    name: 'Charts',
    url: '/layout/charts',
    icon: 'icon-pie-chart'
  },
  {
    name: 'Icons',
    url: '/layout/icons',
    icon: 'icon-star',
    children: [
      {
        name: 'CoreUI Icons',
        url: '/layout/icons/coreui-icons',
        icon: 'icon-star',
        badge: {
          variant: 'success',
          text: 'NEW'
        }
      },
      {
        name: 'Flags',
        url: '/layout/icons/flags',
        icon: 'icon-star'
      },
      {
        name: 'Font Awesome',
        url: '/layout/icons/font-awesome',
        icon: 'icon-star',
        badge: {
          variant: 'secondary',
          text: '4.7'
        }
      },
      {
        name: 'Simple Line Icons',
        url: '/layout/icons/simple-line-icons',
        icon: 'icon-star'
      }
    ]
  },
  {
    name: 'Notifications',
    url: '/layout/notifications',
    icon: 'icon-bell',
    children: [
      {
        name: 'Alerts',
        url: '/layout/notifications/alerts',
        icon: 'icon-bell'
      },
      {
        name: 'Badges',
        url: '/layout/notifications/badges',
        icon: 'icon-bell'
      },
      {
        name: 'Modals',
        url: '/layout/notifications/modals',
        icon: 'icon-bell'
      }
    ]
  },
  {
    name: 'Widgets',
    url: '/layout/widgets',
    icon: 'icon-calculator',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    divider: true
  },
  {
    title: true,
    name: 'Extras',
  },
  {
    name: 'Pages',
    url: '/layout/pages',
    icon: 'icon-star',
    children: [
      {
        name: 'Login',
        url: '/layout/login',
        icon: 'icon-star'
      },
      {
        name: 'Register',
        url: '/layout/register',
        icon: 'icon-star'
      },
      {
        name: 'Error 404',
        url: '/layout/404',
        icon: 'icon-star'
      },
      {
        name: 'Error 500',
        url: '/layout/500',
        icon: 'icon-star'
      }
    ]
  },
  {
    name: 'Disabled',
    url: '/layout/dashboard',
    icon: 'icon-ban',
    badge: {
      variant: 'secondary',
      text: 'NEW'
    },
    attributes: { disabled: true },
  },
  {
    name: 'Download CoreUI',
    url: 'http://coreui.io/angular/',
    icon: 'icon-cloud-download',
    class: 'mt-auto',
    variant: 'success',
    attributes: { target: '_blank', rel: 'noopener' }
  },
  {
    name: 'Try CoreUI PRO',
    url: 'http://coreui.io/pro/angular/',
    icon: 'icon-layers',
    variant: 'danger',
    attributes: { target: '_blank', rel: 'noopener' }
  }
]; */
