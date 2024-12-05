import hasRole from '@/directive/permission/hasRole'
import hasPermission from '@/directive/permission/hasPermission'

const initDirective = (app: any) => {
  app.directive('hasRole', hasRole)
  app.directive('hasPermission', hasPermission)
}

export default initDirective
