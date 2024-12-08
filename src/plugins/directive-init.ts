import hasPermission from '@/directive/permission/hasPermission'
import hasRole from '@/directive/permission/hasRole'

function initDirective(app: any) {
  app.directive('hasRole', hasRole)
  app.directive('hasPermission', hasPermission)
}

export default initDirective
